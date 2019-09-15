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
    <div className="App-header">
      <h1>hover over me!</h1>
      <Chick />
    </div>
  );
};

export default withProvider(App);
