/**
 * @author Ankush Chavan
 * @description Here we have build news list component, it will return news
 */

import React, { useEffect } from "react";
import { List, Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../redux/action";

const NewsList = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.newsList);
  const state = useSelector((state) => state);

  console.log("state", state);

  useEffect(() => {
    dispatch(getNews());
  }, [getNews]);

  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
  ];

  return (
    <List
      itemLayout="horizontal"
      dataSource={newsList}
      pagination={newsList.length > 0 ? { pageSize: 5 } : false}
      renderItem={(item) => (
        <List.Item actions={[<a key="list-loadmore-more">view</a>]}>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="#">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  );
};

export default NewsList;
