"use client";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{t("hello")}</h1>
      <p className="text-gray-600">{t("welcome")}</p>
    </div>
  );
}
