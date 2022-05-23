import { Col, Divider, Row, Grid } from 'antd'
import { ConfirmationBox } from 'globalComponents'
import { useTranslation } from 'react-i18next'

const { useBreakpoint } = Grid

const HypothesesShockPage = () => {
  const { t } = useTranslation()
  const screens = useBreakpoint()

  return (
    <div className='card-view card-padding'>
      <Row>
        <Col xs={24} sm={11} md={6}>
          <h5>AMCR</h5>
          <Row gutter={[10, 10]}>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>AMCR</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-settings.shock-hyp-tab.redemption-up')}</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.redemption-down')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.massive-takeover')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.expenses')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.disaster')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.inflation')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.liquid')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.non-retail-red')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.longevity')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.inability')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.revision')}
                </label>
                <input />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={2} md={2} className='d-flex justify-center'>
          <Divider type={screens.xs ? 'horizontal' : 'vertical'} style={{ height: '100%' }} />
        </Col>
        <Col xs={24} sm={11} md={6}>
          <h5>AMCR</h5>
          <Row gutter={[10, 10]}>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.currency-up')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.currency-down')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-settings.shock-hyp-tab.action')} OCDE</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-settings.shock-hyp-tab.action')} Hors OCDE</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-settings.shock-hyp-tab.spread')} AAA</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-settings.shock-hyp-tab.spread')} AA</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-settings.shock-hyp-tab.spread')} A</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-settings.shock-hyp-tab.spread')} BBB</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-settings.shock-hyp-tab.spread')} BB</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-settings.shock-hyp-tab.spread')} B or {t('compliance-settings.shock-hyp-tab.lower')}</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{t('compliance-settings.shock-hyp-tab.spread')} {t('compliance-settings.shock-hyp-tab.unrated')}</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.Immobilier')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.shock-correlation')}
                </label>
                <input />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={2} className='d-flex justify-center'>
          <Divider type={screens.md ? 'vertical' : 'horizontal'} style={{ height: '100%' }} />
        </Col>
        <Col xs={24} sm={24} md={6}>
          <h5>AMCR</h5>
          <Row gutter={[10, 10]}>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>AAA</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>AA</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>A</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>BBB</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>BB</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>B</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>CCC</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>
                  {t('compliance-settings.shock-hyp-tab.no-rating')}
                </label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>200</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>175</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>150</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>100</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>90</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>80</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>{'<80'}</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>GAMMA</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>125</label>
                <input />
              </div>
            </Col>
            <Col xs={24}>
              <div className='custom-form-field'>
                <label>125</label>
                <input />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <ConfirmationBox />
    </div>
  )
}

export default HypothesesShockPage
