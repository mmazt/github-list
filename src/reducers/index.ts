import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  commits: {
    options: [],
    results: []
  },
  repos: {
    list: []
  }
};

// Reducer das ações relacionadas aos resultados das buscas
function searchReducer(
  state = initialState.commits,
  action: { payload: {}; type: string } | any
) {
  switch (action.type) {
    case ActionTypes.SEARCH_TERM:
      return Object.assign({}, state, {
        results: action.payload
      });
    case ActionTypes.SEARCH_OPTIONS:
      return Object.assign({}, state, {
        options: action.payload
      });
    default:
      return state;
  }
}

function reposReducer(
  state = initialState.repos,
  action: { payload: [any]; type: string } | any
) {
  switch (action.type) {
    case ActionTypes.REPOS:
      return Object.assign({}, state, { list: action.payload });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reposReducer,
  searchReducer
});

export default rootReducer;
