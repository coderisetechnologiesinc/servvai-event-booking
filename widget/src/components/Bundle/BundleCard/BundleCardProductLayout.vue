<template>
  <div
    :class="['svv-bundle-card-item', 'list-layout-item', 'svv-bundle-details']"
    style="border-top: none !important; margin-top: 0; padding-top: 0"
  >
    <!-- <div class="soc-sharing-buttons-container" v-if="showSharingControls">
      <div class="soc-sharing-buttons-inner-container">
        <a
          @click.prevent="() => (showSharingControls = false)"
          class="close-share-controls"
          href="#"
        >
          <CloseIcon />
        </a>
        <div class="sharing-section-title">
          {{ $t('mainWidget.shareEventPanelTitle') }}
        </div>
        <div class="controls-container">
          <SocialSharingButtons
            :product-title="bundle.title"
            :product-url="productUrl"
            :product-image="bundleImage"
          />
        </div>
      </div>
    </div> -->
    <!-- <div
      class="svv-event-image-container"
      v-if="widgetSettings.widget_style_settings.show_event_images"
    >
      <a
        href="#"
        @click.prevent="() => onBundleClick(bundle)"
        class="svv-event-image svv-bgr-image"
        :style="{
          'background-image': `url('${bundleImage}')`,
        }"
      ></a>
    </div> -->
    <div class="svv-event-details-container">
      <!-- <div class="svv-event-main-info-outer-container"> -->
      <!-- <a
          href="#"
          @click.prevent="() => onBundleClick(bundle)"
          class="svv-event-image svv-bgr-image"
          :style="{
            'background-image': `url('${bundleImage}')`,
          }"
        ></a> -->
      <div class="svv-event-main-info-container">
        <!-- <div class="svv-event-datetime">
            <span>{{ bundleDateFormatted }} </span>
            <a
              href="#"
              class="svv-social-share-btn"
              @click.prevent="onOpenSharingControlsClick"
            >
              <ShareIcon />
            </a>
          </div> -->
        <!-- <div class="svv-event-topic">
            <a href="#" @click.prevent="() => onBundleClick(bundle)">{{
              bundle.title
            }}</a>
          </div> -->
        <!-- <div class="svv-event-short-description bundle-description">
            {{
              truncateString(
                bundle.description,
                widgetSettings.widget_style_settings
                  .ew_list_item_description_display_words_limit
              )
            }}
          </div> -->
        <div
          class="svv-event-bundle-events-list-container svv-top-bottom-space-remover"
        >
          <!-- <div
              v-if="
                widgetSettings.widget_style_settings
                  .ew_bundle_events_list_title_visible
              "
              class="bundle-events-list-title"
              @click="onShowBundleEventsListClick"
            >
              {{ $t('mainWidget.bundleEventsListTitle') }} -
              {{ bundle.events.length }}
              <ArrowDown class="svv-events-list-arrow-icon" />
            </div> -->
          <div class="bundle-events-list-wrapper" v-show="showEventsList">
            <!-- <div
                class="bundle-event-list-item"
                v-for="(event, index) in bundleEventsSorted"
                :key="index"
              >
              
                <span class="bundle-item-title">{{ event.topic }}</span>
                <span class="bundle-item-time">
                  {{ getBundleEventDateTime(event) }}
                </span>
                <div
                  class="item-provider-label small"
                  v-if="event.provider"
                  :class="{
                    zoom: event.provider === 'zoom',
                    offline: event.provider === 'offline',
                  }"
                >
                  <div class="label-value">
                    {{ getEventProviderLabel(event) }}
                  </div>
                </div>
              </div> -->
            <EventListCardItem
              v-for="(event, index) in [...bundleEventsSorted[0]]"
              :key="index"
              :list-view-mode="
                widgetSettings.widget_style_settings.ew_events_list_view
              "
              :event="event"
              :events-list="bundleEventsSorted"
              :more-details-label="
                widgetSettings.widget_style_settings.event_more_details_label
              "
              :open-details-item="openDetailsItem"
              :shop-currency="widgetSettings.currency"
              :event-price="getEventPrice(event)"
              :event-date-time="getEventDateTime(event)"
              :on-show-more-details-click="onShowMoreDetailsClick"
              :on-book-event-click="onBookEventClick"
              :separator-data="getEventSeparatorData(event)"
              :on-event-click="onEventClick"
            />
          </div>
        </div>
        <!-- <div class="svv-event-dates-list">
          <div
            v-for="(event, index) in bundleEventsSorted"
            class="svv-event-datetime"
            :key="index"
          >
            <div class="svv-event-datetime">
              <span>{{
                eventDateFormatted(getEventDateTime(event))
                  .split(',')
                  .slice(0, 2)
                  .join(', ')
              }}</span
              >{{ ', ' }}
            </div>
          </div>
        </div> -->
        <!-- </div> -->
      </div>
      <!-- <div class="svv-event-metadata-container">
        <div class="type-list-item card-type-item-badge">
          <div class="item-icon">
            <ClockIcon />
          </div>
          <div class="item-value">
            {{ bundleTimeFormatted
            }}<span v-if="!widgetSettings.hide_time_zone"
              >, {{ bundleDateTime.timeZone }}</span
            >
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import has from 'lodash.has';
import {
  truncateString,
  getCurrencySymbol,
  getItemDateTimeDataFormatted,
} from '@/services/utils';
import EventListCardItem from '@/components/Event/EventListCardItem';
import SocialSharingButtons from '@/components/Event/SocialSharingButtons';
import AddCartIcon from '@/assets/images/icons/add-cart.svg';
import ShareIcon from '@/assets/images/icons/share.svg';
import ClockIcon from '@/assets/images/icons/clock.svg';
import DurationIcon from '@/assets/images/icons/duration.svg';
import LanguageIcon from '@/assets/images/icons/lang.svg';
import LevelIcon from '@/assets/images/icons/level.svg';
import LocationIcon from '@/assets/images/icons/location.svg';
import MembersIcon from '@/assets/images/icons/members.svg';
import CloseIcon from '@/assets/images/icons/close.svg';
import ArrowDown from '@/assets/icons/down-svgrepo-com.svg';
import { mapGetters } from 'vuex';

export default {
  name: 'BundleCardProductLayout',
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
    EventListCardItem,
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
      default: '',
    },
    bundlePrice: {
      type: Number,
      default: 0,
    },
    openDetailsItem: {
      type: String,
      default: '',
    },
    shopCurrency: {
      type: String,
      default: '',
    },

    showSharingControls: {
      type: Boolean,
      default: false,
    },
    showEventsList: {
      type: Boolean,
      default: false,
    },
    productUrl: {
      type: String,
      default: '',
    },
    widgetSettings: {
      type: Object,
      default: () => {},
    },
    bundleDateTime: {
      type: Object,
      default: () => {},
    },
    bundleImage: {
      type: String,
      default: '',
    },
    bundleDateFormatted: {
      type: String,
      default: '',
    },
    bundleTimeFormatted: {
      type: String,
      default: '',
    },
    onOpenSharingControlsClick: {
      type: Function,
      default: () => {},
    },
    onShowBundleEventsListClick: {
      type: Function,
      default: () => {},
    },
    getCurrencySymbolText: {
      type: Function,
      default: () => {},
    },
    bundleEventsSorted: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    ...mapGetters({
      widgetsCurrentLanguage: 'common/widgetsCurrentLanguage',
      widgetsDefaultLanguage: 'common/widgetsDefaultLanguage',
    }),
  },
  mounted() {},
  watch: {
    // bundleEventsSorted(newVal) {
    //   console.log(newVal);
    // },
  },
  methods: {
    has,
    truncateString,
    getCurrencySymbol,
    getEventProviderLabel(event) {
      switch (event.provider) {
        case 'zoom':
          if (event.is_appointment)
            return this.$t('mainWidget.virtualAppointmentLabel');
          return this.$t('mainWidget.virtualEventLabel');
        case 'offline':
          return this.$t('mainWidget.inPersonEventLabel');
        default:
          return '';
      }
    },
    getEventSeparatorData(event) {},
    getEventPrice(event) {
      return event.product_price || 0;
    },

    getEventDateTime(event) {
      return getItemDateTimeDataFormatted(
        event,
        this.widgetsCurrentLanguage || this.widgetsDefaultLanguage
      );
    },
    getBundleEventDateTime(event) {
      const eventDateTimeData = getItemDateTimeDataFormatted(
        event,
        this.widgetsCurrentLanguage || this.widgetsDefaultLanguage
      );

      let dateFormatted = '';
      let timeFormatted = '';

      switch (this.widgetsCurrentLanguage) {
        case 'zh-cn':
        case 'ja':
        case 'ko':
          dateFormatted = eventDateTimeData.dateFullAsia;
          break;
        default:
          dateFormatted = eventDateTimeData.dateFull;
      }
      if (!this.widgetSettings.widget_style_settings.time_format_24_hours) {
        timeFormatted = `${eventDateTimeData.timeSimple}${eventDateTimeData.timeDayPart}`;
      } else {
        timeFormatted = eventDateTimeData.timeSimple24;
      }
      return `${dateFormatted} | ${timeFormatted} ${
        !this.widgetSettings.hide_time_zone ? eventDateTimeData.timeZone : ''
      }`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './src/assets/styles/scss/base/_baseScope.scss';
@import './src/assets/styles/scss/components/_eventListCardItem.scss';
@import './src/assets/styles/scss/components/_vTooltip.scss';
</style>
