<template>
  <div class="svv-search-container" :class="{ 'open-search': searchPanelOpen }">
    <div class="svv-search-component">
      <div class="svv-search-input-container">
        <input
          type="text"
          :placeholder="$t('mainWidget.searchEventPlaceholder')"
          v-model="currentSearchString"
          class="svv-search-input"
          @keyup="handleEnterBtn($event)"
        />
        <div class="svv-action-search-btn" @click.prevent="onSearchActionClick">
          <SearchIcon class="open-search-icon" />
        </div>
      </div>
      <div
        class="svv-open-search-btn"
        @click.prevent="onOpenCloseSearchPanelClick"
      >
        <SearchIcon class="open-search-icon" v-show="!searchPanelOpen" />
        <CloseIcon class="close-search-icon" v-show="searchPanelOpen" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import SearchIcon from '@/assets/icons/loupe.svg';
import CloseIcon from '@/assets/images/icons/close.svg';

export default {
  name: 'SearchPanel',
  components: {
    SearchIcon,
    CloseIcon,
  },
  data() {
    return {
      currentSearchString: '',
    };
  },
  computed: {
    ...mapGetters({
      searchPanelOpen: 'search/searchPanelOpen',
      textSearchString: 'search/textSearchString',
      clearSearchInputMarker: 'search/clearSearchInputMarker',
    }),
  },
  watch: {
    textSearchString(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.currentSearchString = newVal;
      }
    },
    clearSearchInputMarker(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.currentSearchString = '';
      }
    },
  },
  methods: {
    ...mapActions({
      parseSearchRequest: 'search/parseSearchRequest',
    }),
    ...mapMutations({
      setSearchPanelOpen: 'search/setSearchPanelOpen',
      setLoading: 'common/setLoading',
    }),
    onOpenCloseSearchPanelClick() {
      this.setSearchPanelOpen(!this.searchPanelOpen);
    },
    onSearchActionClick() {
      const requestParamsUpdated = { search: this.currentSearchString };

      this.setLoading(true);
      this.parseSearchRequest(requestParamsUpdated);
    },
    handleEnterBtn(event) {
      if (event.keyCode === 13) {
        this.onSearchActionClick();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
