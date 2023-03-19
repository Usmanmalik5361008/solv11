import { Col, Row, Tabs } from 'antd'
import { useTranslation } from 'react-i18next'
import { CounterpartyRisk, Hypothesis, ScrSante, ScrUcTrad } from './components'
import Jobs from './components/jobs'
import { ConfirmationBox } from 'globalComponents'
import { Toolbar } from 'globalComponents'
import './index.scss'
const { TabPane } = Tabs

const SCRPage = () => {
  const { t } = useTranslation()
  return (
    <div className='tab-screen-1-page toolbar-table-container'>
      <div className='mb-5'>
        <Toolbar />
      </div>
      <Row gutter={[30, 20]} style={{ padding: '0 10px' }}>
        <Col xs={24} sm={24} md={24} lg={16}>
          <Tabs defaultActiveKey='1' className='custom-tabs-wrapper'>
            <TabPane tab={t('compliance-monitoring.hypothesis')} key='1'>
              <Hypothesis />
            </TabPane>
            <TabPane tab={t('compliance-monitoring.counterparty-risk')} key='2'>
              <CounterpartyRisk />
            </TabPane>
            <TabPane tab={t('compliance-monitoring.scr-sante_en')} key='3'>
              <ScrSante />
            </TabPane>
            <TabPane tab={'SCR UC/TG'} key='4'>
              <ScrUcTrad />
            </TabPane>
          </Tabs>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <Jobs />
        </Col>
      </Row>
      <div className='mt-5'>
        <ConfirmationBox btnText={'Run SCR'} />
      </div>
    </div>
  )
}

export default SCRPage
