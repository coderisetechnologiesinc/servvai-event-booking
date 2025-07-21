<template>
  <div
    class="svv-ls-countdown-container"
    v-show="
      countdownData &&
      countdownData.days + countdownData.hours + countdownData.minutes !== 0
    "
  >
    <!--    <div class="svv-svg-icon"><ClockIcon /></div>-->

    <div class="svv-ls-countdown-content">
      <span>{{ $t('mainWidget.liveShoppingStartCountdown') }}{{ ' ' }}</span>
      <span v-if="countdownData.days > 0"
        >{{ countdownData.days
        }}{{
          countdownData.days < 2
            ? $t('globalWidgetsTranslations.dayLabelSingular')
            : $t('globalWidgetsTranslations.dayLabelPlural')
        }}{{ ' ' }}</span
      >
      <span v-if="countdownData.hours > 0"
        >{{ countdownData.hours
        }}{{
          countdownData.hours < 2
            ? $t('globalWidgetsTranslations.hourLabelSingular')
            : $t('globalWidgetsTranslations.hourLabelPlural')
        }}{{ ' ' }}</span
      >
      <span v-if="countdownData.minutes > 0"
        >{{ countdownData.minutes
        }}{{
          countdownData.minutes < 2
            ? $t('globalWidgetsTranslations.minuteLabelSingular')
            : $t('globalWidgetsTranslations.minuteLabelPlural')
        }}</span
      >
    </div>
  </div>
</template>

<script>
import ClockIcon from '@/assets/images/icons/wait.svg';
export default {
  name: 'LiveShoppingEventStartCountdown',
  components: {
    ClockIcon,
  },
  props: {
    countdownData: {
      default: () => {},
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
@import './src/assets/styles/scss/base/_baseScope.scss';
@import './src/assets/styles/scss/components/_eventListCardItemCountdown.scss';
</style>
