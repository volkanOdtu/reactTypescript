import React, { Component } from "react";
import ReactDOM from "react-dom";

import initServices from "./Services";

import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "react-app-polyfill/ie11";
import "core-js/es/object/values";
import "core-js/es/promise";
import "core-js/es/array";
import "core-js/stable/string";
import "core-js/stable/number";

import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

class AppContainer extends Component {
  private Services: void;

  constructor(props: any) {
    super(props);
    this.Services = initServices();
  }

  render() {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
