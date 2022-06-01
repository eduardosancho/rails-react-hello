import React from "react"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PropTypes from "prop-types"

import { v4 as uuidv4 } from 'uuid';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

function getGreetings() {
  console.log('getGreetings() Action!!');
  return dispatch => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch(`v1/greetings.json`)
      .then(response => response.json())
      .then(json => dispatch(getGreetingsSuccess(json)))
      .catch(error => console.log(error));
  };
};

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  }
}

class Greeting extends React.Component {
  render() {
    const { greetings } = this.props;

    return (
      <React.Fragment>
        <em>Get from the API endpoint '/v1/greetings.json': </em>
        <br />
        <button className="getGreetingsBtn" onClick={() => this.props.getGreetings()}>Get Greetings</button>
        <br />
        <br />
        Your fetched greeting: {this.props.greeting}
        <p>{greetings[0].message}</p>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

Greeting.propTypes = {
  greeting: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
