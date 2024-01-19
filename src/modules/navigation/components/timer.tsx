import React from "react";
import { StyleSheet, View } from "react-native";

import SmallIconButton from "../../../ui/smallIconButton";
import TimerIcon from "../assets/timer.svg";

const Timer = () => {
  return (
    <View style={styles.container}>
      <SmallIconButton
        Content={TimerIcon}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
  },
});

export default Timer;
