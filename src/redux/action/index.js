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
