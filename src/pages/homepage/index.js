import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Homepage = (props) => {
  return (
    <Fragment>
      <h1>Welcome to the Github users browser portal</h1>
      <Link to={'/users'}>See the list of users</Link>
    </Fragment>
  );
};

// Homepage.propTypes = {
//   children: React.PropTypes.node.isRequired,
// };

export default Homepage;
