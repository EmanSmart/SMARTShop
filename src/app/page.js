'use client'
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div>
      <LanguageSwitcher />
      <h1>{t("hello")}</h1>
      <p>{t("welcome")}</p>
    </div>
  );
}
