import { Alert } from 'antd'
import { DOWNLOAD_ICON, FILE_ICON, PLUS_ICON, REFRESH_ICON, SETTINGS_LARGE_ICON } from 'assets'
import { PillButton, TabsWithFilters } from 'globalComponents'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { OptionCard, ProjectTable } from './components'
import './index.scss'

const DashboardPage = () => {
  const { t } = useTranslation()
  const infoText =
    "Lorem Ipsum is dummy text of the printing typesetting industry. the printing typesetting ind Lorem Ipsum has been the industry's standard dummy galley of type and scrambled."

  const tabs = [
    { id: 0, title: 'all-projects' },
    { id: 1, title: 'completed' },
    { id: 2, title: 'pending' },
  ]

  return (
    <div className='dashboard-page'>
      <div className='card-view'>
        <div className='d-flex justify-space-between'>
          <h3>{t('projects.title')}</h3>˝
          <div className='actions'>
            <div className='action-buttons'>
              <PillButton title={t('refresh')} prependIcon={REFRESH_ICON} />
              <PillButton title={t('download')} prependIcon={DOWNLOAD_ICON} />
            </div>
          </div>
        </div>
        <div className='projects-body'>
          <Alert message={infoText} type='info' showIcon />
          <div className='card-actions'>
            <OptionCard title={t('new-projects')} bgColor='#636C78' icon={PLUS_ICON} />
            <OptionCard title={t('reports')} bgColor='#4C4E8D' icon={SETTINGS_LARGE_ICON} />
            <OptionCard title={t('settings')} bgColor='#8BB8A2' icon={FILE_ICON} />
          </div>
        </div>
      </div>
      <div className='card-view p-0'>
        <TabsWithFilters tabs={tabs}>
          <ProjectTable />
        </TabsWithFilters>
      </div>
    </div>
  )
}

export default DashboardPage
