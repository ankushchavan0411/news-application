/**
 * @author Ankush Chavan
 * @description Here we have build layout component
 */

import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Alert from "./Alert";

const { Header, Content, Footer } = Layout;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => (
  <Layout>
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home">Home</Menu.Item>
      </Menu>
    </Header>
    <Content
      className="site-layout"
      style={{ padding: "0 50px", marginTop: 64 }}
    >
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>News</Breadcrumb.Item>
        <Breadcrumb.Item>Top Heading</Breadcrumb.Item>
      </Breadcrumb>
      <Alert />
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380, height: "100%" }}
      >
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>News Application © 2021</Footer>
  </Layout>
);
