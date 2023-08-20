import React from "react";
import { StyleSheet, View } from "react-native";
import BottomNavigation from "./bottomNavigation";

interface NavigationWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const NavigationWrapper: React.FC<NavigationWrapperProps> = ({children}) => {

  return (
    <View style={styles.container}>
      {children}
      <BottomNavigation />
    </View>
  );
};

const styles =  StyleSheet.create({
  container: {
    flex: 1
  },
});

export default NavigationWrapper;
