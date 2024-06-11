import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Empty from "../../../assets/icons/empty.svg";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import { Text } from "../../../ui/text.tsx";

export const EmptyWorkout = () => {
  const { styles, colors } = useStyles(style);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Empty
          width={110}
          height={110}
          fill={colors.backdrop}
        />
        <Text
          fontSize={27}
          color={colors.backdrop}
        >
          Empty day
        </Text>
      </View>
    </SafeAreaView>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
