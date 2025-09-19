<template>
  <div :class="['svv-event-card-item', 'grid-layout-item']" v-masonry-tile>
    <div class="soc-sharing-buttons-container" v-if="showSharingControls">
      <SharingModal
        :visible="showSharingControls"
        :image="eventImage"
        :date="eventDateFormatted"
        :time="eventTimeFormatted + ' ' + eventDateTime.timeZone"
        :title="event.topic"
        :description="
          truncateString(
            event.agenda,
            widgetSettings.widget_style_settings
              .ew_card_description_display_words_limit
          )
        "
        :link="productUrl"
        :location="getLocation"
        :language="getLanguage"
        :onClose="onOpenSharingControlsClick"
      />
      <!-- <div class="soc-sharing-buttons-inner-container">
        <a
          @click.prevent="() => (showSharingControls = false)"
          class="close-share-controls"
          href="#"
        >
          <CloseIcon />
        </a>
        <div class="sharing-section-title">
          {{ $t("mainWidget.shareEventPanelTitle") }}
        </div>
        <div class="controls-container">
          <SocialSharingButtons
            :product-title="event.topic"
            :product-url="productUrl"
            :product-image="eventImage"
          />
        </div>
      </div> -->
    </div>
    <div class="card-top-section-container">
      <div
        class="svv-event-image-container"
        v-if="widgetSettings.widget_style_settings.show_event_images"
      >
        <div class="provider-social-container">
          <div
            class="item-provider-label"
            v-if="
              event.provider &&
                widgetSettings.widget_style_settings.ew_show_event_type_badge
            "
            :class="{
              zoom: event.provider === 'zoom',
              offline: event.provider === 'offline',
            }"
          >
            <div class="label-value">
              {{ eventProviderLabel }}
            </div>
          </div>
          <a
            v-if="
              !!event.product &&
                widgetSettings.widget_style_settings.ew_show_share_button
            "
            href="#"
            class="svv-social-share-btn"
            @click.prevent="onOpenSharingControlsClick"
          >
            <ShareIcon />
          </a>
        </div>
        <!-- <div class="svv-event-datetime-top">
          <div class="datetime-top-month">
            {{ eventDateTime.month }}
          </div>
          <div class="datetime-top-date">
            {{ eventDateTime.date }}
          </div>
        </div> -->
        <a
          href="#"
          @click.prevent="() => onEventClick(event)"
          :class="[
            widgetSettings.widget_style_settings.ew_image_aspect
              ? 'svv-event-image-square'
              : 'svv-event-image',
            'svv-bgr-image',
          ]"
          :style="{
            'background-image': `url('${eventImage}')`,
          }"
        ></a>
      </div>
      <div
        class="svv-event-details-container"
        :style="
          !widgetSettings.widget_style_settings.show_event_images
            ? { paddingLeft: '5px', paddingTop: '15px' }
            : {}
        "
      >
        <div class="svv-event-main-info-outer-container">
          <div class="svv-event-main-info-container">
            <div class="svv-event-topic">
              <a href="#" @click.prevent="() => onEventClick(event)">{{
                event.topic
              }}</a>
            </div>
            <div class="full-event-date-time">{{ eventDateFormatted }}</div>

            <div class="svv-event-short-description">
              {{
                truncateString(
                  event.agenda,
                  widgetSettings.widget_style_settings
                    .ew_card_description_display_words_limit
                )
              }}
            </div>
          </div>
        </div>
        <div class="svv-event-metadata-container">
          <div class="type-list-item card-type-item-badge">
            <div class="item-icon">
              <ClockIcon />
            </div>
            <div class="item-value">
              {{ eventTimeFormatted }}
              <span v-if="!widgetSettings.hide_time_zone"
                >, {{ eventDateTime.timeZone }}</span
              >
            </div>
          </div>
          <div class="type-list-item card-type-item-badge">
            <div class="item-icon">
              <DurationIcon />
            </div>
            <div class="item-value">{{ eventDuration }}</div>
          </div>
          <div
            v-for="(item, index) of eventTypesList.filter(
              (x) => !displayedFilters.includes(x.typeName)
            )"
            :key="index"
            class="type-list-item card-type-item-badge"
            :class="{ 'active-badge': has(allRequestParams, item.name) }"
          >
            <div
              v-if="item.multipleValue"
              class="card-type-item-badge-inner-wrapper"
            >
              <div class="item-icon">
                <LanguageIcon v-if="item.typeName === 'language'" />
                <LevelIcon v-if="item.typeName === 'category'" />
                <LocationIcon v-if="item.typeName === 'location'" />
                <MembersIcon v-if="item.typeName === 'member'" />
              </div>
              <div class="item-value">
                <div
                  v-for="(unit, unitIndex) of item.multipleValue"
                  :key="unitIndex"
                  class="item-value-unit"
                  v-tooltip="{
                    content: getDetailsTooltipContent(unit),
                    html: true,
                  }"
                >
                  {{ unit.name
                  }}{{ unitIndex < item.multipleValue.length - 1 ? "," : "" }}
                </div>
              </div>
            </div>

            <div
              v-else
              class="card-type-item-badge-inner-wrapper"
              v-tooltip="{
                content: getDetailsTooltipContent(item),
                html: true,
              }"
            >
              <div class="item-icon">
                <LanguageIcon v-if="item.typeName === 'language'" />
                <LevelIcon v-if="item.typeName === 'category'" />
                <LocationIcon v-if="item.typeName === 'location'" />
                <MembersIcon v-if="item.typeName === 'member'" />
              </div>
              <div class="item-value">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="svv-grid-layout-separator">
      <div v-if="!event.is_live_shopping" class="svv-event-price">
        <!-- <span
          v-if="
            eventPrice &&
            (event.product.current_quantity === null ||
              (event.product.current_quantity &&
                event.product.current_quantity > 0))
          "
        >
          <span v-html="getCurrencySymbolText(shopCurrency)"></span>
          <span>{{ eventPrice }}</span>
        </span>
        <span v-else
          ><span
            v-if="
              event.product.current_quantity === null ||
              (event.product.current_quantity &&
                event.product.current_quantity > 0)
            "
            >{{ $t("globalWidgetsTranslations.priceFreeLabel") }}</span
          ></span
        >
        <span
          v-if="
            widgetSettings &&
            widgetSettings.widget_style_settings &&
            widgetSettings.widget_style_settings.ew_show_quantity
          "
          class="svv-event-quantity"
          >{{ eventQuantity }}</span
        > -->
      </div>

      <LiveShoppingEventStartCountdown
        v-if="event.is_live_shopping"
        :countdown-data="eventDateTime.lsCountdown"
      />

      <div class="svv-event-controls">
        <a
          v-if="true"
          href="#"
          class="svv-add-to-cart-btn"
          @click="
            (e) =>
              widgetSettings.widget_style_settings
                .ew_redirect_to_product_page ||
              (widgetSettings.free_events_skip_checkout && eventPrice === 0)
                ? onEventClick(event)
                : onBookEventClick(e, event)
          "
        >
          {{
            !event.is_live_shopping
              ? $t("mainWidget.eventAddToCartButtonLabel")
              : $t("mainWidget.liveShoppingJoinButtonLabel")
          }}
        </a>
        <!-- <a
          v-if="
            event.product.current_quantity === null ||
            (event.product.current_quantity &&
              event.product.current_quantity > 0)
          "
          href="#"
          class="svv-add-to-cart-btn"
          @click="
            (e) =>
              widgetSettings.widget_style_settings
                .ew_redirect_to_product_page ||
              (widgetSettings.free_events_skip_checkout && eventPrice === 0)
                ? onEventClick(event)
                : onBookEventClick(e, event)
          "
        >

          {{
            !event.is_live_shopping
              ? $t("mainWidget.eventAddToCartButtonLabel")
              : $t("mainWidget.liveShoppingJoinButtonLabel")
          }}
        </a> -->
        <a
          v-else
          href="#"
          class="svv-add-to-cart-btn-sold-out"
          @click.prevent="() => onEventClick(event)"
        >
          {{
            widgetSettings.widget_style_settings.enable_waiting_list
              ? $t("onProductWidget.registerInWaitingList")
              : $t("onProductWidget.eventSoldOut")
          }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
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
import LiveShoppingEventStartCountdown from "@/components/common/LiveShoppingEventStartCountdown";
import SharingModal from "@/components/Event/SharingModal";
import has from "lodash.has";

import {
  getDurationDecorated,
  truncateString,
  getCurrencySymbol,
} from "@/services/utils";

export default {
  name: "EventCardGridLayout",
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
    LiveShoppingEventStartCountdown,
    SharingModal,
  },
  props: {
    event: {
      type: Object,
      default: () => [],
    },
    onShowMoreDetailsClick: {
      type: Function,
      default: () => {},
    },
    onBookEventClick: {
      type: Function,
      default: () => {},
    },
    onEventClick: {
      type: Function,
      default: () => {},
    },
    eventDateTime: {
      type: Object,
      default: () => {},
    },
    moreDetailsLabel: {
      type: String,
      default: "",
    },
    eventPrice: {
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
    widgetSettings: {
      type: Object,
      default: () => {},
    },
    showSharingControls: {
      type: Boolean,
      default: false,
    },
    productUrl: {
      type: String,
      default: "",
    },
    eventImage: {
      type: String,
      default: "",
    },
    eventDateFormatted: {
      type: String,
      default: "",
    },
    eventProviderLabel: {
      type: String,
      default: "",
    },
    onOpenSharingControlsClick: {
      type: Function,
      default: () => {},
    },
    eventTimeFormatted: {
      type: String,
      default: "",
    },
    eventDuration: {
      type: String,
      default: "",
    },
    eventTypesList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    allRequestParams: {
      type: Object,
      default: () => {},
    },
    getDetailsTooltipContent: {
      type: Function,
      default: () => {},
    },
    getCurrencySymbolText: {
      type: Function,
      default: () => {},
    },
    displayedFilters: {
      type: Array,
      default: () => [],
    },
    pageSize: {
      type: Number,
      default: () => 10,
    },
  },
  methods: {
    getDurationDecorated,
    truncateString,
    getCurrencySymbol,
    has,
  },
  mounted() {},
  computed: {
    eventQuantity() {
      if (
        this.event.product.current_quantity &&
        this.event.product.current_quantity >= 0
      )
        return this.event.product.current_quantity
          ? `${this.event.product.current_quantity}` +
              " " +
              this.$t("mainWidget.availableQuantitySuffix")
          : "";
      else if (
        !this.event.product.current_quantity &&
        this.event.product.current_quantity === 0
      )
        return "";
      else return "";
    },
    getLanguage() {
      const filters = this.eventTypesList;
      let language = filters.filter((t) => t && t.typeName === "language");
      let isFilterAllowed = null;
      if (language.length > 0) {
        isFilterAllowed = filters.filter(
          (x) => !this.displayedFilters.includes(language[0].typeName)
        );
      }
      if (language.length > 0 && isFilterAllowed) {
        return language[0].value;
      } else {
        return "";
      }
    },
    getLocation() {
      const filters = this.eventTypesList;

      let location = filters.filter((t) => t && t.typeName === "location");

      let isFilterAllowed = null;
      if (location.length > 0) {
        isFilterAllowed = filters.filter(
          (x) => !this.displayedFilters.includes(location[0].typeName)
        );
      }

      if (location.length > 0 && isFilterAllowed) {
        return location[0].value;
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/scss/base/_baseScope.scss";
@import "./src/assets/styles/scss/components/_eventListCardItem.scss";
@import "./src/assets/styles/scss/components/_vTooltip.scss";
</style>
