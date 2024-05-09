import type { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, StyleSheet, View } from "react-native";
import { BSON } from "realm";

import { useObject } from "../../db";
import { Category } from "../../db/schemas/category.ts";
import useStyles from "../../hooks/useStyles.ts";
import type { Colors } from "../../types/Colors.ts";
import type { ExerciseNavigatorParamList } from "../../types/ExerciseNavigatorParamList.ts";
import { ExerciseItem } from "./components/exerciseItem.tsx";
import { ExerciseListHeader } from "./components/exerciseListHeader.tsx";

export const ExerciseList: React.FC<
  StackScreenProps<ExerciseNavigatorParamList, "exercise-list">
> = ({ route }) => {
  // we parse ObjectId from the string instead of passing the type directly
  // to avoid "Non-serializable values were found in the navigation state" error
  // in react-navigation
  const category = useObject(Category, new BSON.ObjectId(route.params?.categoryId));
  const { exercises } = category || {};

  const {
    i18n: { language },
  } = useTranslation();

  const { styles } = useStyles(style);

  return (
    category && (
      <View style={styles.container}>
        <View style={styles.header}>
          <ExerciseListHeader
            categoryName={category.copies[language].title}
            categoryColor={category.color}
          />
        </View>
        <FlatList
          data={exercises}
          renderItem={({ item }) => <ExerciseItem exercise={item} />}
          style={styles.exerciseList}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    )
  );
};

const style = (color: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
      position: "relative",
    },
    header: {
      position: "absolute",
      top: 130,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    exerciseList: {
      flex: 1,
      backgroundColor: color.background,
    },
    contentContainer: {
      paddingTop: 200,
      paddingHorizontal: 10,
    },
  });
