import React from "react";

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from "react-redux";

import Greeting from "./Greeting";

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
              <Route path="/hello" element={ <Greeting greeting="Friend"/> } />
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
