import React from "react";
import { invariant } from "../utils";

const useMemoFn = (callback: Function) => {
  invariant(typeof callback === "function", "callback is not a function");

  const callbackRef = React.useRef();
  callbackRef.current = callback;

  return React.useCallback(
    (...args: any) => {
      return callbackRef.current(...args);
    },
    [callbackRef]
  );
};

export default useMemoFn;
