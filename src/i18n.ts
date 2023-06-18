import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import uk from "./locales/uk.json";

import { getLocales } from "react-native-localize";


i18n
  .use(initReactI18next)
  .init({
    lng: getLocales()[0].languageCode,
    fallbackLng: "en",
    compatibilityJSON: "v3",
    resources: {
      en: en,
      uk: uk
    },
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;
