import React from "react";
import Workouts from "../../screens/Workouts";
import Exercises from "../../screens/Exercises";
import Account from "../../screens/Account";
import { RootStackParamList } from "../../types/RootStackParamList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomNavigation from "./components/bottomNavigation";

const Tab = createBottomTabNavigator<RootStackParamList>();

const Navigation = () => {

  return (
    <Tab.Navigator
      initialRouteName={"workouts"}
      tabBar={(props) => <BottomNavigation {...props}/>}
      screenOptions={{
        headerShown: false,
        freezeOnBlur: false
      }}>
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
  );
};

export default Navigation;
