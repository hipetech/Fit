import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Workouts from "../../screens/Workouts";
import Exercises from "../../screens/Exercises";
import Account from "../../screens/Account";
import { Platform, StyleSheet } from "react-native";

import WorkoutLogo from "./assets/workouts.svg";
import ExerciseLogo from "./assets/exercises.svg";
import SettingsLogo from "./assets/settings.svg";
import Calendar from "./components/calendar";
import WorkoutStats from "./components/workoutStats";
import Timer from "./components/timer";
import { Colors } from "../../types/Colors";
import useStyles from "../../hooks/useStyles";
import useLocales from "../../hooks/useLocales";
import { font } from "../../styles/font";
import { useColorsStore } from "../../store/colorsStore";

const Tab = createBottomTabNavigator();

interface NavigationLocales {
  workouts: string;
  exercises: string;
  settings: string;
}

const Navigation = () => {
  const locales = useLocales<NavigationLocales>("navigation");

  const {colors} = useColorsStore();

  const { styles } = useStyles(createStyles);
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
        name={"workouts"}
        component={Workouts}
        options={{
          tabBarLabel: locales.workouts,
          tabBarIcon: ({ color }) => (
            <WorkoutLogo fill={color} width={30} height={30} />
          )
        }}
      />
      <Tab.Screen
        name={"exercises"}
        component={Exercises}
        options={{
          tabBarLabel: locales.exercises,
          tabBarIcon: ({ color }) => (
            <ExerciseLogo fill={color} width={40} height={40} />
          )
        }}
      />
      <Tab.Screen
        name={"settings"}
        component={Account}
        options={{
          tabBarLabel: locales.settings,
          tabBarIcon: ({ color }) => (
            <SettingsLogo fill={color} width={30} height={30} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

const createStyles = (colors: Colors) => StyleSheet.create({
  header: {
    backgroundColor: colors.black
  },
  tabBar: {
    height: Platform.OS === "ios" ? 85 : 63,
    backgroundColor: colors.black,
    paddingTop: 6,
    paddingBottom: Platform.OS === "ios" ? 22 : 7
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: font.regular
  }
});

export default Navigation;
