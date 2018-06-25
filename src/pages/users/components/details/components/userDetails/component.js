import React, {Fragment} from 'react';
import {
  Row,
  Col,
  Clearfix,
  Jumbotron,
} from 'react-bootstrap';

import {
  Image,
  ImageWrapper,
  Header,
  Payload,
} from './styled';

const UserDetails = ({user}) => {
  if (!user) {
    return (
      <Jumbotron>
        <p>User has no data</p>
      </Jumbotron>
    );
  }

  return (
    <Fragment>
      <Row>
        <Col xs={12}>
          <ImageWrapper>
            <Image
              src={user.avatar_url}
              thumbnail
              responsive
              alt={`${user.login}'s thumbnail`}
            />
          </ImageWrapper>
          <Header>
            <h4>{user.login}</h4>
            <p>ID: {user.id}</p>
            <p>
              Profile: <a href={user.html_url} target="_blank">Go to github profile</a>
            </p>
          </Header>
          <Clearfix />
          <Payload>
            {JSON.stringify(user, null, 2)}
          </Payload>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserDetails;
