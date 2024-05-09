import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-ui-lib";

import Plus from "../../../assets/icons/plus.svg";
import type { Exercise } from "../../../db/schemas/exercise.ts";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import type { ScreenNavigation } from "../../../types/ScreenNavigation.ts";
import { Button } from "../../../ui/button.tsx";
import { Text } from "../../../ui/text.tsx";

interface ExerciseItemProps {
  exercise: Exercise;
}

export const ExerciseItem: React.FC<ExerciseItemProps> = ({ exercise }) => {
  const { styles, colors } = useStyles(style);
  const { navigate } = useNavigation<ScreenNavigation>();

  const {
    i18n: { language },
  } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate("exercise-details", { exerciseId: exercise._id.toString() })}
      >
        <Text fontSize={18}>{exercise.copies[language].title}</Text>
      </TouchableOpacity>
      <Button
        round={true}
        backgroundColor={colors.background}
      >
        <Plus fill={colors.white} />
      </Button>
    </View>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 80,
      backgroundColor: colors.black,
      borderRadius: 23,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
