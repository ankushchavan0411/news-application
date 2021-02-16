/**
 * @author Ankush Chavan
 * @description In this file we declare all apps services
 */

import api from "../axios";
import { baseUrl } from "../config";
import { topHeadlines } from "../lib/endPoint";

/**
 * @param {*} payload
 * @description Get News List Service
 */
export const getNews = (payload) => api(baseUrl).get(topHeadlines, payload);
