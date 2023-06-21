import React from "react";
import { StyleSheet, View } from "react-native";

import CalenderIcon from "./../assets/calendar.svg";

import SmallIconButton from "../../../ui/smallIconButton";

const Calendar = () => {

  return (
    <View style={styles.container}>
      <SmallIconButton Content={CalenderIcon} />
    </View>
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
