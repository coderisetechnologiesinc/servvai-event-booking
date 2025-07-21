<template>
  <div class="loading-overlay" v-show="isLoading">
    <div class="loading-overlay-inner">
      <div class="svv-loader center"><span></span></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WidgetLoader',
  computed: {
    ...mapGetters({
      isLoading: 'common/isLoading',
    }),
  },
};
</script>
