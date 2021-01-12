import React from 'react'
import {shallow, mount} from 'enzyme';
import {TodoApp} from './../../../components/08-useReducer/TodoApp';
import {demoTodos} from './../../fixtures/demoTodos';
import { act } from 'react-dom/test-utils';

describe('Test on `TodoApp`', () => {
  const component = shallow(<TodoApp />);
  // mock localstorage.
  Storage.prototype.setItem = jest.fn();

  test('Deber renderizar correctamente', () => {
    expect(component).toMatchSnapshot();
  });
  
  test('Deber agregar un todo', () => {
    const component = mount(<TodoApp />);

    act(() => {
      component.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      component.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    })

    const text = `TodoApp ( ${demoTodos.length} )`;

    expect(component.find('h1').text()).toBe(text);
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });


  test('Debe eliminar un todo', () => {
    component.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    component.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);

    const text = `TodoApp ( ${demoTodos.length} )`;
    expect(component.find('h1').text()).toBe(text);

    component.find('TodoList').prop('handleDelete')(demoTodos[0].id);

    expect(component.find('h1').text()).toBe('TodoApp ( 1 )');
  })
});