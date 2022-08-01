import React from "react";
import useMemoFn from "./useMemoFn";
import { invariant } from "../utils";

const useEventListener = (
  node: () => HTMLElement | HTMLElement,
  eventName: string,
  callback: Function,
  capture = false
) => {

  invariant(typeof eventName === "string", "eventName is not a string");
  invariant(eventName, "eventName is empty");

  const listenerRef = React.useRef();
  listenerRef.current = callback;

  const nodeFn = useMemoFn(typeof node === "function" ? node : () => node);

  React.useEffect(() => {
    const target = nodeFn();
    if (!target) return;

    target.addEventListener(eventName, listenerRef.current, capture);

    return () =>
      target.removeEventListener(eventName, listenerRef.current, capture);
  }, [nodeFn, eventName, listenerRef, capture]);
};

export default useEventListener;
