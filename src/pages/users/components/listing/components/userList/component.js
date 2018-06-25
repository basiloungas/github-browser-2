import React, {Fragment} from 'react';
import {
  ListGroupItem,
  Clearfix,
} from 'react-bootstrap';

import {
  Image,
  ListWrapper,
  Box,
  LoadButton,
} from './styled';

const Listing = props => {
  const {
    users,
    loadMore,
    isFetchingMore,
    history,
  } = props;

  const renderItem = (data) => {
    const clickHandler = (e) => {
      e.preventDefault();

      history.push(`/users/${data.login}`);
    }

    return (
      <Box xs={12} sm={6} md={4} lg={3} key={data.id}>
        <ListGroupItem header={data.login} href={`/users/${data.login}`} onClick={clickHandler} key={data.id}>
          <Image
            src={data.avatar_url}
            alt={`${data.login}'s thumbnail`}
            thumbnail
            responsive
          />
        </ListGroupItem>
      </Box>
    )
  }

  return (
    <Fragment>
      <ListWrapper>
        {users.map(renderItem)}
        <Clearfix />
      </ListWrapper>
      <LoadButton onClick={loadMore} disabled={isFetchingMore}>Load More Users</LoadButton>
    </Fragment>
  );
};

export default Listing;
