import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Workouts from "../../screens/Workouts";
import Exercises from "../../screens/Exercises";
import Account from "../../screens/Account";
import { Platform, StyleSheet } from "react-native";
import { colors } from "../../styles/themes";

import WorkoutLogo from "./assets/workouts.svg";
import ExerciseLogo from "./assets/exercises.svg";
import AccountLogo from "./assets/account.svg";
import Calendar from "./components/calendar";
import WorkoutStats from "./components/workoutStats";
import Timer from "./components/timer";


const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerRight: () => <Calendar />,
            headerTitle: () => <WorkoutStats />,
            headerLeft: () => <Timer />,
            tabBarStyle: styles.tabBar,
            headerStyle: styles.header,
            headerTitleAlign: "center",
            tabBarActiveTintColor: colors.orange,
            tabBarInactiveTintColor: colors.white,
            tabBarLabelStyle: styles.tabBarLabel
        }}>
            <Tab.Screen
                name="Workouts"
                component={Workouts}
                options={{
                    tabBarIcon: ({ color }) => (
                        <WorkoutLogo fill={color} width={40} height={40} />
                    )
                }}
            />
            <Tab.Screen
                name="Exercises"
                component={Exercises}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ExerciseLogo fill={color} width={50} height={50} />
                    )
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AccountLogo fill={color} width={44} height={44} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.black
    },
    tabBar: {
        height: Platform.OS === "ios" ? 92: 68,
        backgroundColor: colors.black
    },
    tabBarLabel: {
        fontSize: 12
    }
});

export default Navigation;
