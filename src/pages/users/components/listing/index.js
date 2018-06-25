import React from 'react';
import {Well} from 'react-bootstrap';

import NaviLink from '../../../../components/naviLink';
import Page from '../../../../components/page';

import UserList from './components/userList';

const Listing = () => {
  return (
    <Page header={'User list'}>
      <NaviLink link={'/'} text={'Back to homepage'} />
      <Well>
        <UserList />
      </Well>
    </Page>
  );
};

export default Listing;
