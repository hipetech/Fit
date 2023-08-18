import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Colors } from "../types/Colors";
import useStyles from "../hooks/useStyles";

const Workouts = () => {

  const {styles} = useStyles(createStyles);

  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
};

const createStyles = (colors: Colors) => StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: "100%",
    height: "100%"
  }
});

export default Workouts;
