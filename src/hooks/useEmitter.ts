import { useEffect } from "react";

import { AppEmitter, type AppEvents } from "../emmiter.ts";

// eslint-disable-next-line
export default (event: AppEvents, callback: (...args: any[]) => void) => {
  useEffect(() => {
    AppEmitter.addListener(event, callback);
    return () => {
      AppEmitter.removeAllListeners(event);
    };
  }, [callback, event]);
};
