import { act, renderHook, RenderHookResult } from '@testing-library/react-hooks';
import useMemoFn from '../index';
import { useState } from 'react';

const TestHooks = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const persistFn = useMemoFn(() => count);

  return { addCount, persistFn };
};

let hook: RenderHookResult<[], ReturnType<typeof TestHooks>>;

describe('useMemoFn', () => {
  it('should be defined', () => {
    expect(useMemoFn).toBeDefined();
  });

  it('useMemoFn should work', () => {
    act(() => {
      hook = renderHook(() => TestHooks());
    });
    const currentFn = hook.result.current.persistFn;
    expect(hook.result.current.persistFn()).toEqual(0);

    act(() => {
      hook.result.current.addCount();
    });

    expect(currentFn).toEqual(hook.result.current.persistFn);
    expect(hook.result.current.persistFn()).toEqual(1);
  });
});
