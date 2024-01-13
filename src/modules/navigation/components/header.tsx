import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { CurtainOverlay } from "../../curtainOverlay";

const Header: React.FC = () => {

  return (
    <View style={[styles.headerContainer, styles.container]}>
      <CurtainOverlay content={<View style={{width: "100%", height: "100%", backgroundColor: "red"}}></View>}  />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    zIndex: 99,
    position: "relative"
  },
  container: {
    width: "100%",
    height: Platform.OS === "android" ? 45 : 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },
  items: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 0 : 35
  }
});

export default Header;
