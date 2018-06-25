import * as Actions from './actions';
import mainExport, { reducer, REDUCER_KEY, usersInitialData } from './reducer';

describe('modules > githubApi -> reducer', () => {
  const user1 = {id: 1};
  const user2 = {id: 2};

  test('exports an object compatible for combineReducers', () => {
    expect(mainExport).toEqual({ [REDUCER_KEY]: reducer });
  });

  describe('on FETCH_USERS', () => {
    test('sets "isFetching"', () => {
      const newState = reducer(usersInitialData, Actions.fetchUsers());
      const expectedValue = {
        isFetching: true,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_USERS_SUCCESS', () => {
    let action;
    let payload;

    test('unsets "isFetching"', () => {
      payload = {
        data: [],
        headers: {},
      };
      action = Actions.fetchUsersSuccess(payload);
      const newState = reducer(usersInitialData, action);
      const expectedValue = {
        isFetching: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets data on list', () => {
      const data = [user1, user2];
      payload = {
        data,
      };
      action = Actions.fetchUsersSuccess(payload);

      const newState = reducer(usersInitialData, action);
      const expectedValue = {
        users: {
          "1": user1,
          "2": user2,
        },
        list: ["1", "2"],
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets "nextPage" link', () => {
      const data = [user1];
      payload = {
        data,
        headers: {
          link: '<https://api.github.com/users?since=46>; rel="next", <https://api.github.com/users{?since}>; rel="first"',
        },
      };
      action = Actions.fetchUsersSuccess(payload);

      const newState = reducer(usersInitialData, action);
      const expectedValue = {
        nextPage: 'https://api.github.com/users?since=46',
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_USERS_FAIL', () => {
    test('unsets "isFetching"', () => {
      const newState = reducer(usersInitialData, Actions.fetchUsersFail());
      const expectedValue = {
        isFetching: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets "error"', () => {
      const error = {};
      const newState = reducer(usersInitialData, Actions.fetchUsersFail(error));
      const expectedValue = {
        error,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_MORE_USERS', () => {
    test('sets "isFetching"', () => {
      const newState = reducer(usersInitialData, Actions.fetchMoreUsers());
      const expectedValue = {
        isFetchingMore: true,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_MORE_USERS_SUCCESS', () => {
    let action;
    let payload;

    test('unsets "isFetching"', () => {
      payload = {
        data: []
      };
      action = Actions.fetchMoreUsersSuccess(payload);
      const newState = reducer(usersInitialData, action);
      const expectedValue = {
        isFetchingMore: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets data on list', () => {
      const initialState = {
        ...usersInitialData,
        users: {
          "1": user1
        },
        list: ["1"],
      };

      payload = {
        data: [user2],
      };

      action = Actions.fetchMoreUsersSuccess(payload);

      const newState = reducer(initialState, action);
      const expectedValue = {
        users: {
          "1": user1,
          "2": user2,
        },
        list: ["1", "2"],
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets nextPage url', () => {
      const data = [];
      payload = {
        data,
        headers: {
          link: '<https://api.github.com/users?since=48>; rel="next", <https://api.github.com/users{?since}>; rel="first"',
        },
      };
      action = Actions.fetchMoreUsersSuccess(payload);

      const newState = reducer(usersInitialData, action);
      const expectedValue = {
        nextPage: 'https://api.github.com/users?since=48',
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_MORE_USERS_FAIL', () => {
    test('unsets "isFetching"', () => {
      const newState = reducer(usersInitialData, Actions.fetchMoreUsersFail());
      const expectedValue = {
        isFetching: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets "error"', () => {
      const error = {};
      const newState = reducer(usersInitialData, Actions.fetchMoreUsersFail(error));
      const expectedValue = {
        error,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_USER', () => {
    test('sets "isFetchingSingle"', () => {
      const newState = reducer(usersInitialData, Actions.fetchUser());
      const expectedValue = {
        isFetchingSingle: true,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });

  describe('on FETCH_USER_SUCCESS', () => {
    let action;
    let payload;

    test('unsets "isFetchingSingle"', () => {
      payload = {
        data: []
      };
      action = Actions.fetchUserSuccess(payload);
      const newState = reducer(usersInitialData, action);
      const expectedValue = {
        isFetchingSingle: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('stores user on "users" key', () => {
      payload = {
        data: user1,
      };

      action = Actions.fetchUserSuccess(payload);

      const newState = reducer(usersInitialData, action);
      const expectedValue = {
        users: {
          "1": user1,
        }
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    // test('does not change reference if user already exists')
  });

  describe('on FETCH_USER_FAIL', () => {
    test('unsets "isFetchingSingle"', () => {
      const newState = reducer(usersInitialData, Actions.fetchUserFail());
      const expectedValue = {
        isFetchingSingle: false,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });

    test('sets "error"', () => {
      const error = {};
      const newState = reducer(usersInitialData, Actions.fetchUserFail(error));
      const expectedValue = {
        error,
      };

      expect(newState).toEqual(expect.objectContaining(expectedValue));
    });
  });
});
