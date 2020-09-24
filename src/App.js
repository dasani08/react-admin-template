import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';

import { routeConfig } from 'configs/route';
import { getLocale } from 'configs/locale';
import { PublicRoute } from 'shared/components/Route/PublicRoute';
import { PrivateRoute } from 'shared/components/Route/PrivateRoute';

import Master from 'pages/Master';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import Logout from 'pages/Logout';

import 'assets/scss/main.scss';

const App = () => {
  const locale = useSelector((state) => state.config.locale);

  return (
    <>
      <ConfigProvider locale={getLocale(locale)}>
        <Switch>
          <PublicRoute exact path={routeConfig.SIGNUP} component={SignUp} />
          <PublicRoute exact path={routeConfig.LOGIN} component={Login} />
          <PrivateRoute exact path={routeConfig.LOGOUT} component={Logout} />
          <PrivateRoute path='/' component={Master} />
        </Switch>
      </ConfigProvider>
    </>
  );
};

export default withRouter(App);
