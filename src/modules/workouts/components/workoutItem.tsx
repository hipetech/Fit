import React, { type ReactNode } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import { ITEM_HEIGHT, TOP_POSITION } from "../constants.ts";

interface WorkoutItemProps {
  children: ReactNode | ReactNode[];
  index: number;
}

export const WorkoutItem: React.FC<WorkoutItemProps> = ({ index }) => {
  const { styles } = useStyles(style);
  const isMoving = useSharedValue(false);
  const topOffset = useSharedValue(TOP_POSITION * index);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: topOffset.value }],
    };
  });

  const moveGesture = Gesture.Pan()
    .onChange((event) => {
      if (isMoving.value) {
        console.log(JSON.stringify(event, null, 2));
        topOffset.value = event.translationY;
      }
    })
    .onEnd(() => {
      isMoving.value = false;
      topOffset.value = TOP_POSITION * index;
    });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <GestureDetector gesture={moveGesture}>
        <Pressable
          style={styles.dragLine}
          onLongPress={() => (isMoving.value = true)}
        />
      </GestureDetector>
    </Animated.View>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: ITEM_HEIGHT,
      backgroundColor: colors.transparent,
      borderRadius: 23,
      justifyContent: "center",
      alignItems: "flex-end",
      position: "absolute",
      paddingHorizontal: 10,
    },
    dragLine: {
      backgroundColor: colors.white,
      width: 6,
      height: 35,
      borderRadius: 100,
    },
  });
