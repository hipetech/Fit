import "react-native-gesture-handler";

import { AppRegistry, Platform } from "react-native";
import { enableFreeze, enableScreens } from "react-native-screens";

import { name as appName } from "./app.json";
import App from "./src/App";
import { getDeveloperInfo } from "./src/utils/getDeveloperInfo";
import { initializeAppearance } from "./src/utils/initializeAppearance";

getDeveloperInfo();

void initializeAppearance();

// fix for 'No view found for id 0x26e' error
// React navigation nested stacks on androidx
if (Platform.OS === "android") {
  enableScreens(false);
}

// Experimental: might improve navigation performance
enableFreeze(true);

AppRegistry.registerComponent(appName, () => App);
