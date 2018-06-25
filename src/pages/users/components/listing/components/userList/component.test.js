import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {ListGroupItem} from 'react-bootstrap';

import Component from './component';
import {LoadButton} from './styled';

describe('pages > Users > Listing > UserList', () => {
  const users = [
    {
      id: 1,
      login: 'login1',
      avatar_url: 'avatar_url1',
    },
    {
      id: 2,
      login: 'login2',
      avatar_url: 'avatar_url2',
    }
  ];

  const defaultProps = {
    users,
    loadMore: () => {},
    isFetchingMore: false,
    history: {push: () => {}},
  }

  test('renders users on the list', () => {
    const wrapper = shallow(<Component {...defaultProps} />);

    expect(wrapper.find(ListGroupItem)).toHaveLength(2);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('renders a "LoadMore" button', () => {
    const wrapper = shallow(<Component {...defaultProps} />);

    expect(wrapper.find(LoadButton)).toHaveLength(1);
  });

  describe('when clicking on a User item', () => {
    test('it calls history.push', () => {
      const pushSpy =  jest.fn();
      const preventDefaultSpy =  jest.fn();
      const event = {
        preventDefault: preventDefaultSpy,
      };
      const props = {
        ...defaultProps,
        history: {
          push: pushSpy
        },
      }

      const wrapper = shallow(<Component {...props} />);
      wrapper
        .find(ListGroupItem)
        .first()
        .simulate('click', event);

      expect(pushSpy.mock.calls).toHaveLength(1);
      expect(preventDefaultSpy.mock.calls).toHaveLength(1);
      expect(pushSpy.mock.calls[0][0]).toEqual('/users/login1');
    });
  });

  describe('when clicking the "LoadMore" button', () => {
    test('it calls the "loadMore" prop', () => {
      const spy =  jest.fn();
      const props = {
        ...defaultProps,
        loadMore: spy
      }

      const wrapper = shallow(<Component {...props} />);
      wrapper
        .find(LoadButton)
        .first()
        .simulate('click');

      expect(spy.mock.calls).toHaveLength(1);
    });
  });

  describe('when "isFetchingMore" is true', () => {
    test('"LoadMore" button is disabled', () => {
      const props = {
        ...defaultProps,
        isFetchingMore: true
      }

      const wrapper = shallow(<Component {...props} />);

      expect(wrapper
        .find(LoadButton)
        .prop('disabled')).toEqual(true);
    });
  });
});
