import React, { useEffect } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import withProvider from "./redux/provider";
import store from "./redux/store";

import Fire from "./components/Fire";
import Chick from "./components/Chick";

const App = ({ ...props }) => {
  console.log(store.getState());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Chick />
      </header>
    </div>
  );
};

export default withProvider(App);
