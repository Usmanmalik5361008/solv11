import React from 'react'
import { useTranslation } from 'react-i18next'
import './index.scss'

const Option = ({ id, title, icon, onClick, isActive }) => {
  const { t } = useTranslation()

  const handleClick = () => onClick(id)

  return (
    <div className={`claim-option ${isActive ? 'active' : ''}`} onClick={handleClick}>
      {icon} <p>{t(title)}</p>
    </div>
  )
}

export default Option
