import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';

import { PrivateRoute } from 'shared/components/Route/PrivateRoute';
import Topbar from 'shared/components/Topbar';
import Sidebar from 'shared/components/Sidebar';
import Dashboard from 'pages/Dashboard';

const Master = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialize = () => {
      return Promise.resolve();
    };
    initialize();
  }, [dispatch]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar onCollapse={setSidebarCollapsed} />
      <Layout
        style={{
          marginLeft: sidebarCollapsed ? 70 : 160,
          paddingTop: 64
        }}
      >
        <Layout.Header
          style={{
            position: 'fixed',
            top: 0,
            zIndex: 1,
            width: `calc(100% - ${sidebarCollapsed ? '70px' : '160px'})`
          }}
        >
          <Topbar />
        </Layout.Header>
        <Switch>
          <PrivateRoute path='/' component={Dashboard} />
        </Switch>
      </Layout>
    </Layout>
  );
};

export default Master;
