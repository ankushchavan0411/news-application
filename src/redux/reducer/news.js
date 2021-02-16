import * as actionType from "../../lib/const/actionTypes";

const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

const news = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.GET_NEWS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.GET_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        news: payload,
      };
    case actionType.GET_NEWS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.message,
      };
    default:
      return state;
  }
};

export default news;
