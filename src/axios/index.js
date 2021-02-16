/**
 * @author Ankush Chavan
 * @description Here we have create instance for axios
 */

import axios from "axios";
import { apiKey } from "../config";

/**
 * @description Here we have create axios instance
 * @param {*} baseUrl
 * @param {*} header
 */
const api = (baseUrl, header = { "x-api-key": apiKey }) => {
  const service = axios.create({
    timeout: 120000,
    baseURL: baseUrl,
    headers: buildHeader(header),
    transformResponse: [(response) => parseApiRespnse(response)],
  });
  return service;
};

/**
 * @param {*} obj
 * @description here we have build header
 */
const buildHeader = (obj = {}) => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  Object.assign(header, obj);
  return header;
};

/**
 * @param {*} response
 * @description Here we parse response
 */

const parseApiRespnse = (response) => {
  if (typeof response === "string") {
    try {
      response = JSON.parse(response);
    } catch (e) {
      /* Ignore */
    }
  }
  console.log("response", response);
  return response;
};

export default api;
