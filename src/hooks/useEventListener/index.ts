import { useRef, useEffect } from "react";
import useMemoFn from "../useMemoFn";

const useEventListener = (
  node: () => HTMLElement | HTMLElement,
  eventName: string,
  callback: Function,
  capture = false
) => {
  const listenerRef = useRef<Function | null>(null);
  listenerRef.current = callback;

  const nodeFn = useMemoFn(typeof node === "function" ? node : () => node);

  useEffect(() => {
    const target = nodeFn();
    if (!target || typeof eventName !== "string") return;

    target.addEventListener(eventName, listenerRef.current, capture);

    return () =>
      target.removeEventListener(eventName, listenerRef.current, capture);
  }, [nodeFn, eventName, listenerRef, capture]);
};

export default useEventListener;
