import React, { Component } from "react";
import { withPost } from "../context/PostProvider";
import "./../admin-page.css";
import { withAdmin } from "../context/AdminProvider";
import { Modal } from 'react-materialize'
import Check from './../media/check.gif'

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.price);
  };

  handleSubmit = e => {
    e.preventDefault();
    const newPost = { price: this.state.price };
    this.props.createPost(newPost);
  };

  render() {
    return (
      <div className="background-sides">
        <div id="admin-page" className="body-background">
        <div style={{
            background: "rgba(255, 255, 255, 0.67)",
            width: "100%",
            margin: "0 !important",
            height: "100vh"
          }}>
          <h4
            style={{
              textShadow:
                "-1px -1px 0 rgb(255, 255, 255),  1px -1px 0 rgb(255, 255, 255),-1px 1px 0 rgb(255, 255, 255),1px 1px 0 rgb(255, 255, 255)"
            }}
          >
            Price Change
          </h4>
          <div className="admin-box">
            <form>
              <div className="admin-grid">
                <p>Price: $</p>
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="price"
                  value={this.state.price}
                  placeholder="Price"
                />
              </div>
              <button
              onClick={this.handleSubmit}
                href="#modal1"
                className="modal-trigger"
              >
                Submit
              </button>
            </form>
              <Modal id="modal1" header="Price Changed">
                <img src={Check} />
              </Modal>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withAdmin(withPost(AdminPage));
