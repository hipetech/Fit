import type { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, StyleSheet, View } from "react-native";
import { BSON } from "realm";

import { useObject, useRealm } from "../../db";
import { Category } from "../../db/schemas/category.ts";
import useStyles from "../../hooks/useStyles.ts";
import useWorkout from "../../hooks/useWorkout.ts";
import { useDateStore } from "../../store/dateStore.ts";
import type { Colors } from "../../types/Colors.ts";
import type { ExerciseNavigatorParamList } from "../../types/ExerciseNavigatorParamList.ts";
import type { Locale } from "../../types/Locale.ts";
import { ExerciseItem } from "./components/exerciseItem.tsx";
import { ExerciseListHeader } from "./components/exerciseListHeader.tsx";

export const ExerciseList: React.FC<
  StackScreenProps<ExerciseNavigatorParamList, "exercise-list">
> = ({ navigation, route }) => {
  const category = useObject(Category, new BSON.ObjectId(route.params?.categoryId));
  const { exercises } = category || {};

  const workout = useWorkout();

  const { date } = useDateStore();

  const realm = useRealm();

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
          renderItem={({ item }) => (
            <ExerciseItem
              workout={workout}
              exercise={item}
              date={date}
              realm={realm}
              language={language as Locale}
              navigation={navigation}
            />
          )}
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
      gap: 10,
    },
  });
