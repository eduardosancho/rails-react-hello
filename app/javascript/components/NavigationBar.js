import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => (
  <nav>
    <h1> Rails React Hello App</h1>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/greetings">Greetings</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
