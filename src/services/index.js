import { api } from "../axios";

// Set Base URL Here
const baseUrl = process.env.REACT_APP_END_POINT;

/**
 * @param {*} payload
 */

// Get News API
export const getNews = (payload) => api(baseUrl).get("endpoint", payload);
