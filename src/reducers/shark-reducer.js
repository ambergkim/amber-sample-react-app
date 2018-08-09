import {
  DATA_INFLATE
} from '../actions/shark-actions.js';

const initialState = {
  currentProduct: {},
}

export default function dataReducer(state, action) {
  if (state === undefined) {
    return initialState;
  };

  let newState = {};

  console.log('action json', action.json);

  switch(action.type) {
    case DATA_INFLATE:
      return Object.assign(newState, state, {currentProduct: action.json});
    default: return state;
  }
}