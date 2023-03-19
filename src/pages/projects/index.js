import { Row } from 'antd'

import { ConfirmationBox, Toolbar } from 'globalComponents'
import { SCRProjectionTable } from 'globalComponents/tables'
import './index.scss'

const ProjectsPage = () => {
  return (
    <div className='tab-screen-1-page toolbar-table-container'>
      <div className='mb-5'>
        <Toolbar />
      </div>
      <Row gutter={[30, 20]} style={{ padding: '0 10px' }}>
        <SCRProjectionTable />
      </Row>
      <div className='mt-5'>
        <ConfirmationBox btnText={'Run SCR'} />
      </div>
    </div>
  )
}

// // dummy data

// const infoText =
//   "Lorem Ipsum is dummy text of the printing typesetting industry. the printing typesetting ind Lorem Ipsum has been the industry's standard dummy galley of type and scrambled.";

// const tabs = [
//   {
//     title: "all",
//     id: 0,
//   },
//   {
//     title: "production-all",
//     id: 1,
//   },
//   {
//     title: "paramters",
//     id: 2,
//   },
//   {
//     title: "simulations",
//     id: 3,
//   },
//   {
//     title: "reporting",
//     id: 4,
//   },
// ];

// const productionListingOne = [
//   {
//     title: "Balance",
//     id: "9CI1KA2Y0Z-9CI0KA36C4",
//     bgColor: "#548AED",
//     imgSrc: PRODUCTION_CARD_IMAGE1,
//     variant: "colored",
//   },
//   {
//     title: "Claims",
//     id: "9CI1KA2Y0Z-9CI0KA36C6",
//     bgColor: "#F17141",
//     imgSrc: PRODUCTION_CARD_IMAGE2,
//     variant: "colored",
//   },
// ];

export default ProjectsPage
