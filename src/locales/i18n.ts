import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n, { type LanguageDetectorAsyncModule } from "i18next";
import { initReactI18next } from "react-i18next";
import { LocaleConfig } from "react-native-calendars/src";
import { getLocales } from "react-native-localize";

import { AsyncStorageValues } from "../asyncStorageValues.ts";
import en from "./copies/en.json";
import uk from "./copies/uk.json";

type LanguageDetectorCallback = (lng: string | readonly string[] | undefined) => void | undefined;
type SavedLocale = Promise<string | readonly string[] | undefined>;

const asyncStorageLanguageDetector: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  async: true,
  detect: async (callback: LanguageDetectorCallback): SavedLocale => {
    const savedLocale =
      (await AsyncStorage.getItem(AsyncStorageValues.LANGUAGE)) || getLocales()[0].languageCode;
    callback(savedLocale);
    LocaleConfig.defaultLocale = savedLocale;
    return savedLocale;
  },
};

void i18n
  .use(initReactI18next)
  .use(asyncStorageLanguageDetector)
  .init({
    fallbackLng: "en",
    compatibilityJSON: "v3",
    resources: {
      en: en,
      uk: uk,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
