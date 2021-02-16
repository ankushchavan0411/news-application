import * as services from "../../services";
import * as actionTypes from "../../lib/const/actionTypes";

const getNews = (payload) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_NEWS_STARTED });
    // Return promise with success and failure actions
    return services
      .getNews(payload)
      .then(
        (res) => dispatch({ type: actionTypes.GET_NEWS_SUCCESS, payload: res })
        // err => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
      )
      .catch((err) =>
        dispatch({ type: actionTypes.GET_NEWS_FAIL, payload: err })
      );
  };
};
