import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import useStyles from "../../hooks/useStyles.ts";
import type { Colors } from "../../types/Colors.ts";
import { Dash } from "../../ui/dash.tsx";
import TransparentView from "../../ui/transparentView.tsx";
import { ThemeSwitch } from "./components/themeSwitch.tsx";

export const Settings = () => {
  const { styles } = useStyles(style);

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <TransparentView style={styles.settingsContainer}>
        <ThemeSwitch />
        <Dash />
      </TransparentView>
    </ScrollView>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    contentContainer: {
      paddingTop: 120,
      paddingHorizontal: 8,
    },
    settingsContainer: {
      width: "100%",
      minHeight: 150,
      borderRadius: 20,
    },
  });
