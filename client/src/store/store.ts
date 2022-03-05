import {
  createStore,
  applyMiddleware,
  Middleware,
} from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from 'store/reducer';

import storeLogger from 'store/logger';

//------------------------------------------------------------------------------

const middlewares: Middleware[] = [reduxThunk];

middlewares.push(storeLogger); // only for dev

//------------------------------------------------------------------------------

export default createStore(reducer, applyMiddleware(...middlewares));
