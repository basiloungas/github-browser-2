
export const ActionTypes = {
  fetchUsers: 'fetchUsers',
  fetchMoreUsers: 'fetchMoreUsers',
  fetchUser: 'fetchUser',
}


export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const fetchUsersSuccess = payload => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';
export const fetchUsersFail = payload => ({
  type: FETCH_USERS_FAIL,
  payload,
});


export const FETCH_MORE_USERS = 'FETCH_MORE_USERS';
export const fetchMoreUsers = () => ({
  type: FETCH_MORE_USERS,
});

export const FETCH_MORE_USERS_SUCCESS = 'FETCH_MORE_USERS_SUCCESS';
export const fetchMoreUsersSuccess = payload => ({
  type: FETCH_MORE_USERS_SUCCESS,
  payload,
});

export const FETCH_MORE_USERS_FAIL = 'FETCH_MORE_USERS_FAIL';
export const fetchMoreUsersFail = payload => ({
  type: FETCH_MORE_USERS_FAIL,
  payload,
});


export const FETCH_USER = 'FETCH_USER';
export const fetchUser = () => ({
  type: FETCH_USER,
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = payload => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const FETCH_USER_FAIL = 'FETCH_USERS_FAIL';
export const fetchUserFail = payload => ({
  type: FETCH_USER_FAIL,
  payload,
});
