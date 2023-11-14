import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

import TransparentView from "../../../components/transparentView";
import useCurtainOverlay from "../../curtainOverlay";
import Calendar from "../assets/calendar.svg";
import Timer from "../assets/timer.svg";
import WorkoutStats from "./workoutStats";

const Header: React.FC = () => {
  const [CalendarOverlay, OpenCalendarArea] = useCurtainOverlay(<Text>Calendear</Text>);
  const [TimerOverlay, OpenTimerOverlay] = useCurtainOverlay(<Text>Timer</Text>);

  return (
    <View style={styles.headerContainer}>
      <CalendarOverlay />
      <TimerOverlay />
      <TransparentView style={styles.container}>
        <SafeAreaView style={styles.items}>
          <OpenTimerOverlay icon={Timer} />
          <WorkoutStats />
          <OpenCalendarArea icon={Calendar} />
        </SafeAreaView>
      </TransparentView>
    </View>
  );
};

const styles =  StyleSheet.create({
  headerContainer: {
    zIndex: 99,
    position: "relative"
  },
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
