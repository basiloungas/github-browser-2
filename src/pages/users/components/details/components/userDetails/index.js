import {compose} from 'recompose';
import {withRouter} from 'react-router'

import Component from './component';
import {showLoaderIfLoading} from '../../../../../../components/loader';
import githubApi from '../../../../../../modules/githubApi';

export default compose(
  withRouter,
  githubApi.withUser,
  showLoaderIfLoading(props => !!props.isFetching)
)(Component);
