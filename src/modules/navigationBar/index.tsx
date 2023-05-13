import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Workouts from "../../screens/Workouts";
import Exercises from "../../screens/Exercises";
import Account from "../../screens/Account";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/themes";


const Tab = createBottomTabNavigator();

const NavigationBar = () => {
    return (
        <Tab.Navigator screenOptions={{

            headerStyle: styles.header,
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: colors.orange
        }}>
            <Tab.Screen name="Workouts" component={Workouts} />
            <Tab.Screen name="Exercises" component={Exercises} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.black
    },
    tabBar: {
        backgroundColor: colors.black,
    }
});

export default NavigationBar;
