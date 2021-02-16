/**
 * @author Ankush Chavan
 * @description Alert is used to show success, info, warning, and error messages
 */

import React, { useState } from "react";
import { Alert } from "antd";
import { useSelector } from "react-redux";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const message = useSelector((state) => state.alert.message);
  const type = useSelector((state) => state.alert.type);
  const [closeAlert, setCloseAlert] = useState(false);
  setTimeout(() => {
    setCloseAlert(true);
  }, 9000);
  return type && message && !closeAlert ? (
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
