import { createStore ,compose,applyMiddleware} from 'redux';
import { rootReducer } from './rootReducer';
import thunk from "redux-thunk";


let composeEnhancers = compose;
if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);