/**
 * @author Ankush Chavan
 * @description Here we have build news list component, it will return news
 */

import React, { useEffect, useState } from "react";
import { List, Avatar, Tabs, Space, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { EyeOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { getNews } from "../redux/action";
import { newsCategory } from "../config";
import NewsDetails from "./NewsDetails";

const { TabPane } = Tabs;

const NewsList = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.newsList);
  const [category, setCategory] = useState("business");
  const [isModalOpen, setModalOpen] = useState(false);
  const [newsDetail, setNewsDetail] = useState({});

  useEffect(() => {
    dispatch(getNews({ category }));
  }, [category]);

  /**
   * @param {*} item
   */
  const handleOnClick = (item) => {
    setModalOpen(true);
    setNewsDetail(item);
  };

  return (
    <>
      <Tabs defaultActiveKey={category} onChange={(key) => setCategory(key)}>
        {newsCategory.map((tab) => (
          <TabPane tab={tab} key={tab}>
            <List
              itemLayout="horizontal"
              dataSource={newsList}
              pagination={newsList.length > 0 ? { pageSize: 4 } : false}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button
                      size="small"
                      shape="circle"
                      onClick={() => handleOnClick(item)}
                    >
                      <EyeOutlined style={{ fontSize: 21 }} />
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.urlToImage} alt="image" />}
                    title={
                      <a href={item.url} target="blank" className="title">
                        {item.title}
                      </a>
                    }
                    description={
                      <Space>
                        <em className="author">
                          {item.author || "News Content"}
                        </em>
                        <span>
                          <FieldTimeOutlined />{" "}
                          {new Date(item.publishedAt).toDateString()}
                        </span>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </TabPane>
        ))}
      </Tabs>
      <NewsDetails
        isModalVisible={isModalOpen}
        handleCancel={setModalOpen}
        newsDetail={newsDetail}
      />
    </>
  );
};

export default NewsList;
