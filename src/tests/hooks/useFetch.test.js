import {renderHook, act} from "@testing-library/react-hooks";
import {useFetch} from './../../hooks/useFetch';

describe('Test on useFetch', () => {
  test('Debe retornal la informacion por defecto', () => {
    const {result} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

    const {data, loading, error} = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  })

  test('Debe tener la informacion por solicitada', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    await waitForNextUpdate();

    const {data, loading, error} = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
  })

  test('Debe manejar el error', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
    await waitForNextUpdate();

    const {data, loading, error} = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se puedo cargar la info');
  })
});