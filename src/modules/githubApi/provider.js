import React from 'react';

import {GithubInstanceContext} from './context';
import GithubAPI from './githubApi';

const Provider = props => {
  const {children, store} = props;

  const instance = new GithubAPI(store);

  return (
    <GithubInstanceContext.Provider value={instance}>
      {children}
    </GithubInstanceContext.Provider>
  );
}

export default Provider;
