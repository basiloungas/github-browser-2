import * as Actions from './actions';
import * as helpers from './helpers';

export const defaultState = {
  isFetching: false,
  isFetchingMore: false, // TODO: refactor those loaders into one??
  isFetchingSingle: false,
  users: {},
  list: [], // TODO: Is this a UI specific reducer? Extract to reducer outside module?
  error: null,
  nextPage: null,
};

export const REDUCER_KEY = 'github_api';

export const reducer = (state = defaultState, action) => {
  const { type, payload = {} } = action;
  const { data, headers } = payload;

  switch (type) {
    case Actions.FETCH_USERS:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case Actions.FETCH_USERS_SUCCESS:
      return helpers.fetchUsersSuccess(state, data, headers);
    case Actions.FETCH_USERS_FAIL:
      return {
        ...state,
        error: payload,
        isFetching: false,
      };
    case Actions.FETCH_MORE_USERS:
      return {
        ...state,
        error: null,
        isFetchingMore: true,
      };
    case Actions.FETCH_MORE_USERS_SUCCESS:
      return helpers.fetchMoreUsersSuccess(state, data, headers);
    case Actions.FETCH_MORE_USERS_FAIL:
      return {
        ...state,
        error: payload,
        isFetchingMore: false,
      };

    case Actions.FETCH_USER:
      return {
        ...state,
        error: null,
        isFetchingSingle: true,
      };
    case Actions.FETCH_USER_SUCCESS:
      return helpers.fetchUserSuccess(state, data);
    case Actions.FETCH_USER_FAIL:
      return {
        ...state,
        error: payload,
        isFetchingSingle: false,
      };
    default:
      return state;
  }
};

export default {
  [REDUCER_KEY]: reducer
};
