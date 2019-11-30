import { constants as CONSTS} from "../../constants/constants";

const initialState = {
    loggedIn:false
  };

  
  
  export const loginReducer = function(state = initialState, action) {
    switch (action.type) {
      case CONSTS.LOG_IN:
        return Object.assign({}, state, { loggedIn: true });
      case CONSTS.LOG_OUT:
        return Object.assign({}, state, { loggedIn: false });       
      default:
        return state;
    }
  };