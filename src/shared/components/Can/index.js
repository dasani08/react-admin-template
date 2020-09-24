import React from 'react';
import { useSelector } from 'react-redux';

const canPerform = (permissions, performs) => {
  return performs?.some((el) => permissions.indexOf(el) !== -1) ?? false;
};

export default ({ performs, yes, no }) => {
  const { permissions } = useSelector(({ user }) => user);

  return <>{canPerform(permissions, performs) ? yes : no}</>;
};
