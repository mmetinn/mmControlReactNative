import { combineReducers } from 'redux';
import { doktorReducer } from './reducers/doktorReducer';
import { hastaReducer } from './reducers/hastaReducer';

const allReducers = {
  doktorReducer,
  hastaReducer
};

export const rootReducer = combineReducers(allReducers);