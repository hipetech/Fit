import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import type { ExerciseNavigatorParamList } from "../../types/ExerciseNavigatorParamList.ts";
import type { RootNavigatorParamList } from "../../types/RootNavigatorParamList.ts";
import { ExerciseCategoriesList } from "../exerciseCategoriesList";
import { ExerciseDetails } from "../exerciseDetails";
import { ExerciseList } from "../exerciseList";
import { Settings } from "../settings";
import { Workouts } from "../workouts";
import BottomNavigation from "./components/bottomNavigation.tsx";
import Header from "./components/header";

const Tab = createBottomTabNavigator<RootNavigatorParamList>();
const Stack = createStackNavigator<ExerciseNavigatorParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator
        initialRouteName="workouts"
        tabBar={(props) => <BottomNavigation {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="workouts"
          component={Workouts}
        />
        <Tab.Screen name="exercises">
          {() => (
            <Stack.Navigator
              screenOptions={{ headerShown: false, gestureEnabled: false }}
              initialRouteName="exercise-categories"
            >
              <Stack.Screen
                name="exercise-categories"
                component={ExerciseCategoriesList}
              />
              <Stack.Screen
                name="exercise-list"
                component={ExerciseList}
              />
              <Stack.Screen
                name="exercise-details"
                component={ExerciseDetails}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="settings"
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
