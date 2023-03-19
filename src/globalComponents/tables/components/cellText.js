import { Tooltip } from 'antd'
import React from 'react'

export const cellText = (text) => (
  <div className={'cell-text'}>
    <Tooltip title={text}>
      <div className={'tooltip-wrapper'}>{''}</div>
    </Tooltip>
    {text}
  </div>
)
