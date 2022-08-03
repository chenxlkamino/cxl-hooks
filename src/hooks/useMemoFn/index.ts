import { useRef, useCallback } from "react";

const useMemoFn = (callback: Function) => {
  const callbackRef = useRef<Function | null>(null);
  callbackRef.current = callback;

  return useCallback(
    (...args: any) => {
      if (typeof callbackRef.current !== "function") {
        return;
      }

      return callbackRef.current(...args);
    },
    [callbackRef]
  );
};

export default useMemoFn;
