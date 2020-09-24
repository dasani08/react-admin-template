import React from 'react';
import { Route } from 'react-router-dom';

import { can } from 'hocs/can';

export const AuthorizedRoute = ({
  component: Component,
  permissions,
  roles,
  ...rest
}) => {
  const AuthorizedComponent = can(permissions, roles, Component);
  return (
    <Route render={(props) => <AuthorizedComponent {...props} />} {...rest} />
  );
};
