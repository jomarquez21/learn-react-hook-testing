import React from 'react';
import {shallow} from 'enzyme';
import {TodoAdd} from './../../../components/08-useReducer/TodoAdd';

describe('Test on `TodoAdd`', () => {
  const handleAddTodo = jest.fn();
  const component = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
  
  test('Debe mostrarse correctamente', () => {
    expect(component).toMatchSnapshot();
  });

  test('No debe llamar `handleAddTodo`', () => {
    const onSubmit = component.find('form').prop('onSubmit');
    onSubmit({preventDefault(){}});

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('Debe llamar `handleAddTodo`', () => {
    const value = 'Learn any';
    component.find('input[type="text"]').simulate('change', {target: {value, name: 'description'}});

    const onSubmit = component.find('form').prop('onSubmit');
    onSubmit({preventDefault(){}});

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });

    expect(component.find('input[type="text"]').prop('value')).toBe('');
  });
})