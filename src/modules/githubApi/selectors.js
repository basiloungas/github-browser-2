import {createSelector} from 'reselect';
import {REDUCER_KEY} from './reducer';

const getIsFetching = state => state[REDUCER_KEY].isFetching;
const getIsFetchingMore = state => state[REDUCER_KEY].isFetchingMore;
const getIsFetchingSingle = state => state[REDUCER_KEY].isFetchingSingle;
const getUsers = state => state[REDUCER_KEY].users;
const getList = state => state[REDUCER_KEY].list;
const getError = state => state[REDUCER_KEY].error;
const getNextPage = state => state[REDUCER_KEY].nextPage;

const getUsersList = createSelector(
  getUsers,
  getList,
  (users, list) => list.map(userId => users[userId]),
);
const getUser = (state, username) => Object.values(state[REDUCER_KEY].users).find( item => item.login === username) || null;

export default {
  getIsFetching,
  getIsFetchingMore,
  getIsFetchingSingle,
  getUsers,
  getList,
  getError,
  getNextPage,
  getUsersList,
  getUser,
};
