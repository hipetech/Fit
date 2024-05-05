import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import type { Category } from "../../../db/schemas/category.ts";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import Text from "../../../ui/text.tsx";
import { categoriesAssets } from "../assetsTree.ts";
import { ITEM_SIZE } from "../constants.ts";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const {
    i18n: { language: languageCode },
  } = useTranslation();

  const { styles, colors } = useStyles(style);

  const Icon = categoriesAssets[category.image as keyof typeof categoriesAssets];

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContainer}>
        <Text fontSize={28}>{category.copies[languageCode].title}</Text>
        <View style={[styles.underline, { borderBottomColor: category.color }]} />
      </View>
      {category.image && (
        <Icon
          style={styles.image}
          fill={colors.background}
        />
      )}
    </TouchableOpacity>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.transparent,
      width: ITEM_SIZE,
      height: ITEM_SIZE,
      borderRadius: 23,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    textContainer: {
      alignItems: "center",
    },
    underline: {
      borderBottomWidth: 4,
      marginTop: 5,
      width: 20,
      borderRadius: 10,
    },
    image: {
      position: "absolute",
      zIndex: -1,
    },
  });
