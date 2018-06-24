import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import withGithubApi from './withGithubApi';
import selectors from '../selectors';

function withUsers(Component) {
  class withUsersWrapper extends React.Component {
    componentDidMount() {
      const {users, githubApi} = this.props;

      if (users.length === 0) {
        githubApi.fetchUsers();
      }
    }

    render() {
      const {
        users,
        isFetching,
        isFetchingMore,
        error,
        githubApi,
        ...restProps,
      } = this.props;

      return (
        <Component
          users={users}
          isFetching={isFetching}
          isFetchingMore={isFetchingMore}
          error={error}
          loadMore={githubApi.fetchMoreUsers}
          {...restProps}
        />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      users: selectors.getUsersList(state),
      isFetching: selectors.getIsFetching(state),
      isFetchingMore: selectors.getIsFetchingMore(state),
      error: selectors.getError(state),
    };
  }

  return connect(mapStateToProps)(withUsersWrapper);
}

export default compose(
  withGithubApi,
  withUsers
);
