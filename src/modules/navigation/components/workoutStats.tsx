import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { darkColors } from "../../../styles/darkColors";

const WorkoutStats = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: darkColors.white, fontSize: 15}}>5 exs</Text>
      <Text style={{color: darkColors.white, fontSize: 15}}>6 sets</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    fontFamily: "Roboto"
  },
});

export default WorkoutStats;
