"use client";
import i18n from "@/i18n";
import Cookies from "js-cookie";

export default function LanguageSwitcher() {
  const change = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set("NEXT_LANG", lng, { expires: 365 });
    if (typeof document !== "undefined") document.documentElement.lang = lng;
  };

  return (
    <div>
      <button onClick={() => change("en")}>EN</button>
      <button onClick={() => change("ar")}>ع</button>
    </div>
  );
}
