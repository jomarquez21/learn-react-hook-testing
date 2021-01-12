import {todoReducer} from './../../../components/08-useReducer/todoReducer';
import {demoTodos} from './../../fixtures/demoTodos';

describe('test on `todoReducer`', () => {
  test('Debe retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test('Debe agregar un todo', () => {
    const newTodo = {id: 3, desc: 'Learn any', done: false};
    const state = todoReducer(demoTodos, {type: 'add', payload: newTodo});

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('Debe eliminar un todo', () => {
    const id = 1;
    const state = todoReducer(demoTodos, {type: 'delete', payload: id});

    expect(state.length).toBe(1);
    expect(state).toEqual(demoTodos.filter(todo => todo.id !== id));
  });

  test('Debe toggle un todo', () => {
    const id = 1;
    const state = todoReducer(demoTodos, {type: 'toggle', payload: id});

    expect(state[0].done).toBe(!demoTodos[0].done);
  });
});
