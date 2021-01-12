import React from 'react';
import {mount, shallow} from 'enzyme';
import {HomeScreen} from './../../../components/09-useContext/HomeScreen';
import {UserContext} from './../../../components/09-useContext/UserContext';

describe('Test on `HomeScreen.js`', () => {
  const user = {
    name: 'Jomarquez',
    email: 'jmrqz21@gmai.com'
  };

  const component = mount(
    <UserContext.Provider value={{user, setUser: jest.fn()}}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('Debe renderizar correctamente', () => {
    expect(component).toMatchSnapshot();
  });
});