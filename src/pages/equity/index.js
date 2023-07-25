import { Row, Tabs } from 'antd'

import { ConfirmationBox, Toolbar } from 'globalComponents'
import { SanteFPPage1 } from 'globalComponents/tables/santeFPPage1'
import { SanteFPPage2 } from 'globalComponents/tables/santeFPPage2'
// import './index.scss'
const { TabPane } = Tabs

const EquityPage = () => {

  return (
    <div className='tab-screen-1-page toolbar-table-container'>
      <div className='mb-5'>
        <Toolbar />
      </div>
      <Row style={{ width: '100%', padding: '0 10px' }}>
        <Tabs defaultActiveKey='1' className='custom-tabs-wrapper' style={{ width: '100%' }}>
          <TabPane tab={'Page 1'} key='1'>
            <SanteFPPage1 />
          </TabPane>
          <TabPane tab={'Page 2'} key='2'>
            <SanteFPPage2 />
          </TabPane>
        </Tabs>
      </Row>
      <div className='mt-5'>
        <ConfirmationBox />
      </div>
    </div>
  )
}
export default EquityPage
