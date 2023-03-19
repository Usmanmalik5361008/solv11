import { Row, Col, Divider, Grid } from 'antd'
import { Toolbar } from 'globalComponents'
import { ConfirmationBox } from 'globalComponents'
import { SCRHypothesis } from 'globalComponents/tables'
import React from 'react'
import { useTranslation } from 'react-i18next'

const { useBreakpoint } = Grid

const Hypothesis = () => {
  const { t } = useTranslation()

  const screens = useBreakpoint()

  return (
    <>
        <SCRHypothesis />
    </>
  )
}

export default Hypothesis
