import React from 'react';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import NavigationBar from './NavigationBar';
import Greeting from './Greeting';

import configureStore from '../configureStore';

const store = configureStore();

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <hr />
        <Routes>
          <Route path="/" element="Hello World" />
          <Route path="/greetings" element={<Greeting />} />
          <></>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

export default App;
