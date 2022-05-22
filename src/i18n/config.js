import i18next from "i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr"],
    fallbackLng: "en",
    detection: {
      order: [
        "navigator",
        "localStorage",
        "htmlTag",
        "cookie",
        "path",
        "subdomain",
      ],
      cache: ["cookie"],
    },

    backend: {
      loadPath: "/assets/locales/{{lng}}/translations.json",
    },
    react: { useSuspense: false },
  });

export default i18n;
