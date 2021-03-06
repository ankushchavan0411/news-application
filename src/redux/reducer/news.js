/**
 * @author Ankush Chavan
 * @description This is our news reducer
 */

import * as actionType from "../../lib/const/actionTypes";

const initialState = {
  newsList: [],
};

/**
 * @param {*} state
 * @param {*} action
 */
const news = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.GET_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newsList: payload,
      };
    default:
      return state;
  }
};

export default news;
