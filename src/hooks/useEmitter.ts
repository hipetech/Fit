import { useEffect } from "react";

import { AppEmitter, type AppEvents } from "../emmiter.ts";

export default <T>(event: AppEvents, callback: (...args: T[]) => void) => {
  useEffect(() => {
    AppEmitter.addListener(event, callback);
    return () => {
      AppEmitter.removeAllListeners(event);
    };
  }, []);
};
