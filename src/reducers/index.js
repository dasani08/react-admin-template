import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import configReducer from './config';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    config: configReducer
  });
