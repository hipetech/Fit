import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Toast as WixToast } from "react-native-ui-lib";

import { AppEvents } from "../emmiter.ts";
import useEmitter from "../hooks/useEmitter.ts";

type ToastConfig = {
  backgroundColor: string;
  message: string;
  duration: number;
};

export const Toast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [config, setConfig] = useState<ToastConfig | null>(null);

  const openToast = (backgroundColor: string, message: string, duration: number) => {
    setConfig({
      backgroundColor,
      message,
      duration,
    });
    setIsVisible(true);
  };

  useEmitter(AppEvents.SHOW_TOAST, openToast);

  return (
    <WixToast
      style={styles.container}
      height={"105%"}
      visible={isVisible}
      position={"top"}
      swipeable={true}
      message={config?.message}
      autoDismiss={config?.duration}
      backgroundColor={config?.backgroundColor}
      onDismiss={() => setIsVisible(false)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: "105%",
  },
});
