import "./i18n";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Appearance from "./components/appearance";
import { RealmProvider } from "./db";
import Navigation from "./modules/navigation";

const App = () => {
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
