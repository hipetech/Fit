import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";

import ArrowBack from "../../../assets/icons/arrowBack.svg";
import type { Exercise } from "../../../db/schemas/exercise.ts";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import { Button } from "../../../ui/button.tsx";
import { Text } from "../../../ui/text.tsx";

interface ExerciseInfoProps {
  exercise: Exercise;
}

export const ExerciseInfo: React.FC<ExerciseInfoProps> = ({ exercise }) => {
  const { styles, colors } = useStyles(style);
  const { goBack } = useNavigation();
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <View style={styles.container}>
      <Button
        round={true}
        onPress={goBack}
        backgroundColor={colors.background}
        style={styles.button}
      >
        <ArrowBack fill={colors.white} />
      </Button>
      <View style={styles.header}>
        <Text
          fontSize={22}
          style={styles.text}
        >
          {exercise.copies[language].title}
        </Text>
      </View>
    </View>
  );
};

const style = (color: Colors) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 530,
      backgroundColor: color.black,
      borderRadius: 23,
      padding: 10,
      position: "relative",
    },
    button: {
      width: 53,
      height: 53,
      position: "absolute",
      left: 10,
      top: 10,
      zIndex: 2,
    },
    header: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
    },
    text: {
      marginTop: 16,
    },
  });
