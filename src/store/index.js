import {createStore} from 'redux';

import getRootReducer from './reducers';

export default extraReducers => createStore(
  getRootReducer(extraReducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
