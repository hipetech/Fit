import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { Calendar } from "../../../components/calendar.tsx";
import { TopDrawer } from "../../topDrawer";

const Header: React.FC = () => {
  return (
    <View style={[styles.headerContainer, styles.container]}>
      <TopDrawer>
        <Calendar />
      </TopDrawer>
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
