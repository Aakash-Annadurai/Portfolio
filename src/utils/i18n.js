import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../locales/en.json";
import tn from "../locales/tn.json";

i18n
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Bind i18n to React
  .init({
    resources: {
      en: { translation: en },
      tn: { translation: tn },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already escapes content
    },
  });

export default i18n;
