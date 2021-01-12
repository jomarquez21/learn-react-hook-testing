import React from 'react';
import {mount, shallow} from 'enzyme';
import {LoginScreen} from './../../../components/09-useContext/LoginScreen';
import {UserContext} from './../../../components/09-useContext/UserContext';

describe('Test on `LoginScreen`', () => {
  const setUser = jest.fn();

  const component = mount(
    <UserContext.Provider value={{setUser}}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('Debe renderizar correctamente', () => {
    expect(component).toMatchSnapshot();
  });

  test('Debe ejecutar la function `setUser`', () => {
    component.find('button').simulate('click');

    expect(setUser).toHaveBeenCalledTimes(1);

    const user = {
      id: 123,
      name: 'Jomarquez',
    };

    expect(setUser).toHaveBeenCalledWith(user);
  });
});
