<template>
  <div
    class="meetings-list-container"
    :class="[
      `${widgetSettings.widget_style_settings.ew_events_list_view}-view-mode`,
    ]"
  >
    <ListNotificationPanel />

    <EventsFilters
      v-if="
        windowSize !== 'mobile' &&
        ((widgetSettings.widget_style_settings.ew_events_list_view ===
          'progressive' &&
          !widgetSettings.widget_style_settings.show_filters_expanded) ||
          widgetSettings.widget_style_settings.ew_events_list_view !==
            'progressive')
      "
    />

    <ItemsListTypeSwitch />

    <div
      class="list-metadata-container svv-list-controls-container svv-bundles-list-controls"
    >
      <BundlesPagination v-show="isFilteredResultPaginationVisible" />
      <EventsListViewModeSelector
        v-if="!widgetSettings.widget_style_settings.ew_hide_view_mode_switch"
      />
      <EventsListPageSizeSelector item-type="bundle" />
    </div>
    <!--    v-masonry="bundlesListMasonryParentContainerId"-->
    <!--    transition-duration="0.3s"-->
    <!--    item-selector=".svv-bundle-card-item.grid-layout-item"-->
    <!--    fit-width="true"-->
    <!--    origin-left="true"-->

    <!--    <BundlesCardsWrapper-->
    <!--      v-if="!isListLoading && bundlesListForRender.length > 0"-->
    <!--      ref="bundlesGridContainer"-->
    <!--    >-->
    <!--      <BundleListCardItem-->
    <!--        v-for="(bundle, index) in bundlesListForRender"-->
    <!--        :key="index"-->
    <!--        :bundle="bundle"-->
    <!--        :more-details-label="-->
    <!--          widgetSettings.widget_style_settings.event_more_details_label-->
    <!--        "-->
    <!--        :list-view-mode="widgetSettings.widget_style_settings.eventsListView"-->
    <!--        :bundle-date-time="-->
    <!--          getBundleDateTime(bundle.events ? bundle.events[0] : null)-->
    <!--        "-->
    <!--        :open-details-item="openDetailsItem"-->
    <!--        :shop-currency="widgetSettings.currency"-->
    <!--        :bundle-price="getBundlePrice(bundle)"-->
    <!--        :on-show-more-details-click="onShowMoreDetailsClick"-->
    <!--        :on-book-bundle-click="onBookEventClick"-->
    <!--        :on-bundle-click="onBundleClick"-->
    <!--      />-->

    <!--      <div-->
    <!--        ref="bottomLineEventsGridContainer"-->
    <!--        v-waypoint="{-->
    <!--          active: true,-->
    <!--          callback: onListEnd,-->
    <!--          options: intersectionOptions,-->
    <!--        }"-->
    <!--      ></div>-->
    <!--    </BundlesCardsWrapper>-->

    <div
      :class="[
        `${widgetSettings.widget_style_settings.ew_events_list_view}-body`,
      ]"
      ref="bundlesGridContainer"
      v-if="
        widgetSettings.widget_style_settings.ew_events_list_view === 'grid' &&
        !isListLoading &&
        bundlesListForRender.length > 0
      "
      v-masonry="bundlesListMasonryParentContainerId"
      transition-duration="0.3s"
      item-selector=".svv-bundle-card-item.grid-layout-item"
      fit-width="true"
      origin-left="true"
    >
      <BundleListCardItem
        v-for="(bundle, index) in bundlesListForRender"
        :key="index"
        :bundle="bundle"
        :more-details-label="
          widgetSettings.widget_style_settings.event_more_details_label
        "
        :list-view-mode="
          widgetSettings.widget_style_settings.ew_events_list_view
        "
        :bundle-date-time="
          getBundleDateTime(bundle.events ? bundle.events[0] : null)
        "
        :bundle-date-formatted="
          getBundleDateFormated(bundle.events ? bundle.events[0] : null)
        "
        :open-details-item="openDetailsItem"
        :shop-currency="widgetSettings.currency"
        :bundle-price="getBundlePrice(bundle)"
        :on-show-more-details-click="onShowMoreDetailsClick"
        :on-book-bundle-click="onBookEventClick"
        :on-bundle-click="onBundleClick"
      />

      <div
        ref="bottomLineEventsGridContainer"
        v-waypoint="{
          active: true,
          callback: onListEnd,
          options: intersectionOptions,
        }"
      ></div>
    </div>
    <div
      :class="[
        `${widgetSettings.widget_style_settings.ew_events_list_view}-body`,
      ]"
      v-if="
        widgetSettings.widget_style_settings.ew_events_list_view === 'list' &&
        !isListLoading &&
        bundlesListForRender.length > 0
      "
    >
      <BundleListCardItem
        v-for="(bundle, index) in bundlesListForRender"
        :key="index"
        :bundle="bundle"
        :more-details-label="
          widgetSettings.widget_style_settings.event_more_details_label
        "
        :list-view-mode="
          widgetSettings.widget_style_settings.ew_events_list_view
        "
        :bundle-date-time="
          getBundleDateTime(bundle.events ? bundle.events[0] : null)
        "
        :bundle-date-formatted="
          getBundleDateFormated(bundle.events ? bundle.events[0] : null)
        "
        :open-details-item="openDetailsItem"
        :shop-currency="widgetSettings.currency"
        :bundle-price="getBundlePrice(bundle)"
        :on-show-more-details-click="onShowMoreDetailsClick"
        :on-book-bundle-click="onBookEventClick"
        :on-bundle-click="onBundleClick"
      />

      <div
        ref="bottomLineEventsGridContainer"
        v-waypoint="{
          active: true,
          callback: onListEnd,
          options: intersectionOptions,
        }"
      ></div>
    </div>

    <div class="list-result-counter-container">
      <span v-show="bundlesListForRender && bundlesListForRender.length"
        >{{ bundlesListForRender.length }}
        {{ $t("mainWidget.itemsCounterLabel") }}</span
      >
    </div>
    <!--    v-show="!isListInTheEnd && bundlesListForRender.length > 0"-->

    <div v-if="isListLoading && !isListEmpty" class="list-loader">
      <div class="svv-loader center"><span></span></div>
    </div>
    <div class="svv-empty-events-list" v-if="!isListLoading && isListEmpty">
      There are no items to display
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import BundlesPagination from "@/components/Bundle/BundlesPagination";
import ListNotificationPanel from "@/components/common/ListNotificationPanel";
import BundleListCardItem from "@/components/Bundle/BundleListCardItem";
import { getItemDateTimeDataFormatted, getDateFormat } from "@/services/utils";
import EventsListViewModeSelector from "@/components/common/EventsListViewModeSelector";
import EventsListPageSizeSelector from "@/components/common/EventsListPageSizeSelector";
import EventsFilters from "@/components/Event/EventsFilters";
// import ItemsListTypeSwitch from '@/components/common/ItemsListTypeSwitch';

export default {
  name: "BundlesList",
  components: {
    BundlesPagination,
    ListNotificationPanel,
    BundleListCardItem,
    EventsListViewModeSelector,
    EventsListPageSizeSelector,
    EventsFilters,
    // ItemsListTypeSwitch,
  },
  data() {
    return {
      isListLoading: this.$store.state.events.meetings.meetings.length === 0,
      openDetailsItem: "",
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 1], // [0.25, 0.75] if you want a 25% offset!
      },
      isListInTheEnd: true,
      // eventsListSeparators: {},
      bundlesListMasonryParentContainerId: "bundlesListMasonryParent1",
    };
  },
  computed: {
    ...mapGetters({
      allRequestParams: "search/allRequestParams",
      bundlesListData: "bundles/bundles",
      isLoading: "common/isLoading",
      widgetSettings: "common/widgetSettings",
      widgetsCurrentLanguage: "common/widgetsCurrentLanguage",
      widgetsDefaultLanguage: "common/widgetsDefaultLanguage",
      openItemsList: "common/openItemsList",
    }),

    bundlesListForRender() {
      return this.bundlesListData.bundles;
    },
    isListEmpty() {
      return this.bundlesListData.listIsEmpty;
    },
    isFilteredResultPaginationVisible() {
      return !this.isListLoading && this.bundlesListForRender.length > 0;
    },
  },
  watch: {
    bundlesListData(newVal) {
      if (
        newVal.bundles.length > 0 ||
        (newVal.bundles.length === 0 && newVal.listIsEmpty)
      ) {
        this.isListLoading = false;
      }
      setTimeout(() => {
        this.resetGridCardsHeight();
        this.setGridCardsHeight();
        this.redrawVueMasonry();
      }, 300);
    },

    "widgetSettings.widget_style_settings.ew_events_list_view"(newVal) {
      if (newVal === "list" && this.$refs.bundlesGridContainer) {
        this.$refs.bundlesGridContainer.removeAttribute("style");
      }

      setTimeout(() => {
        this.resetGridCardsHeight();

        if (newVal === "grid") {
          this.setGridCardsHeight();
          this.redrawVueMasonry();
        }
      }, 300);
    },
    openItemsList() {
      setTimeout(() => {
        this.resetGridCardsHeight();

        if (
          this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "grid"
        ) {
          this.setGridCardsHeight();
          this.redrawVueMasonry();
        }
      }, 300);
    },
  },
  async mounted() {
    if (Object.keys(this.allRequestParams).length > 0) {
      await this.fetchBundlesByParams();
    }
    setTimeout(() => {
      this.setGridCardsHeight();
      this.redrawVueMasonry();
    }, 300);
  },
  methods: {
    ...mapActions({
      fetchBundlesByParams: "bundles/fetchBundlesByParams",
      addBundleToCart: "bundles/addBundleToCart",
      fetchProductDetails: "events/fetchProductDetails",
    }),
    ...mapMutations({
      setLoading: "common/setLoading",
    }),
    setGridCardsHeight() {
      const itemsRoot = this.$refs.bundlesGridContainer;
      if (
        !itemsRoot ||
        this.widgetSettings.widget_style_settings.ew_events_grid_fluid_mode ||
        this.widgetSettings.widget_style_settings.ew_events_list_view ===
          "list" ||
        window.outerWidth < 600
      )
        return;
      const itemsList = itemsRoot.getElementsByClassName("grid-layout-item");
      let maxHeight = 0;

      itemsList.forEach((item) => {
        if (+item.offsetHeight > maxHeight) maxHeight = +item.offsetHeight;
        item.style.removeProperty("height");
      });

      itemsList.forEach((item) => {
        item.style.height = `${maxHeight}px`;
      });
    },

    resetGridCardsHeight() {
      const itemsRoot = this.$refs.bundlesGridContainer;
      if (!itemsRoot) return;
      const itemsList = itemsRoot.getElementsByClassName("grid-layout-item");
      itemsList.forEach((item) => {
        item.style.removeProperty("height");
      });
    },

    redrawVueMasonry() {
      if (
        this.widgetSettings.widget_style_settings.ew_events_list_view === "list"
      )
        return;
      this.$redrawVueMasonry(this.bundlesListMasonryParentContainerId);
    },

    getBundleDateTime(event) {
      return getItemDateTimeDataFormatted(
        event,
        this.widgetsCurrentLanguage || this.widgetsDefaultLanguage,
        getDateFormat(this.widgetSettings.date_format)
      );
    },
    getBundleDateFormated(event) {
      return getItemDateTimeDataFormatted(
        event,
        this.widgetsCurrentLanguage || this.widgetsDefaultLanguage,
        getDateFormat(this.widgetSettings.date_format)
      ).dateFull;
    },
    getBundlePrice(bundle) {
      return bundle.price || 0;
    },
    onBookEventClick(e, bundle) {
      e.preventDefault();
      e.stopPropagation();

      this.setLoading(true);
      this.addBundleToCart(bundle);
    },
    onShowMoreDetailsClick(e, bundle) {
      e.preventDefault();
      e.stopPropagation();

      if (bundle.description.length > 0 && this.openDetailsItem !== bundle.id) {
        this.openDetailsItem = bundle.id;
      } else {
        this.openDetailsItem = "";
      }
    },

    onListEnd({ going }) {
      if (going === this.$waypointMap.GOING_OUT) {
        this.isListInTheEnd = false;
      }

      if (going === this.$waypointMap.GOING_IN) {
        this.isListInTheEnd = true;
      }
    },
    async onBundleClick(bundle) {
      const productHandle = await this.fetchProductDetails(bundle.product_id);

      const productUrl = `${window.location.origin}/products/${productHandle}?variant=${bundle.variant_id}`;

      try {
        const win = window.open(productUrl, "_blank");
        win.focus();
      } catch (e) {
        window.location.href = productUrl;
      }
    },
  },
};
</script>
