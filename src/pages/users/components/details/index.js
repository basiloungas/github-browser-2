import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const UserDetails = ({user}) => {
  return (
    <Fragment>
      <header>
        <h1>Github user Details!</h1>
        <Link to={'/users'}>Back to list of users</Link>
      </header>
      <p>ID: {user.id}</p>
      <p>
        Thumb:
        <img
          src={user.avatar_url}
          width={200}
          height={200}
          alt="User's thumbnail"
        />
      </p>
      <p>Login: {user.login}</p>
      <a href={user.html_url} target="_blank">Go to github profile</a>

      <p>Full payload:</p>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </Fragment>
  );
};

// Users.propTypes = {
//   children: React.PropTypes.node.isRequired,
// };

export default UserDetails;
