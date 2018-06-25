import fetcher from './utils/fetcher';
import selectors  from './selectors';
import * as Actions from './actions';

class GithubAPI {

  baseUrl = 'https://api.github.com';

  requestOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    }
  };

  constructor(store) {
    this.store = store;
  }

  fetchUsers = () => {
    const url = `${this.baseUrl}/users`;
    const options = this._createOptions();
    const type = Actions.ActionTypes.fetchUsers;

    return this._fetch(url, options, type);
  }

  fetchMoreUsers = () => {
    const url = selectors.getNextPage(this.store.getState());
    const options = this._createOptions();
    const type = Actions.ActionTypes.fetchMoreUsers;

    return this._fetch(url, options, type);
  }

  fetchUser = (userName) => {
    const url = `${this.baseUrl}/users/${userName}`;
    const options = this._createOptions();
    const type = Actions.ActionTypes.fetchUser;

    if (!url) {
      // TODO: return Promise that rejects, or custom Error
      return;
    }

    return this._fetch(url, options, type);
  }

  _fetch(url, options, type) {
    const action = Actions[type];

    this._dispatchAction(action());

    return fetcher(url, options)
      .then( response => {
        const action = Actions[`${type}Success`];

        this._dispatchAction(action(response));
      })
      .catch( error => {
        const action = Actions[`${type}Fail`];

        this._dispatchAction(action(error));
      })
  }

  _createOptions(options) {
    return { ...this.requestOptions, ...options };
  }

  _dispatchAction(action) {
    this.store.dispatch(action);
  }
}

export default GithubAPI;
