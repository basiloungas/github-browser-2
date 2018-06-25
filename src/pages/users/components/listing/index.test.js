import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import UsersListing from './index';

import Page from '../../../../components/page';
import UserList from './components/userList';

describe('pages > Users > Listing', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<UsersListing />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('loads content in "Page" with proper "text"', () => {
    const wrapper = shallow(<UsersListing />);

    expect(wrapper.find(Page).prop('header')).toEqual('User list');
  });

  test('display "UserList" component', () => {
    const wrapper = shallow(<UsersListing />);

    expect(wrapper.find(UserList).exists()).toBe(true);
  });
});
