import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Table, Tag } from "antd";
import React from "react";

const ProjectTable = () => {
  const columns = [
    {
      title: "Display Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (name) => <p className="m-0 font-bold">{name}</p>,
    },
    {
      title: "Application (Client) ID",
      dataIndex: "clientId",
      key: "clientId",
      align: "center",
    },
    {
      title: "Created on",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Certicates & Secrets",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => (
        <Tag
          icon={
            status ? <CheckCircleOutlined /> : <ExclamationCircleOutlined />
          }
          color={status ? "success" : "warning"}
        >
          {status ? "Approved" : "Pending"}
        </Tag>
      ),
    },
  ];

  const data = [
    {
      key: 0,
      name: "Adams Baker",
      clientId: "9CI1KA2Y0Z-9CI0KA36C4",
      date: "Thursday, Mar 10 · 2:35 PM",
      status: true,
    },
    {
      key: 1,
      name: "Clark David",
      clientId: "9CI1KA2Y0Z-9CI0KA36C4",
      date: "Thursday, Mar 10 · 2:35 PM",
      status: false,
    },
    {
      key: 2,
      name: "Clark David",
      clientId: "9CI1KA2Y0Z-9CI0KA36C4",
      date: "Thursday, Mar 10 · 2:35 PM",
      status: false,
    },
  ];

  return (
    <Table
      className="custom-table-style-1"
      pagination={false}
      columns={columns}
      dataSource={data}
    />
  );
};

export default ProjectTable;
