import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Account from "../../screens/Account";
import Exercises from "../../screens/Exercises";
import Workouts from "../../screens/Workouts";
import { RootStackParamList } from "../../types/RootStackParamList";
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
        screenOptions={{headerShown: false}}
      >
        <Tab.Screen
          name={"workouts"}
          component={Workouts}
        />
        <Tab.Screen
          name={"exercises"}
          component={Exercises}
        />
        <Tab.Screen
          name={"settings"}
          component={Account}
        />
      </Tab.Navigator>
    </>
  );
};

export default Navigation;
