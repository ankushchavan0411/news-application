/**
 * @author Ankush Chavan
 * @description Here we have build news list component, it will return news
 */

import React, { useEffect, useState } from "react";
import { List, Avatar, Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../redux/action";
import { newsCategory } from "../config";

const { TabPane } = Tabs;

const NewsList = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.newsList);
  const [category, setCategory] = useState("business");

  useEffect(() => {
    dispatch(getNews({ category }));
  }, [getNews, category]);

  return (
    <Tabs defaultActiveKey={category} onChange={(key) => setCategory(key)}>
      {newsCategory.map((tab) => (
        <TabPane tab={tab} key={tab}>
          <List
            itemLayout="horizontal"
            dataSource={newsList}
            pagination={newsList.length > 0 ? { pageSize: 4 } : false}
            renderItem={(item) => (
              <List.Item actions={[<a key="list-loadmore-more">view</a>]}>
                <List.Item.Meta
                  avatar={<Avatar src={item.urlToImage} alt="image" />}
                  title={
                    <a href={item.url} target="blank" className="title">
                      {item.title}
                    </a>
                  }
                  description={
                    <em className="author">{item.author || "News Content"}</em>
                  }
                />
              </List.Item>
            )}
          />
        </TabPane>
      ))}
    </Tabs>
  );
};

export default NewsList;
