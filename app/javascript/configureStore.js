import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

import { composedWithDevTools, composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  things: [
    {
      name: "test",
      guid: "123"
    },
    {
      name: "test2",
      guid: "456"
    }
  ]
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_THINGS_SUCCESS":
      return { things: action.json.things };
    default:
      return state
  }
  // return state;
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      )
    )
  );
  return store;
}