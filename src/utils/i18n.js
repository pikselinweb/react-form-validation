import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { localeYup } from "./localeYup";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      fallbackLng: "tr",
      debug: false,

      interpolation: {
        escapeValue: false,
      },
    },
    localeYup
  );

export default i18n;
