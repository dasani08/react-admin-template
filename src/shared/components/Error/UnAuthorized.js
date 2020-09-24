import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { Result, Button } from 'antd';

export default () => {
  const dispatch = useDispatch();
  const backHome = () => {
    dispatch(push('/'));
  };
  return (
    <Result
      status='403'
      title='403'
      subTitle='Sorry, you are not authorized to access this page.'
      extra={
        <Button type='primary' onClick={backHome}>
          Back Home
        </Button>
      }
    />
  );
};
