import React from "react";

import { Routes, Route, NavLink } from 'react-router-dom';
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
            <nav>
              <h1> Rails React Hello App</h1>
              <ul>
                <li>
                  <NavLink activeclassName='active' to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink activeclassName='active' to="/hello">Greeting</NavLink>
                </li>
              </ul>
            </nav>
            <hr />
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
