import React from 'react';
import {shallow} from 'enzyme';
import {TodoList} from './../../../components/08-useReducer/TodoList';
import {demoTodos} from './../../fixtures/demoTodos'

describe('Test on `TodoList`', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const component = shallow(<TodoList todos={demoTodos} handleDelete={handleDelete} handleToggle={handleToggle} />);
  
  test('Debe mostrarse correctamente', () => {
    expect(component).toMatchSnapshot()
  });

  test('Debe tener dos <TodoListItem />', () => {
    expect(component.find('TodoListItem').length).toBe(demoTodos.length);

    expect(component.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
  });
})