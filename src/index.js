import 'whatwg-fetch';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store';
import GithubAPI from './modules/githubApi';
import App from './App';

const store = configureStore(GithubAPI.reducer);

render(
  <Provider store={store}>
    <GithubAPI.Provider store={store}>
      <App />
    </GithubAPI.Provider>
  </Provider>,
  document.getElementById('root')
);
