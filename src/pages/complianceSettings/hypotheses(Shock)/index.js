import { Col, Divider, Row, Grid } from "antd";

const { useBreakpoint } = Grid;

const HypothesesShockPage = () => {
  const screens = useBreakpoint();

  return (
    <div className="card-view card-padding">
      <Row>
        <Col xs={24} sm={11} md={6}>
          <h5>AMCR</h5>
          <Row gutter={[10, 10]}>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>AMCR</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Rachat Up</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Rachat Down</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Rachat Massif</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Depenses</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Catastrophe</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Inflation</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>llliquidite</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Rachat Non Retail</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Longevite</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Incapacite</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Revision</label>
                <input />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={2} md={2} className="d-flex justify-center">
          <Divider
            type={screens.xs ? "horizontal" : "vertical"}
            style={{ height: "100%" }}
          />
        </Col>
        <Col xs={24} sm={11} md={6}>
          <h5>AMCR</h5>
          <Row gutter={[10, 10]}>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Devise Up</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Devise Down</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Action OCDE</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Action Hors OCDE</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Spread AAA</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Spread AA</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Spread A</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Spread BBB</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Spread BB</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Spread B or Lower</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Spread Unrated</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Immobilier</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>Correlation Choc A</label>
                <input />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={2} className="d-flex justify-center">
          <Divider
            type={screens.md ? "vertical" : "horizontal"}
            style={{ height: "100%" }}
          />
        </Col>
        <Col xs={24} sm={24} md={6}>
          <h5>AMCR</h5>
          <Row gutter={[10, 10]}>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>AAA</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>AA</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>A</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>BBB</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>BB</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>B</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>CCC</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>NO RATING</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>200</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>175</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>150</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>100</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>90</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>80</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>{"<80"}</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>GAMMA</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>125</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className="custom-form-field">
                <label>125</label>
                <input />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HypothesesShockPage;
