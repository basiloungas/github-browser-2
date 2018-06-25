import Provider from './provider';
import reducer from  './reducer';
import withUsers from './hocs/withUsers';
import withUser from './hocs/withUser';

/**
 * This is the GithubAPI module
 * it is setup similarly to the redux store via:
 * 1) a provider on the top level react tree
 * 2) hocs thats provide data access deeper in the tree
 *
 * It instantiates an API instance and keeps the reference throughtout the three via the new React.Context
 *
 * It normalises data upon receiving and provides them to the views repopulated, through the hocs which use the selectors to reaggregate the data set
 */
export default {
  Provider,
  reducer,
  withUsers,
  withUser,
};
