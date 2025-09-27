# scripts/generate_hi_json.py

import os
import json
from labels import labels
from argostranslate import translate

# Target language code
TARGET_LANG = "zh"

installed_languages = translate.get_installed_languages()
from_lang = next((lang for lang in installed_languages if lang.code == "en"), None)
to_lang = next((lang for lang in installed_languages if lang.code == TARGET_LANG), None)

if not from_lang or not to_lang:
    raise Exception("Translation models not found. Run install_models.py first.")

translation = from_lang.get_translation(to_lang)

translated = {label: translation.translate(label) for label in labels}

out_dir = f"src/locales/{TARGET_LANG}"
os.makedirs(out_dir, exist_ok=True)

with open(f"{out_dir}/translation.json", "w", encoding="utf-8") as f:
    json.dump(translated, f, ensure_ascii=False, indent=2)

print(f"✅ translations written to {out_dir}/translation.json")
