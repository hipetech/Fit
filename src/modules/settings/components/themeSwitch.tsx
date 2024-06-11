import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Appearance, type ColorSchemeName } from "react-native";

import AppearanceIcon from "../../../assets/icons/appearanceIcon.svg";
import { AsyncStorageValues } from "../../../asyncStorageValues.ts";
import useLocales from "../../../hooks/useLocales.ts";
import { useAppearanceStore } from "../../../store/appearanceStore.ts";
import { Dialog } from "../../../ui/dialog.tsx";
import { RadioButton } from "../../../ui/radioButton.tsx";
import { RadioGroup } from "../../../ui/radioGroup.tsx";
import { SettingsItem } from "./settingsItem.tsx";

type ThemeSwitchTranslations = {
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
  const locales = useLocales<ThemeSwitchTranslations>("settings.themeSwitch");

  const [theme, setTheme] = useState("default");
  const { setupAppearance } = useAppearanceStore();

  useEffect(() => {
    AsyncStorage.getItem(AsyncStorageValues.COLOR_THEME).then((colorTheme) =>
      setTheme(colorTheme || "default")
    );
  }, []);

  const handleThemeChange = (value: string) => {
    setTheme(value);
    void AsyncStorage.setItem(AsyncStorageValues.COLOR_THEME, value === "default" ? "" : value);
    setupAppearance(value === "default" ? Appearance.getColorScheme() : (value as ColorSchemeName));
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
