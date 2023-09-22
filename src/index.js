import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require("./translations/en.json"),
      },
      tr: {
        translation: require("./translations/tr.json"),
      },
    },
    fallbackLng: "en",
    debug: true,
  });

const browserLanguage = navigator.language || navigator.userLanguage;
const countryCode = browserLanguage.slice(0, 2).toLowerCase();
const supportedLanguages = ["en", "tr"];

if (supportedLanguages.includes(countryCode)) {
  i18n.changeLanguage(countryCode);
} else {
  console.log("Unsupported language");
}

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
