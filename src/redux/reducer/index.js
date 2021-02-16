/**
 * @author Ankush Chavan
 * @description Here we have combine all our reducer
 */
import { combineReducers } from "redux";
import news from "./news";
import alert from "./alert";
import loader from "./loader";

export default combineReducers({ news, alert, loader });
