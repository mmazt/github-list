import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { env } from './envVariables/getEnv';
import rootReducer from './reducers';

const configureStore = () => {
  const win: any = window;
  const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store: any =
    env().env === 'dev'
      ? createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
      : createStore(rootReducer);

  return store;
};

export default configureStore;
