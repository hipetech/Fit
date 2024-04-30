import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import useLocales from "../../../hooks/useLocales";
import TransparentView from "../../../ui/transparentView.tsx";
import { HapticFeedback } from "../../../utils/hapticFeedback.ts";
import { selectForPlatform } from "../../../utils/selectForPlatform.ts";
import ExerciseLogo from "../assets/exercises.svg";
import SettingsLogo from "../assets/settings.svg";
import WorkoutLogo from "../assets/workouts.svg";
import NavigationItem from "./navigationItem";

type Translation = {
  workouts: string;
  exercises: string;
  settings: string;
};

const BottomNavigation: React.FC<BottomTabBarProps> = ({ navigation }) => {
  const locale = useLocales<Translation>("navigation");
  const [selected, setSelected] = useState<string>("workouts");

  const selectTab = (route: string) => {
    setSelected(route);
    navigation.navigate(route);
    HapticFeedback.lightImpact();
  };

  return (
    <TransparentView style={styles.bottomNav}>
      <View style={styles.navigationItems}>
        <NavigationItem
          icon={WorkoutLogo}
          caption={locale.workouts}
          isActive={"workouts" === selected}
          iconWidth={24}
          iconHeight={24}
          onPress={() => selectTab("workouts")}
        />
        <NavigationItem
          icon={ExerciseLogo}
          caption={locale.exercises}
          isActive={"exercises" === selected}
          iconWidth={24}
          iconHeight={24}
          onPress={() => selectTab("exercises")}
        />
        <NavigationItem
          icon={SettingsLogo}
          caption={locale.settings}
          isActive={"settings" === selected}
          iconWidth={24}
          iconHeight={24}
          onPress={() => selectTab("settings")}
        />
      </View>
    </TransparentView>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    width: "100%",
    height: selectForPlatform(90, 65),
    position: "absolute",
    bottom: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 30,
  },
  navigationItems: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 10,
  },
});

export default BottomNavigation;
