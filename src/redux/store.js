import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  getProductDetailsReducer,
  getProductReducer,
} from "./reducers/productReducer";

//* multiple reducer have to get combined with combineReducer fn
//* combineReducer takes an obj, inside that obj we pass mutiple reducers
const reducer = combineReducers({
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

//* createStore takes 2 args: reducers,middleware
//* redux-thunk used in action for api call
//*to use middleware in devtools, e have 2 use applymiddleware
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
