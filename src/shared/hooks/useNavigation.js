import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  return (path, state) => () => {
    dispatch(push(path, state));
  };
};
