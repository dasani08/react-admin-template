import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'reset' });
  }, [dispatch]);

  return <></>;
};
