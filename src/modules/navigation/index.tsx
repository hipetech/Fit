import React from "react";
import Workouts from "../../screens/Workouts";
import Exercises from "../../screens/Exercises";
import Account from "../../screens/Account";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/RootStackParamList";

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      animationEnabled: false
    }}>
      <Stack.Screen
        name={"workouts"}
        component={Workouts}
      />
      <Stack.Screen
        name={"exercises"}
        component={Exercises}
      />
      <Stack.Screen
        name={"settings"}
        component={Account}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
