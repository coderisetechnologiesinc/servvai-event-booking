<template>
  <transition name="svv-fade-transition">
    <div
      :class="[
        'svv-wgt-notice',
        widgetNotice.status === 0 ? 'success' : 'error',
      ]"
      v-if="widgetNotice.open"
    >
      <div class="svv-wgt-notice-inner">{{ widgetNotice.message }}</div>
    </div>
    <div v-else></div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ListNotificationPanel',
  computed: {
    ...mapGetters({
      isLoading: 'common/isLoading',
      widgetNotice: 'common/widgetNotice',
    }),
  },
  methods: {
    ...mapMutations({
      setWidgetNotice: 'common/setWidgetNotice',
    }),
  },
  data() {
    return {
      isNoticeVisible: false,
    };
  },
  watch: {
    widgetNotice(newVal) {
      if (newVal.open === true) {
        setTimeout(() => {
          this.setWidgetNotice({
            open: false,
            status: 0,
            message: '',
          });
        }, 7000);
      }
    },
  },
};
</script>
