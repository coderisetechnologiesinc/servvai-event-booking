# scripts/translate_labels.py
import json
import os
from argostranslate import package, translate
from labels import labels  # same as defined above

# Define source and target languages
language_map = {
    "es": "es",  # Spanish
    "fr": "fr",  # French
    "de": "de",  # German
    "hi": "hi",  # Hindi
    "ru": "ru",  # Russian
    "zh": "zh",  # Chinese
    "ja": "ja",  # Japanese
    "ko": "ko",  # Korean
    "en": "en",  # English (for reference)

}

installed_languages = translate.get_installed_languages()
from_lang = next(
    (lang for lang in installed_languages if lang.code == "en"), None)

if not from_lang:
    raise Exception("English language model not found")

for lang_code, target_code in language_map.items():
    to_lang = next(
        (lang for lang in installed_languages if lang.code == target_code), None)
    if not to_lang:
        print(f"Language model for {target_code} not installed")
        continue

    translation = from_lang.get_translation(to_lang)
    result = {label: translation.translate(label) for label in labels}

    # Save to JSON filea
    out_dir = f"src/locales/{lang_code}"
    os.makedirs(out_dir, exist_ok=True)
    with open(f"{out_dir}/translation.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(f"✅ Translated and saved: {lang_code}")
