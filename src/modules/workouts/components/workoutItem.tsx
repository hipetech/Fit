import type { i18n as I18nType } from "i18next";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { type RenderItemParams, ScaleDecorator } from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-ui-lib";
import { Realm } from "realm";

import MoreIcon from "../../../assets/icons/more.svg";
import type { WorkoutItem as WorkoutItemType } from "../../../db/schemas/workoutItem.ts";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import { Text } from "../../../ui/text.tsx";
import { HapticFeedback } from "../../../utils/hapticFeedback.ts";
import { AddSetButton } from "./addSetButton.tsx";
import { SetItem } from "./setItem.tsx";
import { WorkoutItemMoreModal } from "./workoutItemMoreModal.tsx";

const ACTIVE_SCALE = 1.015;

type WorkoutItemProps = RenderItemParams<WorkoutItemType> & {
  i18n: I18nType;
  realm: Realm;
};

export const WorkoutItem = ({ item, drag, isActive, i18n, realm }: WorkoutItemProps) => {
  const { styles, colors } = useStyles(style);
  const { language } = i18n;
  const { exerciseItems } = item || {};
  const [exerciseItem] = exerciseItems || [];
  const { exercise } = exerciseItem || {};

  const [isWorkoutItemMoreModalOpen, setIsWorkoutItemMoreModalOpen] = useState(false);

  return (
    <ScaleDecorator activeScale={ACTIVE_SCALE}>
      <Pressable
        style={styles.workoutItem}
        delayLongPress={200}
        onLongPress={() => {
          HapticFeedback.mediumImpact();
          drag();
        }}
        disabled={isActive}
      >
        <Text fontSize={18}>{exercise.copies[language].title}</Text>
        <View style={styles.setItems}>
          {exerciseItem.sets.map((set) => (
            <SetItem
              i18n={i18n}
              set={set}
              key={set._id.toString()}
            />
          ))}
          <AddSetButton exerciseItem={exerciseItem} />
        </View>
        <TouchableOpacity
          style={styles.more}
          onPress={() => setIsWorkoutItemMoreModalOpen(true)}
        >
          <MoreIcon fill={colors.white} />
        </TouchableOpacity>
        <WorkoutItemMoreModal
          realm={realm}
          i18n={i18n}
          workoutItem={item}
          isOpen={isWorkoutItemMoreModalOpen}
          setIsOpen={setIsWorkoutItemMoreModalOpen}
        />
      </Pressable>
    </ScaleDecorator>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    workoutItem: {
      borderRadius: 23,
      minHeight: 140,
      backgroundColor: colors.black,
      marginBottom: 10,
      padding: 20,
      alignItems: "flex-start",
      position: "relative",
    },
    setItems: {
      marginTop: 10,
      flexDirection: "row",
      gap: 10,
      flexWrap: "wrap",
    },
    more: {
      position: "absolute",
      right: 15,
      top: 0,
    },
  });
