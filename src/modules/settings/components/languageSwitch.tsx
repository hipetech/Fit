import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LocaleConfig } from "react-native-calendars/src";

import LanguageIcon from "../../../assets/icons/languageIcon.svg";
import { AsyncStorageValues } from "../../../asyncStorageValues.ts";
import useLocales from "../../../hooks/useLocales.ts";
import type { Locale } from "../../../types/Locale.ts";
import { Dialog } from "../../../ui/dialog.tsx";
import { RadioButton } from "../../../ui/radioButton.tsx";
import { RadioGroup } from "../../../ui/radioGroup.tsx";
import { SettingsItem } from "./settingsItem.tsx";

type LanguageSwitchTranslations = {
  language: string;
  languageDialog: {
    dialogTitle: string;
    system: string;
  };
};

export const LanguageSwitch = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("system");

  const { i18n } = useTranslation();
  const locales = useLocales<LanguageSwitchTranslations>("settings.languageSwitch");

  useEffect(() => {
    AsyncStorage.getItem(AsyncStorageValues.LANGUAGE).then((language) =>
      setLocale((language as Locale) || "system")
    );
  }, []);

  const handleLanguageChange = async (value: Locale) => {
    setLocale(value);
    const localeValue = value === "system" ? "" : value;
    AsyncStorage.setItem(AsyncStorageValues.LANGUAGE, localeValue).then(() => {
      i18n.changeLanguage(localeValue);
      LocaleConfig.defaultLocale = localeValue;
    });
  };

  return (
    <>
      <SettingsItem
        title={locales.language}
        Icon={LanguageIcon}
        onPress={() => setIsDialogOpen(true)}
      />
      <Dialog
        title={locales.languageDialog.dialogTitle}
        visible={isDialogOpen}
        onDismiss={() => setIsDialogOpen(false)}
      >
        <RadioGroup
          initialValue={locale}
          onValueChange={handleLanguageChange}
        >
          <RadioButton
            label={locales.languageDialog.system}
            value="system"
          />
          <RadioButton
            label={"English"}
            value="en"
          />
          <RadioButton
            label={"Українська"}
            value="uk"
          />
        </RadioGroup>
      </Dialog>
    </>
  );
};
