import React from "react";
import PropTypes from "prop-types";

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HelloWorld from "./HelloWorld";

class App extends React.Component {
  render () {
    return (
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={"Hello World"} />
            <Route path="/hello" element={ <HelloWorld greeting="Friend"/> } />
          <React.Fragment>
          </React.Fragment>
          </Routes>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App
