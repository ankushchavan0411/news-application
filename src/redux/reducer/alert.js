/**
 * @author Ankush Chavan
 * @description This is our alert reducer
 */

import * as actionType from "../../lib/const/actionTypes";

const initialState = {
  type: "",
  message: "",
};

/**
 * @param {*} state
 * @param {*} action
 */
const news = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.ALERT_SUCCESS:
      return {
        ...state,
        type: "success",
        message: payload,
      };
    case actionType.ALERT_INFO:
      return {
        ...state,
        type: "info",
        message: payload,
      };
    case actionType.ALERT_WARNING:
      return {
        ...state,
        type: "warning",
        message: payload,
      };
    case actionType.ALERT_FAIL:
      return {
        ...state,
        type: "error",
        message: payload,
      };
    case actionType.ALERT_CLEAR:
      return {
        ...state,
        type: "",
        message: "",
      };
    default:
      return state;
  }
};

export default news;
