import {compose} from 'recompose';

import Component from './component';
import {showLoaderIfLoading} from '../../../../components/loader';
import githubApi from '../../../../modules/githubApi';

export default compose(
  githubApi.withUser,
  showLoaderIfLoading(props => !!props.isFetching)
)(Component);
