import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import useStyles from "../../hooks/useStyles.ts";
import type { Colors } from "../../types/Colors.ts";
import { selectForPlatform } from "../../utils/selectForPlatform.ts";
import { WorkoutItem } from "./components/workoutItem.tsx";
import { BOTTOM_PADDING, ITEM_HEIGHT, TOP_POSITION } from "./constants.ts";

const items = Array.from({ length: 20 }, (_, i) => String.fromCodePoint(0x1f600 + i));

export const Workouts = () => {
  const { styles } = useStyles(style);

  return (
    <View style={styles.background}>
      <FlatList
        data={items}
        contentContainerStyle={[
          styles.container,
          { height: items.length * TOP_POSITION + BOTTOM_PADDING },
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <WorkoutItem
            index={index}
            height={ITEM_HEIGHT}
            key={index}
          >
            {item}
          </WorkoutItem>
        )}
      />
    </View>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      position: "relative",
      paddingHorizontal: 5,
      backgroundColor: colors.background,
      paddingTop: selectForPlatform(110, 70),
    },
    background: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
