import { Table } from 'antd';
import React from 'react';
import l from './list.module.css';

const ListComponent = ({ transactions }) => {
  const dataSource = transactions;
  const columns = [
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Сумма',
      dataIndex: 'sum',
      key: 'sum',
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default ListComponent;
