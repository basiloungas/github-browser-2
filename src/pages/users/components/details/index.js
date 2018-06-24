import {compose} from 'recompose';

import Component from './component';
import githubApi from '../../../../modules/githubApi';

export default compose(
  githubApi.withUser
)(Component);
