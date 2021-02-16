/**
 * @author Ankush Chavan
 * @description Here we have build news details components modal, it will return news details
 */

import React from "react";
import { Modal, Card, Descriptions, Avatar } from "antd";
import { IeOutlined, ChromeOutlined, EyeOutlined } from "@ant-design/icons";

const { Item } = Descriptions;
const { Meta } = Card;

const NewsDetails = ({
  isModalVisible,
  handleCancel,
  newsDetail: {
    title,
    urlToImage,
    author,
    content,
    publishedAt,
    url,
    description,
    source,
  },
}) => {
  return (
    <Modal
      title={<b>News Detail</b>}
      visible={isModalVisible}
      onCancel={() => handleCancel(false)}
      footer={false}
      width={900}
    >
      <Card
        cover={<img style={{ height: 300 }} alt="news-logo" src={urlToImage} />}
        actions={[
          <a href={url} target="blank">
            <IeOutlined key="IeOutlined" style={{ fontSize: 25 }} />
          </a>,
          <a href={url} target="blank">
            <ChromeOutlined key="ChromeOutlined" style={{ fontSize: 25 }} />
          </a>,
          <a href={url} target="blank">
            <EyeOutlined key="EyeOutlined" style={{ fontSize: 25 }} />
          </a>,
        ]}
      >
        <Meta
          avatar={<Avatar src={urlToImage} />}
          title={title}
          description={
            <Descriptions>
              <Item label="Author">{author}</Item>
              <Item label="Source">{source && source.name}</Item>
              <Item label="Published">
                {new Date(publishedAt).toDateString()}
              </Item>
              <Item label="Description">{description}</Item>
              <Item label="Content">{content}</Item>
            </Descriptions>
          }
        />
      </Card>
    </Modal>
  );
};

export default NewsDetails;
