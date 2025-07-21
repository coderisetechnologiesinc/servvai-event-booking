<template>
  <div
    class="meetings-list-container"
    :class="[
      `${'list'}-view-mode`,
      isBundlePage
        ? 'svv-top-bottom-space-remover top-bottom-space-product-page'
        : '',
    ]"
  >
    <!-- <ListNotificationPanel /> -->

    <!-- <ItemsListTypeSwitch /> -->

    <!-- <div
      class="list-metadata-container svv-list-controls-container svv-bundles-list-controls"
    >
      <BundlesPagination v-show="isFilteredResultPaginationVisible" />
      <EventsListViewModeSelector />
      <EventsListPageSizeSelector item-type="bundle" />
    </div> -->
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
      :class="['list-body', 'svv-top-bottom-space-remover']"
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
      :class="['list-body', 'svv-top-bottom-space-remover']"
      v-if="!isListLoading && bundlesListForRender.length > 0"
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
import { getItemDateTimeDataFormatted } from "@/services/utils";
import EventsListViewModeSelector from "@/components/common/EventsListViewModeSelector";
import EventsListPageSizeSelector from "@/components/common/EventsListPageSizeSelector";

// import ItemsListTypeSwitch from '@/components/common/ItemsListTypeSwitch';

export default {
  name: "BundlesListProductPage",
  components: {
    BundlesPagination,
    ListNotificationPanel,
    BundleListCardItem,
    EventsListViewModeSelector,
    EventsListPageSizeSelector,
    // ItemsListTypeSwitch,
  },
  data() {
    return {
      isListLoading: this.$store.state.bundles.singleBundle === null,
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
      singleBundle: "bundles/singleBundle",
      isLoading: "common/isLoading",
      widgetSettings: "common/widgetSettings",
      widgetsCurrentLanguage: "common/widgetsCurrentLanguage",
      widgetsDefaultLanguage: "common/widgetsDefaultLanguage",
      openItemsList: "common/openItemsList",
      isBundlePage: "events/isBundlePage",
    }),
    bundlesListForRender() {
      return [this.singleBundle];
    },
    isListEmpty() {
      return typeof this.singleBundle === null;
    },
    isFilteredResultPaginationVisible() {
      return !this.isListLoading && this.bundlesListForRender.length > 0;
    },
  },
  watch: {
    singleBundle(newVal) {
      console.log(newVal);
      if (
        newVal.events.length > 0 ||
        (newVal.events.length === 0 && this.isListEmpty)
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
  mounted() {
    setTimeout(() => {
      this.setGridCardsHeight();
      this.redrawVueMasonry();
    }, 300);
  },
  methods: {
    ...mapActions({
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
        this.widgetsCurrentLanguage || this.widgetsDefaultLanguage
      );
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
