import { constants as CONSTS } from "../../constants/constants";

const initialState = {
  loginStatus: 'anan',
  loggedIn: false,
  token:'',
};



export const loginReducer = function (state = initialState, action) {
  switch (action.type) {
    case CONSTS.LOG_IN:
      return Object.assign({}, state, { loggedIn: action.payload.loggedIn, loginStatus: action.payload.loginStatus,token: action.payload.token });
    case CONSTS.LOG_OUT:
      return Object.assign({}, state, { loggedIn: false , loginStatus: 'FAILED'});
    default:
      return state;
  }
};