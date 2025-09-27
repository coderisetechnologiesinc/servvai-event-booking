<template>
  <div
    :class="[
      'svv-event-card-item',
      'list-layout-item',
      isBundlePage || (pageSize && pageSize === 1)
        ? 'svv_bundle_dates_list svv-top-bottom-space-remover'
        : '',
    ]"
  >
    <!-- <div
      v-if="
        widgetSettings.widget_style_settings.show_events_list_separator_badge &&
        event.separator_label &&
        !isBundlePage &&
        pageSize !== 1
      "
      class="svv-events-group-separator-label"
    >
      {{ event.separator_label }}
    </div> -->
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
    </div>
    <!-- <div class="soc-sharing-buttons-inner-container">
   
        
    </div> -->
    <div
      class="svv-event-image-container"
      v-if="widgetSettings.widget_style_settings.show_event_images"
    >
      <!--      https://freedesignfile.com/upload/2018/03/Yoga-silhouette-with-sunset-background-vector-06.jpg-->
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
      :class="['svv-event-details-container']"
      :style="
        !widgetSettings.widget_style_settings.show_event_images
          ? { paddingLeft: '20px' }
          : {}
      "
    >
      <div class="svv-event-main-info-outer-container" v-if="!isBundlePage">
        <a
          v-if="widgetSettings.widget_style_settings.show_event_images"
          href="#"
          @click.prevent="() => onEventClick(event)"
          class="svv-event-image svv-bgr-image"
          :style="{
            'background-image': `url('${eventImage}')`,
          }"
        ></a>
        <div class="svv-event-main-info-container">
          <div class="svv-event-topic" v-show="!isBundlePage">
            <a href="#" @click.prevent="() => onEventClick(event)">{{
              event.topic
            }}</a>
            <div
              class="item-provider-label"
              v-if="
                event.provider &&
                widgetSettings.widget_style_settings.ew_show_event_type_badge
              "
              :class="{
                zoom:
                  event.provider === 'zoom' ||
                  (event.provider === 'offline' &&
                    event.custom_field_1_name === 'Link'),
                offline:
                  event.provider === 'offline' &&
                  event.custom_field_1_name !== 'Link',
              }"
            >
              <div class="label-value">
                {{ eventProviderLabel }}
              </div>
            </div>
          </div>
          <div class="svv-event-datetime" v-show="!isBundlePage">
            <span v-if="!isBundlePage">{{ eventDateFormatted }} </span>
            <div
              class="item-provider-label mobile"
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
          </div>

          <div class="svv-event-short-description">
            {{
              truncateString(
                event.agenda,
                widgetSettings.widget_style_settings
                  .ew_list_item_description_display_words_limit
              )
            }}
          </div>
        </div>
      </div>
      <!-- Bundle Events Dates -->
      <div
        class="svv-event-dates-list svv-top-bottom-space-remover"
        v-if="eventsList.length > 0"
      >
        <div
          v-for="(event, index) in eventsList"
          class="svv-event-datetime"
          :key="index"
        >
          <div class="svv-event-datetime svv-event-datetime-bundle">
            <div class="item-icon">
              <ClockIcon />
            </div>
            <span> {{ bundleEventTimeFormatted(event) }}</span>
            <!-- <div class="svv-event-metadata-container">
              <div class="type-list-item card-type-item-badge">
                <div class="item-value">
                  {{ bundleEventTimeFormatted(event) }}
      
                </div>
              </div>
              <div class="type-list-item card-type-item-badge">
                <div class="item-icon">
                  <DurationIcon />
                </div>
                <div class="item-value">{{ eventDuration }}</div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <!-- ### -->
      <div class="svv-event-metadata-container">
        <div class="type-list-item card-type-item-badge" v-if="!isBundlePage">
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
        <div class="type-list-item card-type-item-badge" v-if="!isBundlePage">
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
    <div class="svv-purchase-controls-container" v-if="!isBundlePage">
      <div class="svv-event-controls">
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
          v-if="!!event.product"
          href="#"
          class="svv-social-share-btn"
          @click.prevent="onOpenSharingControlsClick"
        >
          <ShareIcon />
        </a>
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
        <!--        <a-->
        <!--          href="#"-->
        <!--          class="svv-social-share-btn"-->
        <!--          @click.prevent="onOpenSharingControlsClick"-->
        <!--        >-->
        <!--          <ShareIcon />-->
        <!--        </a>-->
      </div>
      <div
        v-if="!event.is_live_shopping && !isBundlePage"
        class="svv-event-price"
      >
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
            widgetSettings.widget_style_settings.ew_show_quantity &&
            !isBundlePage
          "
          class="svv-event-quantity"
          >{{ eventQuantity }}</span
        > -->
      </div>
      <LiveShoppingEventStartCountdown
        v-if="event.is_live_shopping"
        :widget-settings="widgetSettings"
        :countdown-data="eventDateTime.lsCountdown"
      />
    </div>
  </div>
</template>

<script>
import SocialSharingButtons from "@/components/Event/SocialSharingButtons";
import LiveShoppingEventStartCountdown from "@/components/common/LiveShoppingEventStartCountdown";
import AddCartIcon from "@/assets/images/icons/add-cart.svg";
import ShareIcon from "@/assets/images/icons/share.svg";
import ClockIcon from "@/assets/images/icons/clock.svg";
import DurationIcon from "@/assets/images/icons/duration.svg";
import LanguageIcon from "@/assets/images/icons/lang.svg";
import LevelIcon from "@/assets/images/icons/level.svg";
import LocationIcon from "@/assets/images/icons/location.svg";
import MembersIcon from "@/assets/images/icons/members.svg";
import CloseIcon from "@/assets/images/icons/close.svg";
import SharingModal from "@/components/Event/SharingModal";
import has from "lodash.has";
import moment from "moment-timezone";
import {
  getDurationDecorated,
  truncateString,
  getCurrencySymbol,
  getItemDateTimeDataFormatted,
} from "@/services/utils";
import { event } from "jquery";

export default {
  name: "EventCardListLayout",
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
    isBundlePage: {
      type: Boolean,
      dafault: () => false,
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
    eventsList: {
      type: Array,
      default: () => [],
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
    eventImage: {
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
  // watch: {
  //   event(newVal) {
  //     console.log(newVal);
  //   },
  // },
  computed: {
    eventQuantity() {
      if (
        this.event.product.current_quantity &&
        this.event.product.current_quantity > 0
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
      let language = this.eventTypesList.filter(
        (t) => t && t.typeName === "language"
      );
      let isFilterAllowed = this.eventTypesList.filter(
        (x) => !this.displayedFilters.includes(language[0].typeName)
      );
      if (language.length > 0 && isFilterAllowed) {
        return language[0].value;
      } else {
        return "";
      }
    },
    getLocation() {
      let location = this.eventTypesList.filter(
        (t) => t && t.typeName === "location"
      );
      let isFilterAllowed = this.eventTypesList.filter(
        (x) => !this.displayedFilters.includes(location[0].typeName)
      );
      if (location.length > 0 && isFilterAllowed) {
        return location[0].value;
      } else {
        return "";
      }
    },
  },
  methods: {
    getDurationDecorated,
    truncateString,
    getCurrencySymbol,
    has,
    getEventDateTime(event) {
      return getItemDateTimeDataFormatted(
        event,
        this.widgetsCurrentLanguage || this.widgetsDefaultLanguage
      );
    },
    bundleEventDateFormatted(event) {
      switch (this.widgetsCurrentLanguage) {
        case "zh-cn":
        case "ja":
        case "ko":
          return event.dateFullAsia;
        default:
          return event.dateFull;
      }
    },
    bundleEventTimeFormatted(event) {
      let date = moment.tz(event.start_time, event.timezone);
      return `${date.format("ddd MMM Do YYYY,")} ${date.format(
        " h:mma"
      )} - ${date.add(event.duration, "m").format("h:mma")} 
      (${
        date.isDST()
          ? moment(event.start_time).tz(event.timezone)._z.abbrs[
              moment(event.start_time)
                .tz(event.timezone)
                ._z.offsets.indexOf(
                  Math.abs(
                    moment(event.start_time).tz(event.timezone).utcOffset()
                  )
                )
            ]
          : moment.tz(event.timezone).format("zz")
      }
        )`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/styles/scss/base/_baseScope.scss";
@import "./src/assets/styles/scss/components/_eventListCardItem.scss";
@import "./src/assets/styles/scss/components/_vTooltip.scss";
</style>
