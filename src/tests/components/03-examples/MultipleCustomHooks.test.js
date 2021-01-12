import React from 'react'
import {shallow} from 'enzyme';
import {MultipleCustomHooks} from './../../../components/03-examples/MultipleCustomHooks';
import {useFetch} from './../../../hooks/useFetch';
import {useCounter} from './../../../hooks/useCounter';
jest.mock('./../../../hooks/useFetch');
jest.mock('./../../../hooks/useCounter');

describe('Test on `MultipleCustomHooks`', () => {
  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {},
  })

  test('Debe mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const component = shallow(<MultipleCustomHooks />);

    expect(component).toMatchSnapshot();
  });

  test('Debe mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [{
        author: 'Jomarquez',
        quote: 'Hello world!'
      }],
      loading: false,
      error: null,
    });
    const component = shallow(<MultipleCustomHooks />);

    expect(component.find('.alert').exists()).toBe(false);
    expect(component.find('.mb-0').text().trim()).toBe('Hello world!');
    expect(component.find('footer').text().trim()).toBe('Jomarquez');
  });
})