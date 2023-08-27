import React, { useCallback, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import WorkoutLogo from "../assets/workouts.svg";
import ExerciseLogo from "../assets/exercises.svg";
import SettingsLogo from "../assets/settings.svg";
import NavigationItem from "./navigationItem";
import useLocales from "../../../hooks/useLocales";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Colors } from "../../../types/Colors";
import useStyles from "../../../hooks/useStyles";

interface Translation {
  workouts: string;
  exercises: string;
  settings: string;
}

const BottomNavigation: React.FC<BottomTabBarProps> = ({navigation}) => {
  const locale = useLocales<Translation>("navigation");
  const [selected, setSelected] = useState<string>("workouts");
  const { styles } = useStyles(style);

  const selectTab = useCallback((route: string) => {
    setSelected(route);
    navigation.navigate(route);
  }, [navigation]);

  return (
    <View style={styles.bottomNav}>
      <View style={styles.navigationItems}>
        <NavigationItem
          icon={WorkoutLogo}
          caption={locale.workouts}
          isActive={"workouts" === selected}
          iconWidth={30}
          iconHeight={30}
          onPress={() => selectTab("workouts")}
        />
        <NavigationItem
          icon={ExerciseLogo}
          caption={locale.exercises}
          isActive={"exercises" === selected}
          iconWidth={30}
          iconHeight={30}
          onPress={() => selectTab("exercises")}
        />
        <NavigationItem
          icon={SettingsLogo}
          caption={locale.settings}
          isActive={"settings" === selected}
          iconWidth={30}
          iconHeight={30}
          onPress={() => selectTab("settings")}
        />
      </View>
    </View>
  );
};

const style = (colors: Colors) => StyleSheet.create({
  bottomNav: {
    width: "100%",
    height: Platform.OS === "android" ? 70 : 90,
    position: "absolute",
    bottom: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.black,
    paddingTop: 30
  },
  navigationItems: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 10,
  }
});

export default BottomNavigation;
