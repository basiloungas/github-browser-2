import * as Actions from './actions';

const defaultState = {
  isFetching: false,
  isFetchingMore: false, //TODO refactor those loaders into one??
  isFetchingSingle: false,
  users: {},
  list: [], //TODO: Is this a UI specific reducer? Extract to reducer outside module?
  error: null,
  nextPage: null,
}

export const REDUCER_KEY = 'github_api';

const exportNextPage = headers => {
  try {
    const tokens = headers.link.split(', ');
    const nextToken = tokens.find(token => token.indexOf('"next"') !== -1);
    const url = nextToken.match('<(.*)>');
    return url[1];
  } catch (err) {
    return null;
  }
}

const extractNewUsersById = data => {
  return data.reduce((acc, item) => {
    const id = item.id;

    if (!acc[id]) {
      acc[id] = item;
    }

    return acc;
  }, {});
};

const parseUsersResponse = (state, data, headers) => {
  const newUsersById = extractNewUsersById(data);

  // TODO: only update refereces if there are NEW keys
  const users = {
    ...state.users,
    ...newUsersById,
  };

  // TODO: handle Duplicates
  // Convert to set? does it handle order of data??
  const list = [
    ...state.list,
    ...Object.keys(newUsersById),
  ];

  const nextPage = exportNextPage(headers);

  return {
    users,
    list,
    nextPage,
  }
}

const fetchUsersSuccess = (state, data, headers) => {
  const {
    users,
    list,
    nextPage,
  } = parseUsersResponse(state, data, headers);

  return {
    ...state,
    error: null,
    isFetching: false,
    users,
    list,
    nextPage,
  };
}

const fetchMoreUsersSuccess = (state, data, headers) => {
  const {
    users,
    list,
    nextPage,
  } = parseUsersResponse(state, data, headers);

  return {
    ...state,
    error: null,
    isFetchingMore: false,
    users,
    list,
    nextPage,
  };
}

const fetchUserSuccess = (state, data) => {
  let users = state.users;
  const newUserId = data.id;

  // Do not update object instance
  // if data already exists
  if (!state.users[newUserId]) {
    users = {
      ...state.users,
      [newUserId]: data,
    }
  }

  return {
    ...state,
    error: null,
    isFetchingSingle: false,
    users,
  };
}

const reducer = (state = defaultState, action) => {
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
      return fetchUsersSuccess(state, data, headers);
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
      return fetchMoreUsersSuccess(state, data, headers);
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
      return fetchUserSuccess(state, data);
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
