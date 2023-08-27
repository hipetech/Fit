import React from "react";
import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import SmallIconButton from "../../../ui/smallIconButton";
import CalenderIcon from "./../assets/calendar.svg";

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
