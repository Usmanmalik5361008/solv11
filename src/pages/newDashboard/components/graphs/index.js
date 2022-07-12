import { Col, Row } from "antd";
import { LineGraph } from "globalComponents";
import React from "react";

const Graphs = () => {
  return (
    <Row gutter={[20, 20]}>
      <Col xs={24}>
        <LineGraph />
      </Col>
      <Col xs={24}>
        <LineGraph />
      </Col>
    </Row>
  );
};

export default Graphs;
