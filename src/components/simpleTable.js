import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css"; 

const SimpleTable = ({ dataSource }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      width: 100, 
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["descend", "ascend"],
      width: 200, 
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortDirections: ["descend", "ascend"],
      width: 250, 
    },
  ];

  return (
    <div className="table-container">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false} 
        rowKey={(record) => record.id} 
        bordered
        style={{ margin: '20px', borderRadius: '5px' }}
      />
    </div>
  );
};

export default SimpleTable;
