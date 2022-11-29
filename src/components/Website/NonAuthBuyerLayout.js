 import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";

class NonAuthLayout extends Component {
 
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}
 
export default  NonAuthLayout
