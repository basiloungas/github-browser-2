import {compose} from 'recompose';
import {withRouter} from 'react-router';

import Component from './component';
import {showLoaderIfLoading} from '../../../../../../components/loader';
import githubApi from '../../../../../../modules/githubApi';


export default compose(
  githubApi.withUsers,
  withRouter,
  showLoaderIfLoading(props => !!props.isFetching)
)(Component);
