import React from "react";
import { StyleSheet, Text, View } from "react-native";

import useStyles from "../../../hooks/useStyles";
import { Colors } from "../../../types/Colors";

const WorkoutStats = () => {
  const { styles } = useStyles(createStyle);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>5 exs</Text>
      <Text style={styles.textStyle}>6 sets</Text>
    </View>
  );
};

const createStyle = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 10,
      fontFamily: "Roboto",
    },
    textStyle: {
      color: colors.white,
      fontSize: 15,
    },
  });

export default WorkoutStats;
