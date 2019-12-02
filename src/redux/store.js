/*import { createStore ,compose,applyMiddleware} from 'redux';
import { rootReducer } from './rootReducer';
import thunk from "redux-thunk";


let composeEnhancers = compose;
if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);*/

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import thunk from "redux-thunk";

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));/*
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore,compose} from 'redux';
import { rootReducer } from './rootReducer';
import devToolsEnhancer from 'remote-redux-devtools';
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export const store =
  createStore(
    rootReducer,
    composeWithDevTools()
  );
*/