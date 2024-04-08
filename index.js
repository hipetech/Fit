import "react-native-gesture-handler";

import { AppRegistry } from "react-native";

import { name as appName } from "./app.json";
import App from "./src/App";
import { getDeveloperInfo } from "./src/utils/getDeveloperInfo";

AppRegistry.registerComponent(appName, () => App);

getDeveloperInfo();
