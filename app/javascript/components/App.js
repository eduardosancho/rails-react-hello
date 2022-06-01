import React from "react";
import PropTypes from "prop-types";

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from "react-redux";

import HelloWorld from "./HelloWorld";

import configureStore from "../configureStore";
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={"Hello World"} />
              <Route path="/hello" element={ <HelloWorld greeting="Friend"/> } />
            <React.Fragment>
            </React.Fragment>
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>
    );
  }
}

export default App
