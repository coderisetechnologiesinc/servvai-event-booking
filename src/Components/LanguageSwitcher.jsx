// src/components/LanguageSwitcher.jsx
import React from "react";
import { setLocale, translateAll } from "../utilities/textResolver.js";

const AVAILABLE_LOCALES = [
  { code: "en_US", label: "English" },
  { code: "de",    label: "Deutsch" },
  { code: "fr",    label: "Français" },
  { code: "es",    label: "Español" },
  { code: "hi",    label: "Hindi" },
  { code: "ru",    label: "Russian" },
  { code: "zh",    label: "中文" }, // Chinese
  // add more as you ship more translation.json folders
];

export default function LanguageSwitcher({ targetId = "servv-wrap" }) {
  const onChange = (e) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    // re-scan and re-translate the entire plugin root:
    translateAll(document.getElementById(targetId));
  };

  return (
    <select onChange={onChange} defaultValue="">
      <option value="" disabled>
        🌐 Language
      </option>
      {AVAILABLE_LOCALES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}
