import React, { useEffect, useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { enableFreeze, enableScreens } from "react-native-screens";
import SplashScreen from "react-native-splash-screen";

import StatusBar from "./components/statusBar.tsx";
import { RealmProvider } from "./db";
import { i18n } from "./locales/i18n.ts";
import Navigation from "./modules/navigation";
import { initializeAppearance } from "./utils/initializeAppearance.ts";

void initializeAppearance();

// fix for 'No view found for id 0x26e' error
// React navigation nested stacks on androidx
if (Platform.OS === "android") {
  enableScreens(false);
}

// Experimental: might improve navigation performance
enableFreeze(true);

const App = () => {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    const toggleInit = () => {
      setIsI18nInitialized(true);
      SplashScreen.hide();
    };
    i18n.on("initialized", toggleInit);
    return () => {
      i18n.off("initialized", toggleInit);
    };
  }, []);

  // bundle realm on app start
  // useEffect(() => {
  //   (async () => await bundleRealm())();
  // }, []);

  if (!isI18nInitialized) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
      <StatusBar />
      <RealmProvider>
        <Navigation />
      </RealmProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
});

export default App;
