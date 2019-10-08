import { combineReducers } from "redux";

/*const initialState = {
    user: null,
    isLoggedIn: false,
    isError: false,
    errors: null,
    token: null,
}*/
const createUser = (state = {}, action) => {
    switch (action.type) {
        case "CREATE_USER_LOADING":
            return {
                isLoading: true,
                isError: false,
                isSuccess: false,
                errors: null,
                isLoggedIn:false,
            }
        case "CREAT_USER_SUCCESS":
            return {
                isLoading: false,
                isError: false,
                isSuccess: true,
                errors: null,
                isLoggedIn:true,

            }

        case "CREAT_USER_FAIL":
            return {
                isLoading: false,
                isError: true,
                isSuccess: false,
                errors: action.payload,
                isLoggedIn:false,
            }

        default:
            return state;
    }
}
/*export default (state = initialState, action) => {
    return state;
}*/

export default combineReducers({
    createUser
});