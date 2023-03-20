import { Row } from 'antd'

import { Toolbar } from 'globalComponents'
// import './index.scss'

const DatabasePage = () => {
  // const { t } = useTranslation()
  return (
    <div className='tab-screen-1-page toolbar-table-container'>
      <div className='mb-5'>
        <Toolbar />
      </div>
      <Row style={{ width: '100%', padding: '0 10px' }}>{'Database Table in progress'}</Row>
    </div>
  )
}
export default DatabasePage
