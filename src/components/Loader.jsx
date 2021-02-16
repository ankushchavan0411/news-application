/**
 * @author Ankush Chavan
 * @description Here we have build loader component
 */

import React from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
const Loader = ({ children }) => {
  const loading = useSelector((state) => state.loader.loading);
  return (
    <Spin indicator={antIcon} spinning={loading}>
      {children}
    </Spin>
  );
};

export default Loader;
