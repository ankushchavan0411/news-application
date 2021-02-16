/**
 * @author Ankush Chavan
 * @description This is our loader reducer
 */

import * as actionType from "../../lib/const/actionTypes";

const initialState = {
  loading: false,
};

/**
 * @param {*} state
 * @param {*} action
 */
const news = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actionType.LOADING_STARTED:
      return {
        ...state,
        loading: true,
      };
    case actionType.LOADING_STOP:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default news;
