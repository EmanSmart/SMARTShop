"use client";
import i18n from "@/i18n";
import { I18nextProvider } from "react-i18next";
import localFont from "next/font/local";
import { useEffect } from "react";

 const dinNext = localFont({
  src: [
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-UltraLight-1.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-UltraLight-2.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-UltraLight-3.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-UltraLight-4.ttf",
      weight: "200",
      style: "normal",
    },

    {
      path: "../fonts/ArbFONTS-DINNEXTLTARABIC-LIGHT-1.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNEXTLTARABIC-LIGHT-2-2.ttf",
      weight: "300",
      style: "normal",
    },

    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Regular-2.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Regular-3.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Regular-4.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/DINNextLTArabic-Regular-3.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Medium-2.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Medium-3.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Medium-4.ttf",
      weight: "500",
      style: "normal",
    },

    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Bold-2.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Bold-3.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Bold-4.ttf",
      weight: "700",
      style: "normal",
    },

    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Heavy-1.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Heavy2-1.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Heavy2-2.ttf",
      weight: "800",
      style: "normal",
    },

    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Black-2.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Black-3.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/ArbFONTS-DINNextLTArabic-Black-4.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-din",
  display: "swap",
});

export default function ClientLayout({ children }) {
   
  useEffect(() => {
    const updateDir = (lng) => {
      const dir = lng === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = lng;
    };

    // initial
    updateDir(i18n.language);

    // on change language
    i18n.on("languageChanged", updateDir);

    return () => {
      i18n.off("languageChanged", updateDir);
    };
  }, []);
  return (
  <div className={dinNext.className}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </div>
  );
}
