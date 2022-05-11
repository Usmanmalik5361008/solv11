import { Row, Col, Divider, Grid } from "antd";
import { ConfirmationBox } from "globalComponents";
import React from "react";

const { useBreakpoint } = Grid;

const Hypothesis = () => {
  const screens = useBreakpoint();

  return (
    <>
      <Row gutter={20}>
        <Col xs={12}>
          <div className="custom-form-field">
            <label>Calculation Date</label>
            <select className="dropdown-style-2">
              <option value="1">1</option>
            </select>
          </div>
        </Col>
        <Col xs={24} className="mt-5">
          <Row gutter={20}>
            {/* left side of first section */}
            <Col md={24} lg={12}>
              <Row gutter={10}>
                <Col md={24} lg={16}>
                  <div className="custom-form-field">
                    <label>Real Mortality</label>
                    <div className="multiple-inputs-wrapper">
                      <input placeholder="30" />
                      <input placeholder="30" />
                      <input placeholder="30" />
                    </div>
                  </div>
                  <div className="custom-form-field mt-3">
                    <label>Table de Mortality Homme</label>
                    <select className="dropdown-style-2">
                      <option value="1">1</option>
                    </select>
                  </div>
                  <div className="custom-form-field mt-3">
                    <label>Table de Mortality Femme_EN</label>
                    <select className="dropdown-style-2">
                      <option value="1">1</option>
                    </select>
                  </div>
                </Col>
                {/* right side of first section */}
                <Col md={24} lg={8}>
                  <div className="custom-form-field">
                    <label>Nbr of Scenarios</label>
                    <input placeholder="30" />
                  </div>
                  <div className="custom-form-field mt-3">
                    <label>Projection Time</label>
                    <input placeholder="30" />
                  </div>
                  <div className="custom-form-field mt-3">
                    <label>NbrTaux Diniflation_EN</label>
                    <input placeholder="30" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={24} lg={1} className="d-flex justify-content-center">
              <Divider
                orientation="center"
                type={screens.lg ? "vertical" : "horizontal"}
                style={{ height: "100%" }}
              />
            </Col>

            {/* second section */}
            <Col md={24} lg={11}>
              <div className="custom-form-field">
                <label>Taux d’imposition_EN</label>
                <input placeholder="30" />
              </div>
              <div className="custom-form-field mt-3">
                <label>
                  Frais relatifs aux contrats d’assurance-vie liee_EN
                </label>
                <input placeholder="30" />
              </div>
              <div className="custom-form-field mt-3">
                <label>
                  Primes brutes acquises d’assurance-vie non liee_EN
                </label>
                <div className="multiple-inputs-wrapper">
                  <div className="input-with-label">
                    <p>Financiel Year N</p>
                    <input placeholder="30" style={{ paddingLeft: 120 }} />
                  </div>

                  <div className="input-with-label">
                    <p>Financiel Year N</p>
                    <input
                      placeholder="30"
                      className="text-right"
                      style={{ paddingLeft: 120 }}
                    />
                  </div>
                </div>
              </div>
              <div className="custom-form-field mt-3">
                <label>Life Insurance Gross Premium</label>
                <div className="multiple-inputs-wrapper">
                  <input placeholder="30" />
                  <input placeholder="30" />
                </div>
              </div>
              <div className="custom-form-field mt-3">
                <label>Non Life Insurance Gross Premium</label>
                <div className="multiple-inputs-wrapper">
                  <input placeholder="30" />
                  <input placeholder="30" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="mt-5">
        <ConfirmationBox />
      </div>
    </>
  );
};

export default Hypothesis;
