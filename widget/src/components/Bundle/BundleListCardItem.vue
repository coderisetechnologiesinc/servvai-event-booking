<template>
  <fragment>
    <BundleCardListLayout
      v-if="listViewMode === 'list' && !isBundlePage"
      :bundle="bundle"
      :widget-settings="widgetSettings"
      :show-sharing-controls="showSharingControls"
      :product-url="productUrl"
      :bundle-image="getBundleImage(bundle)"
      :on-bundle-click="onBundleClick"
      :bundle-date-formatted="bundleDateFormatted"
      :on-open-sharing-controls-click="onOpenSharingControlsClick"
      :show-events-list="showEventsList"
      :on-show-bundle-events-list-click="
        () => {
          this.showEventsList = !this.showEventsList;
        }
      "
      :bundle-events-sorted="getBundleEventsSorted(bundle.events)"
      :bundle-time-formatted="bundleTimeFormatted"
      :bundle-date-time="bundleDateTime"
      :on-book-bundle-click="onBookBundleClick"
      :bundle-price="bundlePrice"
      :get-currency-symbol-text="getCurrencySymbolText"
      :shop-currency="shopCurrency"
    />

    <BundleCardProductLayout
      v-if="isBundlePage"
      :bundle="bundle"
      :widget-settings="widgetSettings"
      :show-sharing-controls="showSharingControls"
      :product-url="productUrl"
      :bundle-image="getBundleImage(bundle)"
      :on-bundle-click="onBundleClick"
      :bundle-date-formatted="bundleDateFormatted"
      :on-open-sharing-controls-click="onOpenSharingControlsClick"
      :show-events-list="showEventsList"
      :on-show-bundle-events-list-click="
        () => {
          this.showEventsList = !this.showEventsList;
        }
      "
      :bundle-events-sorted="getBundleEventsSorted(bundle.events)"
      :bundle-time-formatted="bundleTimeFormatted"
      :bundle-date-time="bundleDateTime"
      :on-book-bundle-click="onBookBundleClick"
      :bundle-price="bundlePrice"
      :get-currency-symbol-text="getCurrencySymbolText"
      :shop-currency="shopCurrency"
    />

    <BundleCardGridLayout
      v-if="listViewMode === 'grid' && !isBundlePage"
      :bundle="bundle"
      :widget-settings="widgetSettings"
      :show-sharing-controls="showSharingControls"
      :product-url="productUrl"
      :bundle-image="getBundleImage(bundle)"
      :on-bundle-click="onBundleClick"
      :bundle-date-formatted="bundleDateFormatted"
      :on-open-sharing-controls-click="onOpenSharingControlsClick"
      :show-events-list="showEventsList"
      :on-show-bundle-events-list-click="
        () => {
          this.showEventsList = !this.showEventsList;
        }
      "
      :bundle-events-sorted="getBundleEventsSorted(bundle.events)"
      :bundle-time-formatted="bundleTimeFormatted"
      :bundle-date-time="bundleDateTime"
      :on-book-bundle-click="onBookBundleClick"
      :bundle-price="bundlePrice"
      :get-currency-symbol-text="getCurrencySymbolText"
      :shop-currency="shopCurrency"
    />
  </fragment>
  <!--  <div :class="['svv-bundle-card-item', 'list-layout-item']">-->
  <!--    &lt;!&ndash;    <div&ndash;&gt;-->
  <!--    &lt;!&ndash;        v-if="&ndash;&gt;-->
  <!--    &lt;!&ndash;        widgetSettings.widget_style_settings.show_events_list_separator_badge &&&ndash;&gt;-->
  <!--    &lt;!&ndash;        event.separator_label&ndash;&gt;-->
  <!--    &lt;!&ndash;      "&ndash;&gt;-->
  <!--    &lt;!&ndash;        class="svv-events-group-separator-label"&ndash;&gt;-->
  <!--    &lt;!&ndash;    >&ndash;&gt;-->
  <!--    &lt;!&ndash;      {{ event.separator_label }}&ndash;&gt;-->
  <!--    &lt;!&ndash;    </div>&ndash;&gt;-->
  <!--    <div class="soc-sharing-buttons-container" v-if="showSharingControls">-->
  <!--      <div class="soc-sharing-buttons-inner-container">-->
  <!--        <a-->
  <!--          @click.prevent="() => (showSharingControls = false)"-->
  <!--          class="close-share-controls"-->
  <!--          href="#"-->
  <!--        >-->
  <!--          <CloseIcon />-->
  <!--        </a>-->
  <!--        <div class="sharing-section-title">-->
  <!--          {{ $t('mainWidget.shareEventPanelTitle') }}-->
  <!--        </div>-->
  <!--        <div class="controls-container">-->
  <!--          <SocialSharingButtons-->
  <!--            :product-title="bundle.title"-->
  <!--            :product-url="productUrl"-->
  <!--            :product-image="''"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div-->
  <!--      class="svv-event-image-container"-->
  <!--      v-if="widgetSettings.widget_style_settings.show_event_images"-->
  <!--    >-->
  <!--      <a-->
  <!--        href="#"-->
  <!--        @click.prevent="() => onBundleClick(bundle)"-->
  <!--        class="svv-event-image svv-bgr-image"-->
  <!--        :style="{-->
  <!--          'background-image': `url('${getBundleImage(bundle)}')`,-->
  <!--        }"-->
  <!--      ></a>-->
  <!--    </div>-->
  <!--    <div class="svv-event-details-container">-->
  <!--      <div class="svv-event-main-info-outer-container">-->
  <!--        <a-->
  <!--          href="#"-->
  <!--          @click.prevent="() => onBundleClick(bundle)"-->
  <!--          class="svv-event-image svv-bgr-image"-->
  <!--          :style="{-->
  <!--            'background-image': `url('${getBundleImage(bundle)}')`,-->
  <!--          }"-->
  <!--        ></a>-->
  <!--        <div class="svv-event-main-info-container">-->
  <!--          <div class="svv-event-datetime">-->
  <!--            <span>{{ bundleDateFormatted }} </span>-->
  <!--            <a-->
  <!--              href="#"-->
  <!--              class="svv-social-share-btn"-->
  <!--              @click.prevent="onOpenSharingControlsClick"-->
  <!--            >-->
  <!--              <ShareIcon />-->
  <!--            </a>-->
  <!--          </div>-->
  <!--          <div class="svv-event-topic">-->
  <!--            <a href="#" @click.prevent="() => onBundleClick(bundle)">{{-->
  <!--              bundle.title-->
  <!--            }}</a>-->
  <!--          </div>-->
  <!--          <div class="svv-event-short-description bundle-description">-->
  <!--            {{ truncateString(bundle.description, 30) }}-->
  <!--          </div>-->
  <!--          <div-->
  <!--            class="svv-event-bundle-events-list-container"-->
  <!--            v-if="-->
  <!--              widgetSettings.widget_style_settings.ew_bundle_events_list_visible-->
  <!--            "-->
  <!--          >-->
  <!--            <div-->
  <!--              v-if="-->
  <!--                widgetSettings.widget_style_settings-->
  <!--                  .ew_bundle_events_list_title_visible-->
  <!--              "-->
  <!--              class="bundle-events-list-title"-->
  <!--              @click="-->
  <!--                () => {-->
  <!--                  this.showEventsList = !this.showEventsList;-->
  <!--                }-->
  <!--              "-->
  <!--            >-->
  <!--              {{ $t('mainWidget.bundleEventsListTitle') }} - -->
  <!--              {{ bundle.events.length }}-->
  <!--              <ArrowDown class="svv-events-list-arrow-icon" />-->
  <!--            </div>-->
  <!--            <div class="bundle-events-list-wrapper" v-show="showEventsList">-->
  <!--              <div-->
  <!--                class="bundle-event-list-item"-->
  <!--                v-for="(event, index) in getBundleEventsSorted(bundle.events)"-->
  <!--                :key="index"-->
  <!--              >-->
  <!--                <span class="bundle-item-title">{{ event.topic }}</span>-->
  <!--                <span class="bundle-item-time">-->
  <!--                  {{ getBundleEventDateTime(event) }}-->
  <!--                </span>-->
  <!--                <div-->
  <!--                  class="item-provider-label small"-->
  <!--                  v-if="event.provider"-->
  <!--                  :class="{-->
  <!--                    zoom: event.provider === 'zoom',-->
  <!--                    offline: event.provider === 'offline',-->
  <!--                  }"-->
  <!--                >-->
  <!--                  <div class="label-value">-->
  <!--                    {{ getEventProviderLabel(event) }}-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="svv-event-metadata-container">-->
  <!--        <div class="type-list-item card-type-item-badge">-->
  <!--          <div class="item-icon">-->
  <!--            <ClockIcon />-->
  <!--          </div>-->
  <!--          <div class="item-value">-->
  <!--            {{ bundleTimeFormatted-->
  <!--            }}<span v-if="!widgetSettings.hide_time_zone"-->
  <!--              >, {{ bundleDateTime.timeZone }}</span-->
  <!--            >-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="svv-purchase-controls-container">-->
  <!--      <div class="svv-event-controls">-->
  <!--        <a-->
  <!--          href="#"-->
  <!--          class="svv-add-to-cart-btn"-->
  <!--          @click="e => onBookBundleClick(e, bundle)"-->
  <!--        >-->
  <!--          &lt;!&ndash;          <AddCartIcon />&ndash;&gt;{{-->
  <!--            $t('mainWidget.bundleAddToCartButtonLabel')-->
  <!--          }}-->
  <!--        </a>-->
  <!--        &lt;!&ndash;        <a&ndash;&gt;-->
  <!--        &lt;!&ndash;          href="#"&ndash;&gt;-->
  <!--        &lt;!&ndash;          class="svv-social-share-btn"&ndash;&gt;-->
  <!--        &lt;!&ndash;          @click.prevent="onOpenSharingControlsClick"&ndash;&gt;-->
  <!--        &lt;!&ndash;        >&ndash;&gt;-->
  <!--        &lt;!&ndash;          <ShareIcon />&ndash;&gt;-->
  <!--        &lt;!&ndash;        </a>&ndash;&gt;-->
  <!--      </div>-->
  <!--      <div class="svv-event-price">-->
  <!--        <span v-if="bundlePrice">-->
  <!--          <span v-html="getCurrencySymbolText(shopCurrency)"></span>-->
  <!--          <span>{{ bundlePrice }}</span>-->
  <!--        </span>-->
  <!--        <span v-else>{{ $t('globalWidgetsTranslations.priceFreeLabel') }}</span>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import has from "lodash.has";
import sortBy from "lodash.sortby";
import {
  truncateString,
  getCurrencySymbol,
  getItemDateTimeDataFormatted,
  getDateFormat,
} from "@/services/utils";

import SocialSharingButtons from "@/components/Event/SocialSharingButtons";
import AddCartIcon from "@/assets/images/icons/add-cart.svg";
import ShareIcon from "@/assets/images/icons/share.svg";
import ClockIcon from "@/assets/images/icons/clock.svg";
import DurationIcon from "@/assets/images/icons/duration.svg";
import LanguageIcon from "@/assets/images/icons/lang.svg";
import LevelIcon from "@/assets/images/icons/level.svg";
import LocationIcon from "@/assets/images/icons/location.svg";
import MembersIcon from "@/assets/images/icons/members.svg";
import CloseIcon from "@/assets/images/icons/close.svg";
import ArrowDown from "@/assets/icons/down-svgrepo-com.svg";

import BundleCardListLayout from "@/components/Bundle/BundleCard/BundleCardListLayout";
import BundleCardGridLayout from "@/components/Bundle/BundleCard/BundleCardGridLayout";
import BundleCardProductLayout from "@/components/Bundle/BundleCard/BundleCardProductLayout";
import { Fragment } from "vue-frag";

export default {
  name: "BundleListCardItem",
  components: {
    ShareIcon,
    AddCartIcon,
    ClockIcon,
    DurationIcon,
    LanguageIcon,
    LevelIcon,
    LocationIcon,
    MembersIcon,
    CloseIcon,
    SocialSharingButtons,
    ArrowDown,
    BundleCardListLayout,
    BundleCardGridLayout,
    BundleCardProductLayout,
    Fragment,
  },
  props: {
    bundle: {
      type: Object,
      default: () => [],
    },
    onShowMoreDetailsClick: {
      type: Function,
      default: () => {},
    },
    onBookBundleClick: {
      type: Function,
      default: () => {},
    },
    onBundleClick: {
      type: Function,
      default: () => {},
    },
    moreDetailsLabel: {
      type: String,
      default: "",
    },
    bundlePrice: {
      type: Number,
      default: 0,
    },
    openDetailsItem: {
      type: String,
      default: "",
    },
    shopCurrency: {
      type: String,
      default: "",
    },

    listViewMode: {
      type: String,
      default: "list",
    },
  },
  data() {
    return {
      openDetails:
        this.$store.state.common.widgetSettings.widget_style_settings
          .show_event_details_open,
      showSharingControls: false,
      productUrl: null,
      showEventsList:
        this.$store.state.common.widgetSettings.widget_style_settings
          .ew_bundle_events_list_open,
    };
  },
  computed: {
    ...mapGetters({
      allRequestParams: "search/allRequestParams",
      widgetSettings: "common/widgetSettings",
      allEventTypes: "types/eventTypes",
      widgetsCurrentLanguage: "common/widgetsCurrentLanguage",
      widgetsDefaultLanguage: "common/widgetsDefaultLanguage",
      isBundlePage: "events/isBundlePage",
    }),

    bundleDateTime() {
      return getItemDateTimeDataFormatted(
        this.bundle.events ? this.bundle.events[0] : null,
        this.widgetsCurrentLanguage || this.widgetsDefaultLanguage,
        getDateFormat(this.widgetSettings.date_format)
      );
    },

    bundleDateFormatted() {
      switch (this.widgetsCurrentLanguage) {
        case "zh-cn":
        case "ja":
        case "ko":
          return this.bundleDateTime.dateFullAsia;
        default:
          return this.bundleDateTime.dateFull;
      }
    },
    bundleTimeFormatted() {
      if (!this.widgetSettings.widget_style_settings.time_format_24_hours)
        return `${this.bundleDateTime.timeSimple}${this.bundleDateTime.timeDayPart}`;
      return this.bundleDateTime.timeSimple24;
    },
  },
  watch: {
    openDetailsItem(newVal) {
      if (
        !this.$store.state.common.widgetSettings.widget_style_settings
          .show_event_details_open
      ) {
        this.openDetails = newVal === this.event.wgtItemId;
      }
    },
  },
  methods: {
    ...mapActions({
      fetchProductDetails: "events/fetchProductDetails",
    }),
    has,
    truncateString,
    getCurrencySymbol,

    getBundleEventsSorted(iteratedBundle) {
      return iteratedBundle || [];
    },
    getBundleImage(currentBundle) {
      return currentBundle && currentBundle.image_src
        ? currentBundle.image_src
        : "https://servv-images.s3.us-east-2.amazonaws.com/placeholder.png";
    },
    getCurrencySymbolText(rawCurrency) {
      if (this.widgetSettings.widget_style_settings.currency_format === "sign")
        return getCurrencySymbol(rawCurrency);
      return rawCurrency;
    },
    onShowMoreDetails(e) {
      if (this.widgetSettings.widget_style_settings.show_event_details_open) {
        this.openDetails = !this.openDetails;
      }
      this.onShowMoreDetailsClick(e, this.event);
    },

    async onOpenSharingControlsClick() {
      if (this.showSharingControls) {
        this.showSharingControls = false;
        return;
      }

      if (!this.productUrl) {
        const productHandle = await this.fetchProductDetails(
          this.bundle.product_id
        );
        this.productUrl = `${window.location.origin}/products/${productHandle}?variant=${this.bundle.variant_id}`;
      }

      this.showSharingControls = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/scss/base/_baseScope.scss";
@import "./src/assets/styles/scss/components/_eventListCardItem.scss";
@import "./src/assets/styles/scss/components/_vTooltip.scss";
</style>
