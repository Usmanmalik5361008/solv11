import { Col, Row } from "antd";
import React from "react";

const CounterpartyRisk = () => {
  return (
    <div>
      <h5 className="small-heading">Type 1</h5>
      <div className="custom-table-style-2-wrapper">
        <table>
          <thead>
            <tr>
              <th style={{ width: "5%" }}></th>
              <th>Counterparty</th>
              <th>Risk</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>*</td>
              <td>Counterparty 1</td>
              <td>Risk 1</td>
              <td>Risk 1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="small-heading mt-5">Type 2</p>
      <Row gutter={[30, 30]}>
        <Col sm={24} md={12}>
          <div className="custom-form-field">
            <label>
              Total Type 2 Exposures, excluding those overdue by more than 3
              months_EN
            </label>
            <input placeholder="180 880 488.00" className="text-right" />
          </div>
        </Col>
        <Col sm={24} md={12}>
          <div className="custom-form-field">
            <label>
              Total Type 2 Exposures over-due by more than 3 months_EN
            </label>
            <input placeholder="180 880 488.00" className="text-right" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CounterpartyRisk;
