import React from 'react';
import {shallow} from 'enzyme';
import {TodoListItem} from './../../../components/08-useReducer/TodoListItem';
import {demoTodos} from './../../fixtures/demoTodos';

describe('Test on `TodoListItem`', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const index = 0;
  const todo = demoTodos[0];
  const component = shallow(<TodoListItem todo={todo} index={index} handleDelete={handleDelete} handleToggle={handleToggle} />);

  test('Debe mostrarse correctamente', () => {

    expect(component).toMatchSnapshot()
  });

  test('Debe ejecutar la function `handleDelete` al querer eliminar el todo', () => {
    component.find('.btn-danger').simulate('click', todo.id);

    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(todo.id);
  });

  test('Debe ejecutar la function `handleToggle` al querer eliminar el todo', () => {
    component.find('p').simulate('click', todo.id);

    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith(todo.id);
  });

  test('Debe de mostrar el texto correctamente', () => {
    const text = component.find('p').text();

    expect(text).toBe(`${index + 1}. ${todo.desc}`);
  });

  test('Debe de tener la clase complete, si el `todo.done` is `true`', () => {
    const component = shallow(<TodoListItem todo={demoTodos[1]} index={index} handleDelete={handleDelete} handleToggle={handleToggle} />);

    expect(component.find('.complete').exists()).toBe(true);
  });
});