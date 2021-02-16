/**
 * @author Ankush Chavan
 * @description Here we have build search component
 */

import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { getNews } from "../redux/action";

export const Search = () => {
  const dispatch = useDispatch();
  const onSearch = (value) => dispatch(getNews({ value }));
  return (
    <Input.Search
      placeholder="search"
      onSearch={onSearch}
      onChange={(e) => !e.target.value && dispatch(getNews({ value: "" }))}
      allowClear
      enterButton
      style={{ width: 470 }}
    />
  );
};
