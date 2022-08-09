import { useRef, useEffect } from 'react';
import useMemoFn from '../useMemoFn';

type BasicTarget<T = HTMLElement> = T | (() => T);

type NodeType = HTMLElement | Element | Window | Document | null;

const useEventListener = (
  node: BasicTarget<NodeType>,
  eventName: string,
  callback: EventListener,
  capture = false,
) => {
  const listenerRef = useRef(callback);
  listenerRef.current = callback;

  const nodeFn = useMemoFn(typeof node === 'function' ? node : () => node);

  useEffect(() => {
    const target = nodeFn();
    if (!target || typeof eventName !== 'string') return;

    target.addEventListener(eventName, listenerRef.current, capture);

    return () =>
      target?.removeEventListener(eventName, listenerRef.current, capture);
  }, [nodeFn, eventName, listenerRef, capture]);
};

export default useEventListener;
