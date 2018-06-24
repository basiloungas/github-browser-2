import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import withGithubApi from './withGithubApi';
import selectors from '../selectors';

function withUser(Component) {
  class withUserWrapper extends React.Component {
    componentDidMount() {
      const {user, username, githubApi} = this.props;

      if (!user) {
        githubApi.fetchUser(username);
      }
    }

    render() {
      const {
        user,
        isFetchingSingle,
        error,
        ...restProps
      } = this.props;

      return (
        <Component
          user={user}
          isFetching={isFetchingSingle}
          error={error}
          {...restProps}
        />
      );
    }
  }

  function mapStateToProps(state, ownProps) {
    const username = ownProps.match.params.username;

    return {
      user: selectors.getUser(state, username),
      isFetchingSingle: selectors.getIsFetchingSingle(state),
      error: selectors.getError(state),
      username,
    };
  }

  return connect(mapStateToProps)(withUserWrapper);
}

export default compose(
  withGithubApi,
  withUser,
);
