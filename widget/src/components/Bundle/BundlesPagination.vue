<template>
  <div class="svv-list-pagination-container" v-if="bundlesData.page_count >= 2">
    <a
      class="pagination-control"
      @click.prevent="() => onPageNavItemClick('-')"
      href="#"
      >&#10094;</a
    >
    <a
      v-for="pageIndex in bundlesData.page_count"
      :key="pageIndex"
      :class="[
        'pagination-control',
        pageIndex === bundlesData.page_number ? 'active' : '',
      ]"
      @click.prevent="() => onPageNavItemClick(pageIndex)"
      href="#"
      >{{ pageIndex }}</a
    >
    <a
      class="pagination-control"
      @click.prevent="() => onPageNavItemClick('+')"
      href="#"
      >&#10095;</a
    >
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'EventsList',
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      bundlesData: 'bundles/bundles',
    }),
  },
  methods: {
    ...mapActions({
      fetchBundlesList: 'bundles/fetchBundlesList',
    }),
    ...mapMutations({
      setLoading: 'common/setLoading',
    }),
    async onPageNavItemClick(selectedPage) {
      switch (selectedPage) {
        case '-':
          if (this.bundlesData.page_number > 1) {
            this.setLoading(true);
            await this.fetchBundlesList({
              page: this.bundlesData.page_number - 1,
            });
          }
          break;
        case '+':
          if (this.bundlesData.page_number < this.bundlesData.page_count) {
            this.setLoading(true);
            await this.fetchBundlesList({
              page: this.bundlesData.page_number + 1,
            });
          }
          break;
        default:
          this.setLoading(true);
          await this.fetchBundlesList({ page: selectedPage });
      }
    },
  },
};
</script>
