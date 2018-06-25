const exportNextPage = headers => {
  try {
    const tokens = headers.link.split(', ');
    const nextToken = tokens.find(token => token.indexOf('"next"') !== -1);
    const url = nextToken.match('<(.*)>');
    return url[1];
  } catch (err) {
    return null;
  }
};

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

export const fetchUsersSuccess = (state, data, headers) => {
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

export const fetchMoreUsersSuccess = (state, data, headers) => {
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
};

export const fetchUserSuccess = (state, data) => {
  let users = state.users;
  const newUserId = data.id;

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
};
