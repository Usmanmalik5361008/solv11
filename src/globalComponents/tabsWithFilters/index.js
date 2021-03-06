import React, { useState } from 'react'
import { FILTER_ICON, SEARCH_ICON } from 'assets'
import PillButton from 'globalComponents/pillButton'
import './index.scss'
import { useTranslation } from 'react-i18next'

const TabsWithFilters = ({ tabs = [], children }) => {
  const { t } = useTranslation()

  const [selectedTab, setselectedTab] = useState(tabs[0] || {})

  const handleTabSelection = (selectedTab) => {
    setselectedTab(selectedTab)
  }

  const pillButtonStyle = { height: 25 }

  return (
    <>
      <div className='tabs-filters-wrapper'>
        <div className='tabs-wrapper'>
          {tabs.map(({ id, title }, index) => (
            <span
              key={id}
              className={selectedTab.id === id ? 'selected' : ''}
              onClick={() => handleTabSelection(tabs[index])}
            >
              {t(title)}
            </span>
          ))}
        </div>
        <div className='filters-wrapper'>
          <PillButton
            type='highlighted'
            title={t('add-filters')}
            prependIcon={FILTER_ICON}
            style={pillButtonStyle}
          />
          <Searchbar placeholder={t('search')} />
        </div>
      </div>
      {children}
    </>
  )
}

const Searchbar = (props) => (
  <div className='searchbar-wrapper'>
    <input {...props} />
    <img src={SEARCH_ICON} alt='' />
  </div>
)

export default TabsWithFilters
