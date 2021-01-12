import {renderHook, act} from "@testing-library/react-hooks";
import {useForm} from './../../hooks/useForm';

describe('Test on useForm', () => {
  const initialForm = {
    name: 'Jose',
    email: 'jomarquez@gmail.com'
  };

  test('Debe retornar valores por defecto', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [data, updateFunction, resetFunction] = result.current;

    expect(data).toEqual(initialForm);
    expect(typeof updateFunction).toBe('function')
    expect(typeof resetFunction).toBe('function')
  });

  test('Debe ejecutar las operaciones correctamente', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [, updateFunction, resetFunction] = result.current;
    
    act(() => {
      updateFunction({target: {name: 'name', value: 'Jose Enrique'}});
    });

    expect(result.current[0]).toEqual({name: 'Jose Enrique', email: 'jomarquez@gmail.com'});

    act(() => {
      resetFunction();
    });

    expect(result.current[0]).toEqual(initialForm);
  });
});
