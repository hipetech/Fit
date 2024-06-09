import type { i18n as I18nType } from "i18next";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-ui-lib";

import { Set } from "../../../db/schemas/set.ts";
import { AppEmitter, AppEvents } from "../../../emmiter.ts";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import { Text } from "../../../ui/text.tsx";

interface SetItemProps {
  set: Set;
  i18n: I18nType;
}

export const SetItem: React.FC<SetItemProps> = ({ set, i18n }) => {
  const { styles } = useStyles(style);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => AppEmitter.emit(AppEvents.OPEN_EDIT_SET_MODAL, set)}
    >
      <View style={styles.value}>
        <Text>{`${set.value.toString()} `}</Text>
        <Text>{set.units}</Text>
      </View>
      <View>
        <Text>{`${set.reps.toString()} ${i18n.t("workout.setItem.reps")}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      minWidth: 58,
      height: 65,
      backgroundColor: colors.background,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 4,
    },
    value: {
      flexDirection: "row",
    },
  });
