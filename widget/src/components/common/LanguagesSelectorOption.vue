<template>
  <div class="svv-languages-selector-option-item">
    <span class="svv-languages-selector-option-icon">
      <FlagChina v-if="value === 'zh-cn'" />
      <FlagFrance v-if="value === 'fr'" />
      <FlagGermany v-if="value === 'de'" />
      <FlagIndia v-if="value === 'hi'" />
      <FlagItaly v-if="value === 'it'" />
      <FlagJapan v-if="value === 'ja'" />
      <FlagLuxembourg v-if="value === 'nl'" />
      <FlagNorway v-if="value === 'no'" />
      <FlagRussia v-if="value === 'ru'" />
      <FlagKorea v-if="value === 'ko'" />
      <FlagSpain v-if="value === 'es'" />
      <FlagSweden v-if="value === 'sv'" />
      <FlagUsa v-if="value === 'en'" />
    </span>
    <span>{{ label }}</span>
  </div>
</template>

<script>
import FlagChina from "../../assets/flags/china.svg";
import FlagFrance from "../../assets/flags/france.svg";
import FlagGermany from "../../assets/flags/germany.svg";
import FlagIndia from "../../assets/flags/india.svg";
import FlagItaly from "../../assets/flags/italy.svg";
import FlagJapan from "../../assets/flags/japan.svg";
import FlagLuxembourg from "../../assets/flags/luxembourg.svg";
import FlagNorway from "../../assets/flags/norway.svg";
import FlagRussia from "../../assets/flags/russia.svg";
import FlagKorea from "../../assets/flags/south-korea.svg";
import FlagSpain from "../../assets/flags/spain.svg";
import FlagSweden from "../../assets/flags/sweden.svg";
import FlagUsa from "../../assets/flags/united-states-of-america.svg";

export default {
  name: "LanguagesSelectorOption",
  components: {
    FlagChina,
    FlagFrance,
    FlagGermany,
    FlagIndia,
    FlagItaly,
    FlagJapan,
    FlagLuxembourg,
    FlagNorway,
    FlagRussia,
    FlagKorea,
    FlagSpain,
    FlagSweden,
    FlagUsa,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>
