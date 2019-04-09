import React, { Component } from "react";
import { withAdmin } from "../context/AdminProvider";
import Home from "./Home";
import Retreats from "./Retreats";
import About from "./About";
import KamboApts from "./KamboApts";
import Testimony from "./Testimony";
import Footer from "./Footer";
import Button from "./BookButton";
import "../styles.css";

class Master extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <div className="background-sides">
        <div className="body-background  ">
          <div className="white-layer">
            <Button />
            <Home />
            <Retreats />
            <About />
            <KamboApts />
            <Testimony />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default withAdmin(Master);
