import React, { useState } from "react";
import { StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

import useStyles from "../../hooks/useStyles.ts";
import type { Colors } from "../../types/Colors.ts";
import { selectForPlatform } from "../../utils/selectForPlatform.ts";
import { WorkoutItem } from "./components/workoutItem.tsx";

const NUM_ITEMS = 10;
function getColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

type Item = {
  key: string;
  label: string;
  height: number;
  width: number;
  backgroundColor: string;
};

const initialData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
  const backgroundColor = getColor(index);
  return {
    key: `item-${index}`,
    label: String(index) + "",
    height: 100,
    width: 60 + Math.random() * 40,
    backgroundColor,
  };
});

export const Workouts = () => {
  const { styles } = useStyles(style);

  const [data, setData] = useState(initialData);

  return (
    <DraggableFlatList
      data={data}
      onDragEnd={({ data }) => setData(data)}
      keyExtractor={(item) => item.key}
      renderItem={WorkoutItem}
      contentContainerStyle={styles.contentContainer}
      style={styles.content}
      showsVerticalScrollIndicator={false}
    />
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    content: {
      backgroundColor: colors.background,
    },
    contentContainer: {
      position: "relative",
      backgroundColor: colors.background,
      paddingVertical: selectForPlatform(110, 70),
      paddingHorizontal: 8,
      gap: 9,
    },
    background: {
      flex: 1,
      backgroundColor: colors.background,
    },
    rowItem: {
      height: 100,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
