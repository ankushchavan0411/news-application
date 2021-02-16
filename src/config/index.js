/**
 * @author Ankush Chavan
 * @description In this file we configure footerText, newsCategory, apiKey and baseUrl
 */

module.exports = {
  apiKey: process.env.REACT_APP_API_KEY,
  baseUrl: process.env.REACT_APP_END_POINT,
  footerText: "News Application © 2021",
  newsCategory: [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ],
};
