import React from 'react';
import {GithubInstanceContext} from '../context';

export default function withGithubApi(Component) {
  return function withGithubAPIWrapper(props) {
    return (
      <GithubInstanceContext.Consumer>
        {githubApi => <Component {...props} githubApi={githubApi} />}
      </GithubInstanceContext.Consumer>
    );
  };
};
