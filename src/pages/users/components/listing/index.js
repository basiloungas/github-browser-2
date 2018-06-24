import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Listing = () => {
  return (
    <Fragment>
      <h1>Github users list</h1>
      <Link to={'/'}>Back to homepage</Link>
      <Link to={'/users/asd'}>SEE USER DETAILS</Link>
    </Fragment>
  );
};

// Users.propTypes = {
//   children: React.PropTypes.node.isRequired,
// };

export default Listing;
