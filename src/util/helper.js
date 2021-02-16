/**
 * @author Ankush Chavan
 * @description helper file is used to kept all common function
 */

/**
 * @param {*} error
 * @description errorHandler is used to handel all type of errors
 */
export const errorHandler = (error) => {
  //   console.log("toJSON", error.toJSON());
  let message = "Something happened wrong";
  if (error.response) {
    message = error.response.data.message;
  } else if (error.request) {
    // console.log("error.request", error.request);
  } else {
    // console.log("Error", error.message);
  }
  // console.log("error.config)", error.config);
  return message;
};
