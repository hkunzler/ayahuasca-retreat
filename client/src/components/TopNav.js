import React, { Component } from "react";
import "./../top-nav.css";
import { Navbar, NavItem } from "react-materialize";
import Logo from "./../media/logo.jpg";
import { withAdmin } from "../context/AdminProvider";

class TopNav extends Component {
  render() {
    const Img = <img src={Logo} />;
    return (
      <Navbar brand={Img} alignLinks="right" fixed="true" centerLogo="true">
        <NavItem href="/#home" onClick={this.props.logout}>
          {" "}
          <i class="fas fa-home" />{" "}
        </NavItem>
        <NavItem href="/#retreats"> Retreats </NavItem>
        <NavItem href="/#about"> About </NavItem>
        <NavItem href="/#kamboApts"> Kambo Appointments </NavItem>
        <NavItem href="/#testimony"> Testimony </NavItem>
      </Navbar>
    );
  }
}

export default withAdmin(TopNav);
