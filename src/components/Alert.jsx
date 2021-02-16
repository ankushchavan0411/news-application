/**
 * @author Ankush Chavan
 * @description Alert is used to show success, info, warning, and error messages
 */

import React from "react";
import { Alert } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { alertClear } from "../redux/action";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const message = useSelector((state) => state.alert.message);
  const type = useSelector((state) => state.alert.type);
  const dispatch = useDispatch();
  if (message && type) {
    setTimeout(() => {
      dispatch(alertClear());
    }, 9000);
  }
  return type && message ? (
    <Alert
      message={type.toUpperCase()}
      description={message}
      type={type}
      showIcon
      closable
    />
  ) : (
    <span></span>
  );
};
