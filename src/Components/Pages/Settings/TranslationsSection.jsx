// components/Settings/TranslationsSettings.jsx
import BlockStack from "../../Containers/BlockStack";
import AnnotatedSection from "../../Containers/AnnotatedSection";
import SelectControl from "../../Controls/SelectControl";

const TranslationsSection = ({
  responsiveBlockStack,
  responsiveInput,
  getLangsSelectOptions,
  getDefaultWidgetLanguageName,
  handleDefaultLanguageChange,
  langForEdit,
  handleSelectLanguageforEdit,
  renderTranslations,
}) => {
  return (
    <BlockStack gap={8} cardsLayout={true} className={responsiveBlockStack}>
      <AnnotatedSection
        title="Default language for widgets"
        description="Translate text in widgets to any language"
        className={responsiveBlockStack}
      >
        <SelectControl
          label={"Default language"}
          options={getLangsSelectOptions().map((lang) => lang.label)}
          onSelectChange={handleDefaultLanguageChange}
          selected={getDefaultWidgetLanguageName()}
          className={responsiveInput}
        />
      </AnnotatedSection>

      <AnnotatedSection
        title="Language for translate"
        description="Before choosing the default language, select one from the list. Then, edit the widget fields and save the changes"
        className={responsiveBlockStack}
      >
        <SelectControl
          label="Language"
          options={getLangsSelectOptions().map((lang) => lang.label)}
          onSelectChange={handleSelectLanguageforEdit}
          selected={getLangsSelectOptions()
            .map((lang) => lang.label)
            .find((label) => label.startsWith(langForEdit))}
          className={responsiveInput}
        />
      </AnnotatedSection>

      <AnnotatedSection
        title="Global Widgets Translations"
        className={responsiveBlockStack}
      >
        {renderTranslations()}
      </AnnotatedSection>

      <AnnotatedSection
        title="Events Widget Translations"
        className={responsiveBlockStack}
      >
        {renderTranslations("mainWidget")}
      </AnnotatedSection>
    </BlockStack>
  );
};

export default TranslationsSection;
