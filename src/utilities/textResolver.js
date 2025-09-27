// File: src/utilities/textResolver.js
/* eslint-env browser, node */
/* global require */

let _currentLocale = "en_US";
const _dicts      = {};

// Webpack require.context
const ctx = require.context(
  "../locales", // folder
  true,         // recursive
  /translation\.json$/  // only translation.json
);

ctx.keys().forEach((filePath) => {
  const match = filePath.match(/\.\/([^/]+)\//);
  if (!match) return;
  const locale = match[1];
  // Load JSON
  const dict = ctx(filePath);
  _dicts[locale] = dict.default || dict;
});

export function initI18n(defaultLocale = "en_US") {
  if (_dicts[defaultLocale]) {
    _currentLocale = defaultLocale;
  }
}

export function setLocale(locale) {
  if (_dicts[locale]) {
    _currentLocale = locale;
  }
}

export function t(key) {
  const dict = _dicts[_currentLocale] || {};
  return (key in dict) ? dict[key] : key;
}

export function translateAll(root = document.body) {
  root.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const key = el.getAttribute("data-i18n-key");
    if (key) el.textContent = t(key);
  });
}
