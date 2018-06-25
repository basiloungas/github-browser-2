import React from 'react';
import {Well} from 'react-bootstrap';

import NaviLink from '../../../../components/naviLink';
import Page from '../../../../components/page';

import UserDetails from './components/userDetails';

const Listing = () => {
  return (
    <Page header={'User details'}>
      <NaviLink link={'/users'} text={'Back to list'} />
      <Well>
        <UserDetails />
      </Well>
    </Page>
  );
};

export default Listing;
