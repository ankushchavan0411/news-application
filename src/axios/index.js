import axios from "axios";

const api = (baseUrl, header = {}) => {
  const service = axios.create({
    timeout: 120000,
    baseURL: baseUrl,
    headers: buildHeader(header),
    transformResponse: [(response) => parseApiRespnse(response)],
  });
  return service;
};

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
 */

const parseApiRespnse = (response) => {
  if (typeof response === "string") {
    try {
      response = JSON.parse(response);
    } catch (e) {
      /* Ignore */
    }
  }
  return response;
};

export default api;
