import React from 'react';
import {Flex, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";

const Loading = () => {
  return <Flex style={{minHeight: '100vh', width: "100%"}} align='center' justify='center'>
    <Spin indicator={<LoadingOutlined spin />} size="large" />
  </Flex>
};

export default Loading;