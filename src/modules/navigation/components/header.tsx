import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { TopDrawerMenu } from "../../topDrawerMenu";

const Header: React.FC = () => {
  return (
    <View style={[styles.headerContainer, styles.container]}>
      <TopDrawerMenu content={<View />} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    zIndex: 99,
    position: "relative",
  },
  container: {
    width: "100%",
    height: Platform.OS === "android" ? 45 : 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

export default Header;
