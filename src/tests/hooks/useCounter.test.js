import {renderHook, act} from "@testing-library/react-hooks";
import {useCounter} from './../../hooks/useCounter';

describe('Test on useCounter', () => {
  test('Debe retornar valores por defecto', () => {
    const {result} = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('Debe retornar el valores dado', () => {
    const number = 100;
    const {result} = renderHook(() => useCounter(number));

    expect(result.current.counter).toBe(number);
  });

  test('Debe ejecutar correctamente las fuciones dada', () => {
    const {result} = renderHook(() => useCounter());
    const {increment, decrement, reset} = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(11);
    
    act(() => {
      reset();
    });

    expect(result.current.counter).toBe(10);
    
    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(9);
  });
});