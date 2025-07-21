<template>
  <div class="svv-languages-selector">
    <v-select
      :value="selectorValue"
      :options="languagesSelectOptions"
      :clearable="false"
      :searchable="false"
      :class="['svv-custom-vs-select', 'languages-selector']"
      @input="onLanguageSelectChange"
    >
      <template #option="{ label, value }">
        <LanguagesSelectorOption :label="label" :value="value" />
      </template>
      <template #selected-option="{ label, value }">
        <LanguagesSelectorOption :label="label" :value="value" />
      </template>
    </v-select>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import moment from "moment-timezone";

import LanguagesSelectorOption from "@/components/common/LanguagesSelectorOption.vue";

import {
  getLanguagesList,
  getLanguageOption,
} from "../../../servicesShared/languages";
import { defaultTranslationLanguages } from "../../../servicesShared/translations";

export default {
  name: "LanguagesSelector",
  components: {
    LanguagesSelectorOption,
  },
  data() {
    return {
      todayDate: moment(),
    };
  },
  computed: {
    ...mapGetters({
      widgetsCurrentLanguage: "common/widgetsCurrentLanguage",
      widgetsDefaultLanguage: "common/widgetsDefaultLanguage",
      translations: "common/translations",
    }),
    languagesSelectOptions() {
      const fullList = getLanguagesList(true, true);
      return fullList.filter((lang) =>
        defaultTranslationLanguages.includes(lang.value)
      );
    },
    selectorValue() {
      return getLanguageOption(
        this.widgetsCurrentLanguage || this.widgetsDefaultLanguage || "en",
        true
      );
    },
  },
  watch: {},
  methods: {
    ...mapMutations({
      setWidgetsCurrentLanguage: "common/setWidgetsCurrentLanguage",
    }),
    onLanguageSelectChange(selectedLang) {
      this.setWidgetsCurrentLanguage(selectedLang.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
