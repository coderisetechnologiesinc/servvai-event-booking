<template>
  <div
    class="svv-list-pagination-container"
    v-if="meetingsList.page_count >= 2"
  >
    <a
      class="pagination-control"
      @click.prevent="() => onPageNavItemClick('-')"
      href="#"
      >&#10094;</a
    >
    <a
      v-for="pageIndex in meetingsList.page_count"
      :key="pageIndex"
      :class="[
        'pagination-control',
        pageIndex === meetingsList.page_number ? 'active' : '',
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
import { mapActions, mapGetters, mapMutations } from "vuex";
import moment from "moment-timezone";

export default {
  name: "EventsList",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      meetingsList: "events/meetings",
    }),
  },
  methods: {
    ...mapActions({
      fetchMeetingsList: "events/fetchMeetingsList",
      fetchEventsList: "events/fetchEventsList",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
    }),
    async onPageNavItemClick(selectedPage) {
      switch (selectedPage) {
        case "-":
          if (this.meetingsList.page_number > 1) {
            this.setLoading(true);
            await this.fetchEventsList({
              page: this.meetingsList.page_number - 1,
            });
          }
          break;
        case "+":
          if (this.meetingsList.page_number < this.meetingsList.page_count) {
            this.setLoading(true);
            await this.fetchEventsList({
              page: this.meetingsList.page_number + 1,
            });
          }
          break;
        default:
          this.setLoading(true);
          await this.fetchEventsList({ page: selectedPage });
      }
    },
  },
};
</script>
