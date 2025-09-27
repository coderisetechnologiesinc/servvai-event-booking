// src/bootstrap-i18n.js
import { initI18n, setLocale } from "./utilities/textResolver.js";

// 1. Initialize to your default build‐time locale
initI18n("en_US");

// 2. Detect the user’s browser language / locale (e.g. "de", "es", "fr")
const browserLang = (
  (navigator.language || navigator.userLanguage || "en_US")
    .replace("-", "_")
);

// 3. Switch to it if you have that dictionary
setLocale(browserLang);
