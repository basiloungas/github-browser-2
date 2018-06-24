import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const renderItem = (data, index) => {
  return (
    <li key={data.id}>
      <p>{data.login}</p>
      <img
        src={data.avatar_url}
        width={200}
        height={200}
        alt="User's thumbnail"
      />
      <Link to={`/users/${data.login}`}>See details</Link>
    </li>
  )
}

const Listing = (props) => {
  return (
    <Fragment>
      <header>
        <h1>Github users list</h1>
        <Link to={'/'}>Back to homepage</Link>
      </header>
      <ul>
        { props.users.map( renderItem ) }
      </ul>
    </Fragment>
  );
};

// Users.propTypes = {
//   children: React.PropTypes.node.isRequired,
// };

export default Listing;
