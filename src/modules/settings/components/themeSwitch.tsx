import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { type ColorSchemeName, useColorScheme } from "react-native";

import { AsyncStorageValues } from "../../../asyncStorage.ts";
import useLocales from "../../../hooks/useLocales.ts";
import { useAppearanceStore } from "../../../store/appearanceStore.ts";
import { Dialog } from "../../../ui/dialog.tsx";
import { RadioButton } from "../../../ui/radioButton.tsx";
import { RadioGroup } from "../../../ui/radioGroup.tsx";
import AppearanceIcon from "./../assets/appearanceIcon.svg";
import { SettingsItem } from "./settingsItem.tsx";

type SettingsTranslations = {
  theme: string;
  themeDialog: {
    dialogTitle: string;
    radioButtons: {
      default: string;
      light: string;
      dark: string;
    };
  };
};

export const ThemeSwitch = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const locales = useLocales<SettingsTranslations>("settings");

  const [theme, setTheme] = useState("default");

  useEffect(() => {
    AsyncStorage.getItem(AsyncStorageValues.COLOR_THEME).then((colorTheme) =>
      setTheme(colorTheme || "default")
    );
  }, []);

  const { setupAppearance } = useAppearanceStore();
  const colorTheme = useColorScheme();

  const handleThemeChange = (value: string) => {
    setTheme(value);
    AsyncStorage.setItem(AsyncStorageValues.COLOR_THEME, value === "default" ? "" : value).then(
      () => setIsDialogOpen(false)
    );
    setTimeout(
      () => setupAppearance(value === "default" ? colorTheme : (value as ColorSchemeName)),
      400
    );
  };

  return (
    <>
      <SettingsItem
        title={locales.theme}
        Icon={AppearanceIcon}
        onPress={() => setIsDialogOpen(true)}
      />
      <Dialog
        title={locales.themeDialog.dialogTitle}
        visible={isDialogOpen}
        onDismiss={() => setIsDialogOpen(false)}
      >
        <RadioGroup
          initialValue={theme}
          onValueChange={handleThemeChange}
        >
          <RadioButton
            label={locales.themeDialog.radioButtons.default}
            value="default"
          />
          <RadioButton
            label={locales.themeDialog.radioButtons.light}
            value="light"
          />
          <RadioButton
            label={locales.themeDialog.radioButtons.dark}
            value="dark"
          />
        </RadioGroup>
      </Dialog>
    </>
  );
};
