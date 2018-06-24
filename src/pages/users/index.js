import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Listing from './components/listing';
import Details from './components/details';

const Users = (props) => {
  return (
    <Switch>
      <Route exact path={props.match.url} component={Listing} />
      <Route exact path={`${props.match.url}/:username`} component={Details} />
      <Redirect from='*' to={props.match.url} />
    </Switch>
  );
};

// Users.propTypes = {
//   children: React.PropTypes.node.isRequired,
// };

export default Users;
