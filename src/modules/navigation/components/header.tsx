import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform, StyleSheet } from "react-native";

import TransparentView from "../../../components/transparentView";

const Header: React.FC<BottomTabHeaderProps> = () => {
  return (
    <TransparentView style={styles.container}>

    </TransparentView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Platform.OS === "android" ? 45 : 100,
  }
});

export default Header;
