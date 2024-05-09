import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

import ArrowBack from "../../../assets/icons/arrowBack.svg";
import useStyles from "../../../hooks/useStyles.ts";
import { shadows } from "../../../styles/shadows.ts";
import type { Colors } from "../../../types/Colors.ts";
import { Button } from "../../../ui/button.tsx";
import { Text } from "../../../ui/text.tsx";

interface ExerciseListHeaderProps {
  categoryName: string;
  categoryColor: string;
}

export const ExerciseListHeader: React.FC<ExerciseListHeaderProps> = ({
  categoryName,
  categoryColor,
}) => {
  const { styles, colors } = useStyles(style);
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        round={true}
        onPress={goBack}
      >
        <ArrowBack fill={colors.white} />
      </Button>
      <View style={styles.textContainer}>
        <Text fontSize={18}>{categoryName}</Text>
        <View style={[styles.colorLine, { backgroundColor: categoryColor }]} />
      </View>
    </View>
  );
};

const style = (color: Colors) =>
  StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      position: "relative",
    },
    textContainer: {
      backgroundColor: color.black,
      borderRadius: 27,
      paddingTop: 14,
      paddingHorizontal: 30,
      paddingBottom: 10,
      alignItems: "center",
      shadowColor: color.black,
      ...shadows.shadowBase,
    },
    colorLine: {
      width: 20,
      height: 5,
      borderRadius: 20,
      marginTop: 5,
    },
    button: {
      position: "absolute",
      left: 10,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      shadowColor: color.black, // white shadow
      ...shadows.shadowBase,
    },
  });
