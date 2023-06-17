import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Workouts from "../../screens/Workouts";
import Exercises from "../../screens/Exercises";
import Account from "../../screens/Account";
import { Platform, StyleSheet } from "react-native";
import { darkColors } from "../../styles/darkColors";

import WorkoutLogo from "./assets/workouts.svg";
import ExerciseLogo from "./assets/exercises.svg";
import AccountLogo from "./assets/account.svg";
import Calendar from "./components/calendar";
import WorkoutStats from "./components/workoutStats";
import Timer from "./components/timer";
import { Colors } from "../../types/colors";
import useStyles from "../../hooks/useStyles";


const Tab = createBottomTabNavigator();

const Navigation = () => {

  const { styles } = useStyles(createStyles);
  return (
    <Tab.Navigator screenOptions={{
      headerRight: () => <Calendar />,
      headerTitle: () => <WorkoutStats />,
      headerLeft: () => <Timer />,
      tabBarStyle: styles.tabBar,
      headerStyle: styles.header,
      headerTitleAlign: "center",
      tabBarActiveTintColor: darkColors.orange,
      tabBarInactiveTintColor: darkColors.white,
      tabBarLabelStyle: styles.tabBarLabel
    }}>
      <Tab.Screen
        name="Workouts"
        component={Workouts}
        options={{
          tabBarIcon: ({ color }) => (
            <WorkoutLogo fill={color} width={30} height={30} />
          )
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={Exercises}
        options={{
          tabBarIcon: ({ color }) => (
            <ExerciseLogo fill={color} width={40} height={40} />
          )
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <AccountLogo fill={color} width={34} height={34} />
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
    height: Platform.OS === "ios" ? 85: 63,
    backgroundColor: colors.black,
    paddingTop: 6,
    paddingBottom: Platform.OS === "ios" ? 22: 7
  },
  tabBarLabel: {
    fontSize: 12
  }
});

export default Navigation;
