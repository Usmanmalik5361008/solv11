import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { Table, Tag } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProjectTable = () => {
  const { t } = useTranslation()
  const columns = [
    {
      title: t('display-name'),
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: (name) => <p className='m-0 font-bold'>{name}</p>,
    },
    {
      title: t('client-id'),
      dataIndex: 'clientId',
      key: 'clientId',
      align: 'center',
    },
    {
      title: t('created-on'),
      dataIndex: 'date',
      key: 'date',
      align: 'center',
    },
    {
      title: t('certificates-n-secrets'),
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (status) => (
        <Tag
          icon={status ? <CheckCircleOutlined /> : <ExclamationCircleOutlined />}
          color={status ? 'success' : 'warning'}
        >
          {status ? t('approved') : t('pending')}
        </Tag>
      ),
    },
  ]

  const data = [
    {
      key: 0,
      name: 'Adams Baker',
      clientId: '9CI1KA2Y0Z-9CI0KA36C4',
      date: 'Thursday, Mar 10 · 2:35 PM',
      status: true,
    },
    {
      key: 1,
      name: 'Clark David',
      clientId: '9CI1KA2Y0Z-9CI0KA36C4',
      date: 'Thursday, Mar 10 · 2:35 PM',
      status: false,
    },
    {
      key: 2,
      name: 'Clark David',
      clientId: '9CI1KA2Y0Z-9CI0KA36C4',
      date: 'Thursday, Mar 10 · 2:35 PM',
      status: true,
    },
  ]

  return (
    <Table
      className='custom-table-style-1'
      pagination={false}
      columns={columns}
      dataSource={data}
    />
  )
}

export default ProjectTable
