/**
 * @author Ankush Chavan
 * @description Here we have create redux store
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

export default createStore(rootReducer, applyMiddleware(thunk));
