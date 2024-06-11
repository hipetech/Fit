import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-ui-lib";
import { Realm } from "realm";

import DeleteIcon from "../../../assets/icons/delete.svg";
import type { WorkoutItem } from "../../../db/schemas/workoutItem.ts";
import useStyles from "../../../hooks/useStyles.ts";
import { shadows } from "../../../styles/shadows.ts";
import type { Colors } from "../../../types/Colors.ts";
import { Text } from "../../../ui/text.tsx";

interface WorkoutItemMoreModalProps {
  workoutItem: WorkoutItem;
  realm: Realm;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WorkoutItemMoreModal: React.FC<WorkoutItemMoreModalProps> = ({
  workoutItem,
  realm,
  isOpen,
  setIsOpen,
}) => {
  const { styles, colors } = useStyles(style);

  const { exerciseItems } = workoutItem || {};

  const deleteWorkoutItem = () => {
    realm.write(() => {
      exerciseItems.forEach((item) => {
        realm.delete(item.sets);
      });
      realm.delete(exerciseItems[0]);
      realm.delete(workoutItem);
    });
  };

  if (!isOpen) return null;

  return (
    <Pressable
      style={styles.backdrop}
      onPress={() => setIsOpen((value) => !value)}
    >
      <View style={styles.modal}>
        <TouchableOpacity
          style={styles.item}
          onPress={deleteWorkoutItem}
        >
          <DeleteIcon fill={colors.white} />
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    backdrop: {
      position: "absolute",
      backgroundColor: colors.backdrop,
      borderRadius: 23,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
    },
    modal: {
      width: "70%",
      height: 90,
      backgroundColor: colors.black,
      borderRadius: 23,
      ...shadows.shadowBase,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    item: {
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
    },
  });
