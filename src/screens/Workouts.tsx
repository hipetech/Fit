import React from "react";
import {useTranslation} from "react-i18next";
import { SafeAreaView, Text } from "react-native";

const Workouts = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <Text>
        {t("string")}
      </Text>
    </SafeAreaView>
  );
};

export default Workouts;
