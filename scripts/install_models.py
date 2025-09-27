# scripts/install_models.py
from argostranslate import package
import tempfile
import os

def main():
    # 1) Get remote & installed lists
    available = package.get_available_packages()
    installed = package.get_installed_packages()
    # 2) Define the language pairs you want
    pairs_to_install = [
        ("en", "es"),
        ("en", "fr"),
        ("en", "de"),
        ("en", "hi"),
        ("en", "ru"),
        ("en", "zh"),
        ("en", "ja"),  # Japanese, if you want to add it
        ("en", "ko"),  # Korean, if you want to add it
    ]

    for frm, to in pairs_to_install:
        # skip if already installed
        if any(p.from_code == frm and p.to_code == to for p in installed):
            print(f"✔ {frm}→{to} already installed")
            continue

        # find remote package
        pkg = next((p for p in available if p.from_code == frm and p.to_code == to), None)
        if not pkg:
            print(f"✘ No model found for {frm}→{to}")
            continue

        print(f"→ Downloading {frm}→{to} …")
        # download returns a filepath
        download_path = pkg.download()

        print(f"→ Installing {frm}→{to} from {download_path}")
        package.install_from_path(download_path)

    # 3) Report final installed
    print("\nInstalled packages now:")
    for p in package.get_installed_packages():
        print(f" • {p.from_code} → {p.to_code}")

if __name__ == "__main__":
    main()
