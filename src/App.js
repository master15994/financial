import { React, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import AddItemComponent from './components/add-item/add.item-component';
import ListComponent from './components/list/list-component';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { Button, Layout, Menu, theme } from 'antd';

const App = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [transactions, setTransactions] = useState([]);

  const handleTransactionAdded = transaction => {
    setTransactions([...transactions, transaction]);
  };
  return (
    <Layout>
      <NavLink to="/list">
        <Button>List</Button>
      </NavLink>

      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: 'nav 1',
            },
            {
              key: '2',
              label: 'nav 2',
            },
            {
              key: '3',
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <>
            <Routes>
              <Route
                path="/list"
                element={<ListComponent transactions={transactions} />}
              />
              <Route
                path="/add-item"
                element={
                  <AddItemComponent
                    onTransactionAdded={handleTransactionAdded}
                  />
                }
              />
            </Routes>
          </>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
