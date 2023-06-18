import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";


i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    compatibilityJSON: "v3",
    resources: {
      en: en
    },
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;
