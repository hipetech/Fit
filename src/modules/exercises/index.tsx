import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { CONTENT_PADDING_TOP } from "../../constants.ts";
import { useQuery } from "../../db";
import { Category } from "../../db/schemas/category.ts";
import useStyles from "../../hooks/useStyles.ts";
import type { Colors } from "../../types/Colors.ts";
import { CategoryItem } from "./components/categoryItem.tsx";
import { CONTAINER_PADDING, GAP, NUM_COLUMNS } from "./constants.ts";

export const Exercises = () => {
  const { styles } = useStyles(style);

  const categories = useQuery(Category);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      columnWrapperStyle={styles.columnWrapper}
      data={categories}
      numColumns={NUM_COLUMNS}
      renderItem={({ item }) => <CategoryItem category={item} />}
      keyExtractor={(item) => item._id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

const style = (color: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
    },
    contentContainer: {
      paddingVertical: CONTENT_PADDING_TOP,
      paddingHorizontal: CONTAINER_PADDING,
      flexDirection: "column",
      gap: GAP,
    },
    columnWrapper: {
      gap: GAP,
    },
  });
