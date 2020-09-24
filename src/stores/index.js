import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';

import appReducer from 'reducers';
import { callAPIMiddleware, logMiddleware } from 'shared/utils/redux';

const history = createBrowserHistory();

const middleware = [
  thunk,
  routerMiddleware(history),
  callAPIMiddleware,
  logMiddleware
];

const store = createStore(
  appReducer(history),
  {}, // default state
  // http://extension.remotedev.io/
  composeWithDevTools(applyMiddleware(...middleware))
);

export { history };
export default store;
