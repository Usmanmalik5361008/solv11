import { Tabs } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Auxilaries, Funds } from './components'

const { TabPane } = Tabs

const EquityPage = () => {
  const { t } = useTranslation()
  return (
    <div className='tab-screen-1-page'>
      <Tabs defaultActiveKey='1' className='custom-tabs-wrapper'>
        <TabPane tab={t('bass-equity')} key='1'>
          <Funds />
        </TabPane>
        <TabPane tab={t('aux-equity-fund')} key='2'>
          <Auxilaries />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default EquityPage
