import { useRef, useCallback } from 'react';
import { invariant } from '../../utils';

type noop = (...args: any[]) => any;

const useMemoFn = <T extends noop>(callback: T) => {
  const callbackRef = useRef<T | null>(null);
  callbackRef.current = callback;

  return useCallback(
    (...args: any[]) => {
      invariant(
        typeof callbackRef.current === 'function',
        'callback is not a function',
      );

      return callbackRef.current?.apply(null, args) as ReturnType<T>;
    },
    [callbackRef],
  );
};

export default useMemoFn;
