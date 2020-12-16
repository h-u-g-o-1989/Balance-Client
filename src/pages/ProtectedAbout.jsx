import React, { Component } from "react";
import { deleteAccount } from "../services/auth";

export default class ProtectedAbout extends Component {
  deleteAccount = () => {
    deleteAccount().then((data) => this.props.authenticate(null));
  };

  render() {
    return (
      <div>
        <div>
          <h1>About us</h1>
          <p>
            Balance is an app designed to help you find your work-life balance,
            offering you useful resources to help ease the struggles of modern
            life. Created in December 2020 by Hugo Embleton-Black and Marta
            Sastre Haro, balance was built using the full MERN stack (MongoDB,
            Express, React & Node). The source code may be found here for the{" "}
            <a
              href="https://github.com/h-u-g-o-1989/Balance-Client"
              target="_blank"
            >
              Front-End
            </a>{" "}
            and here for the{" "}
            <a
              href="https://github.com/h-u-g-o-1989/Balance-server"
              target="_blank"
            >
              Back-End
            </a>
            .
          </p>
        </div>

        <br />
        <div>
          <h2>Contact us</h2>
          <p>info@balance.com</p>
          <p>123 Bridgeton Road,</p>
          <p>London, UK</p>
          <p>+44 789 789 789</p>
        </div>
        <br />
        <div>
          <h2>No longer want to use Balance?</h2>
          <p>
            We are always looking for suggestions to improve our app, so if you
            feel that you are missing some key features, do not hesitate to
            email us! However, if you feel your time with us is done, you can
            always delete your account (this action is permanent so proceed with
            caution).
          </p>
          <button onClick={this.deleteAccount}>Delete your account</button>
        </div>
      </div>
    );
  }
}
