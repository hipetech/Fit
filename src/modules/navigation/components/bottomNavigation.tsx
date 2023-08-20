import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import WorkoutLogo from "../assets/workouts.svg";
import ExerciseLogo from "../assets/exercises.svg";
import SettingsLogo from "../assets/settings.svg";
import NavigationItem from "./navigationItem";
import useLocales from "../../../hooks/useLocales";
import { useNavigation } from "@react-navigation/native";
import { getCurrentScreenName } from "../../../utils/getCurrentScreenName";
import { ScreenNavigation } from "../../../types/ScreenNavigation";
import BlurredView from "../../../components/blurredView";

interface Translation {
  workouts: string;
  exercises: string;
  settings: string;
}

const BottomNavigation = () => {
  const locale = useLocales<Translation>("navigation");
  const navigation = useNavigation<ScreenNavigation>();
  const screenName = useMemo(() => getCurrentScreenName(navigation.getParent() || navigation), [navigation]);

  return (
    <BlurredView style={styles.bottomNav}>
      <View style={styles.navigationItems}>
        <NavigationItem
          icon={WorkoutLogo}
          caption={locale.workouts}
          isActive={"workouts" === screenName}
          iconWidth={30}
          iconHeight={30}
          onPress={() => navigation.navigate("workouts")}
        />
        <NavigationItem
          icon={ExerciseLogo}
          caption={locale.exercises}
          isActive={"exercises" === screenName}
          iconWidth={30}
          iconHeight={30}
          onPress={() => navigation.navigate("exercises")}
        />
        <NavigationItem
          icon={SettingsLogo}
          caption={locale.settings}
          isActive={"settings" === screenName}
          iconWidth={30}
          iconHeight={30}
          onPress={() => navigation.navigate("settings")}
        />
      </View>
    </BlurredView>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    width: "100%",
    height: 90,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  navigationItems: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  }
});

export default BottomNavigation;
