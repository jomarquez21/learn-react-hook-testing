import React from 'react'
import {shallow} from 'enzyme';
import {RealExampleRef} from './../../../components/04-useRef/RealExampleRef';
import {MultipleCustomHooks} from './../../../components/03-examples/MultipleCustomHooks';

describe('Test on RealExampleRef', () => {
  test('Debe mostrarse correctamente', () => {
    const component = shallow(<RealExampleRef />);

    expect(component).toMatchSnapshot()
  })

  test('Debe renderizar `MultipleCustomHooks` al hacer click en el boton', () => {
    const component = shallow(<RealExampleRef />);

    component.find('.btn').simulate('click');
    
    expect(component.find(MultipleCustomHooks).exists()).toBe(true);
  })
});
