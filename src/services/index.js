/**
 * @author Ankush Chavan
 * @description In this file we kept all app services
 */

import api from "../axios";
import { baseUrl } from "../config";
import { topHeadlines } from "../lib/endPoint";

/**
 * @param {*} payload
 * @description Get News List Service
 */
export const getNews = ({ category = "", value = "" }) =>
  api(baseUrl).get(`${topHeadlines}&category=${category}&q=${value}`);
