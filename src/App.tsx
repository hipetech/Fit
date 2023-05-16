import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./modules/navigation";
import { StatusBar } from "react-native";
import { colors } from "./styles/themes";

const App = () => (
    <NavigationContainer>
        <StatusBar barStyle={"light-content"} backgroundColor={colors.black}/>
        <Navigation />
    </NavigationContainer>
);


export default App;
