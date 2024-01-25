import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import AccountScreen from "../../screens/AccountScreen.tsx";
import ExercisesScreen from "../../screens/ExercisesScreen.tsx";
import WorkoutScreen from "../../screens/WorkoutsScreen.tsx";
import type { RootStackParamList } from "../../types/RootStackParamList";
import BottomNavigation from "./components/bottomNavigation";
import Header from "./components/header";

const Tab = createBottomTabNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <>
      <Header />
      <Tab.Navigator
        initialRouteName={"workouts"}
        tabBar={(props) => <BottomNavigation {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name={"workouts"}
          component={WorkoutScreen}
        />
        <Tab.Screen
          name={"exercises"}
          component={ExercisesScreen}
        />
        <Tab.Screen
          name={"settings"}
          component={AccountScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default Navigation;
