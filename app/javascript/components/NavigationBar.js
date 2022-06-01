import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <h1> Rails React Hello App</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/hello">Greeting</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;