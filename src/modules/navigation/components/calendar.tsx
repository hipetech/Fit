import React from "react";
import { StyleSheet } from "react-native";

import CalenderIcon from "./../assets/calendar.svg";

import SmallIconButton from "../../../ui/smallIconButton";

import Animated from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const Calendar = () => {

  const gesture = Gesture.Pan().onUpdate((event) => {
    console.log("there was an event " + event.x);
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={styles.container}>
        <SmallIconButton Content={CalenderIcon} />
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 25,
    flexDirection: "row",
    gap: 18
  }
});

export default Calendar;
