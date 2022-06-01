import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PropTypes from 'prop-types';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json,
  };
}

const getGreetings = () => (dispatch) => {
  dispatch({ type: GET_GREETINGS_REQUEST });
  return fetch('v1/greetings.json')
    .then((response) => response.json())
    .then((json) => dispatch(getGreetingsSuccess(json)));
};

const Greeting = (props) => {
  const { greetings } = props;
  const { getGreetings } = props;
  return (
    <>
      <em>Get from the API endpoint &apos;/v1/greetings.json&apos;: </em>
      <br />
      <button type="button" className="getGreetingsBtn" onClick={() => getGreetings()}>Get Greetings</button>
      <br />
      <br />
      Your fetched greeting:
      {' '}
      <p>{greetings[0].message}</p>
    </>
  );
};

const structuredSelector = createStructuredSelector({
  greetings: (state) => state.greetings,
});

const mapDispatchToProps = { getGreetings };

Greeting.propTypes = {
  greetings: PropTypes.arrayOf(Object).isRequired,
  getGreetings: PropTypes.func.isRequired,
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
