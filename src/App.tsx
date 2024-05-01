import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";

import Appearance from "./components/appearance";
import { RealmProvider } from "./db";
import { i18n } from "./locales/i18n.ts";
import Navigation from "./modules/navigation";

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

  if (!isI18nInitialized) {
    return null;
  }

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.gestureContainer}>
        <Appearance />
        <RealmProvider>
          <Navigation />
        </RealmProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
});

export default App;
