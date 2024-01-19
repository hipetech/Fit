import "./i18n";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Appearance from "./components/appearance";
import Navigation from "./modules/navigation";

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Appearance />
        <Navigation />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
