import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from "./component/user";
import axios from "axios";
import Login from "./component/login";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    var style = {
      "list-style-type": "none",
      fontSize: 20,
      textAlign: "left",
      float: "left",
      width: "40%"
    };

    var button__container = {
      margintop: "200px",
      textalign: "center"
    };
    var button = {
      backgroundcolor: "green",
      border: "none",
      color: "white",
      fontsize: 16,
      height: "40px",
      width: "200px"
    };

    return (
      <div>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
