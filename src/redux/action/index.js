/**
 * @author Ankush Chavan
 * @description This is our news actions
 */
import * as services from "../../services";
import * as actionTypes from "../../lib/const/actionTypes";
import { errorHandler } from "../../util/helper";

/**
 * @param {*} payload
 */
export const getNews = (payload) => {
  return (dispatch) => {
    dispatch(alertClear());
    dispatch({ type: actionTypes.LOADING_STARTED });
    return services
      .getNews(payload)
      .then((res) => {
        dispatch({ type: actionTypes.LOADING_STOP });
        dispatch({
          type: actionTypes.GET_NEWS_SUCCESS,
          payload: res.data.articles,
        });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.LOADING_STOP });
        dispatch({
          type: actionTypes.ALERT_FAIL,
          payload: errorHandler(err),
        });
      });
  };
};

/**
 * @description alertClear is used to clear type and message
 */
export const alertClear = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.ALERT_CLEAR });
  };
};
