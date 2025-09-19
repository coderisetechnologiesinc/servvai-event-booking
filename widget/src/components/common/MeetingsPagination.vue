<template>
  <div
    class="svv-list-pagination-container"
    v-if="meetingsForPagination.page_count >= 2"
  >
    <a
      class="pagination-control"
      @click.prevent="() => onPageNavItemClick('-')"
      href="#"
      >&#10094;</a
    >
    <a
      v-for="pageIndex in getPaginationSlice"
      :key="pageIndex"
      :class="[
        'pagination-control',
        pageIndex === meetingsForPagination.page_number ? 'active' : '',
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
      isCalendarFilterActive: "events/isCalendarFilterActive",
      meetingForSelectedDate: "events/meetingForSelectedDate",
    }),
    meetingsForPagination() {
      if (this.isCalendarFilterActive) {
        return this.meetingForSelectedDate;
      } else return this.meetingsList;
    },
    getPaginationSlice() {
      if (!this.meetingsForPagination) return [];

      const currentPage = this.meetingsForPagination.page_number;
      const totalPages = this.meetingsForPagination.page_count;

      let start = currentPage - 1;
      let end = currentPage + 1;

      if (start < 1) {
        start = 1;
        end = Math.min(3, totalPages);
      } else if (end > totalPages) {
        end = totalPages;
        start = Math.max(totalPages - 2, 1);
      }

      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    },
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
          if (this.meetingsForPagination.page_number > 1) {
            this.setLoading(true);
            await this.fetchEventsList({
              page: this.meetingsForPagination.page_number - 1,
            });
          }
          break;
        case "+":
          if (
            this.meetingsForPagination.page_number <
            this.meetingsForPagination.page_count
          ) {
            this.setLoading(true);
            await this.fetchEventsList({
              page: this.meetingsForPagination.page_number + 1,
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
