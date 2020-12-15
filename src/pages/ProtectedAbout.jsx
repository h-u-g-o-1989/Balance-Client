import React, { Component } from "react";

export default class ProtectedAbout extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>About us</h1>
          <p>
            Balance is a ... Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
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
          <button>Delete your account</button>
        </div>
      </div>
    );
  }
}
