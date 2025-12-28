import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";

const resources = {
  en: { common: require("@/../public/locales/en/common.json") },
  ar: { common: require("@/../public/locales/ar/common.json") },
};

const savedLang = (typeof window !== "undefined" && Cookies.get("NEXT_LANG")) || "en";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: savedLang,
      fallbackLng: "en",
      ns: ["common"],
      defaultNS: "common",
      interpolation: { escapeValue: false },
      react: { useSuspense: false }, // لتسهيل الاستخدام بدون Suspense
    });
}

export default i18n;
