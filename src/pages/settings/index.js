import { Row, Tabs } from 'antd'

import { ConfirmationBox, Toolbar } from 'globalComponents'
import { YieldCurveMatrixTable } from 'globalComponents/tables'
import { CorrelationMatrixTwoTable } from 'globalComponents/tables'
import { CorrelationMatrixOneTable, Hypothesis } from 'globalComponents/tables'
// import './index.scss'
const { TabPane } = Tabs

const SettingsPage = () => {
  // const { t } = useTranslation()
  return (
    <div className='tab-screen-1-page toolbar-table-container'>
      <div className='mb-5'>
        <Toolbar />
      </div>
      <Row style={{ width: '100%', padding: '0 10px' }}>
        <Tabs defaultActiveKey='1' className='custom-tabs-wrapper' style={{ width: '100%' }}>
          <TabPane tab={'Hypothèses de choc'} key='1'>
            <Hypothesis />
          </TabPane>
          <TabPane tab={'Matrice de correlation 1'} key='2'>
            <CorrelationMatrixOneTable />
          </TabPane>
          <TabPane tab={'Matrice de correlation 2'} key='3'>
            <CorrelationMatrixTwoTable />
          </TabPane>
          <TabPane tab={'Matrice de courbe des taux'} key='4'>
            <YieldCurveMatrixTable />
          </TabPane>
        </Tabs>
      </Row>
      <div className='mt-5'>
        <ConfirmationBox />
      </div>
    </div>
  )
}
export default SettingsPage
