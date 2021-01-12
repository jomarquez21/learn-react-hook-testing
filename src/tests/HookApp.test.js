import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {HookApp} from '../HookApp';

describe('test on `HookApp`', () => {
  test('snapshot from `HookApp`', () => {
    const component = shallow(<HookApp />);

    expect(toJson(component)).toMatchSnapshot();
  });
});