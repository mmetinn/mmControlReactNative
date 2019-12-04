import { combineReducers } from 'redux';
import { loginReducer } from './reducers/loginReducer';

const allReducers = {
  loginReducer
};

export const rootReducer = combineReducers(allReducers);