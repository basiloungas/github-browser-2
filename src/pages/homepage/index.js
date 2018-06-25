import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

import Page from '../../components/page';

const Homepage = ({history}) => {
  const clickHandler = (e) => {
    e.preventDefault();

    history.push('/users');
  }

  return (
    <Page header={'Homepage'}>
      <Jumbotron>
        <p>Welcome to the Github user browser portal!</p>
        <p>Go ahead and browse all the users.</p>
        <p>
          <Button bsStyle="primary" onClick={clickHandler}>
            Browse users
          </Button>
        </p>
      </Jumbotron>
    </Page>
  );
};

export default Homepage;
