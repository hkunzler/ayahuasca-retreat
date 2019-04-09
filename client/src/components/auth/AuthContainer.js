import React, { Component } from "react";
import AuthForm from "./AuthForm";
import { withAdmin } from "../../context/AdminProvider";
import "./../../auth-container.css";

class AuthContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      authToggle: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(credentials);
  };

  render() {
    return (
      <div className="background-sides">
        <div id="auth-container" className="body-background">
          <h4
            style={{
              textShadow:
                "-1px -1px 0 rgb(255, 255, 255),  1px -1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px 1px 0 rgb(255, 255, 255)"
            }}
          >
            Login
          </h4>
          <div className="login-box">
            <AuthForm
              handleChange={this.handleChange}
              handleSubmit={this.handleLogin}
              username={this.state.username}
              password={this.state.password}
              buttonText="Login"
            />
            <p style={{ color: "red" }}>{this.props.errMsg}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withAdmin(AuthContainer);
