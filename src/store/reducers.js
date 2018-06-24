import { combineReducers } from 'redux';

export default (extraReducers) => {
  return combineReducers({
    ...extraReducers
  });
};
