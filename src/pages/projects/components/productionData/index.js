import { Col, Row } from "antd";
import React from "react";
import ProductionCard from "../productionCard";

const ProductionData = ({ productions = [] }) => {
  return (
    <Row gutter={[10, 10]}>
      {productions.map((production) => (
        <Col xs={24} sm={12} md={8} key={production.id}>
          <ProductionCard {...production} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductionData;
