import React from "react";
import { StyleSheet, View } from "react-native";
import TimerIcon from "../assets/timer.svg";
import SmallIconButton from "../../../components/smallIconButton";

const Timer = () => {
  return (
    <View style={styles.container}>
      <SmallIconButton Content={TimerIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25
  }
});

export default Timer;
