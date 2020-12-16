import React, { Component } from "react";
import { signup } from "../services/auth";
import "./auth.css";

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    error: null,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    console.log("Submitting signup form", this.state);
    const credentials = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    };
    signup(credentials).then((res) => {
      // successful signup
      console.log("results of signing up!", res);
      if (!res.status) {
        // unsuccessful signup
      }
      localStorage.setItem("accessToken", res.data.accessToken);
      this.props.authenticate(res.data.user);
      console.log("res data user", res.data.user);
      this.props.history.push("/home");
    });
  };

  render() {
    return (
      <div className="authForm">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleFormSubmission} className="auth__form">
          <label htmlFor="input-username">Username</label>
          <input
            id="input-username"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="input-email">Email</label>
          <input
            id="input-email"
            type="text"
            name="email"
            placeholder="User Email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />

          <label htmlFor="input-password">Password</label>
          <input
            id="input-password"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
            minLength="8"
          />

          {this.state.error && (
            <div className="error-block">
              <p>There was an error submiting the form:</p>
              <p>{this.state.error.message}</p>
            </div>
          )}

          <button className="button__submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
