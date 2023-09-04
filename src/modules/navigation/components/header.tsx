import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

import TransparentView from "../../../components/transparentView";
import SmallIconButton from "../../../ui/smallIconButton";
import CalenderIcon from "../assets/calendar.svg";
import TimerIcon from "../assets/timer.svg";
import WorkoutStats from "./workoutStats";

const Header: React.FC<BottomTabHeaderProps> = () => {
  return (
    <TransparentView style={styles.container}>
      <SafeAreaView style={styles.items}>
        <SmallIconButton Content={TimerIcon} />
        <WorkoutStats />
        <SmallIconButton Content={CalenderIcon} />
      </SafeAreaView>
    </TransparentView>
  );
};

const styles =  StyleSheet.create({
  container: {
    width: "100%",
    height: Platform.OS === "android" ? 45 : 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
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
