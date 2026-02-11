<template>
  <div class="event-card" @click="onEventClick">
    <div
      class="event-image-wrapper"
      :style="{
        '--bg': `url(${image ? image : placeholderImage})`,
      }"
    >
      <img
        :src="image ? image : placeholderImage"
        alt="Event image"
        class="event-image"
        :class="{ 'is-placeholder': !image }"
      />
    </div>

    <div class="event-info-container">
      <h3 class="event-title">{{ title }}</h3>
      <div class="event-description">
        <p class="event-date">
          <CalendarIcon class="icon" />
          {{ formattedDate }}
        </p>

        <p class="description-separator">·</p>

        <p class="event-time">
          <TimeIcon class="icon" />
          {{ formattedTime }}
        </p>

        <p class="description-separator" v-if="locationName">·</p>

        <p class="event-location" v-if="locationName">
          <MapIcon class="icon" />
          <span class="location-text">{{ locationName }}</span>
        </p>
      </div>
      <!-- <p class="event-price">
        <span v-if="price > 0"> {{ price }} {{ currency }} </span>
        <span v-else>Free</span>
      </p> -->
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import moment from "moment";
import { storeToRefs } from "pinia";
import CalendarIcon from "@/assets/icons/calendar.svg";
import TimeIcon from "@/assets/icons/time.svg";
import MapIcon from "@/assets/icons/map.svg";
import { useCommonStore } from "@/stores/common";
const baseUrl = window.servvPlatformAjax?.base_url || "";
const placeholderImage = `${baseUrl}images/placeholder.png`;
const store = useCommonStore();
const { settings } = storeToRefs(store);
const props = defineProps({
  title: String,
  image: [String, Boolean, null],
  price: Number,
  date: String,
  time: String,
  locations: Array,
  location: Number,
  currency: {
    type: String,
    default: "CAD",
  },
  link: String,
});

// watch(
//   () => [props.location, props.locations],
//   ([newLocation, newLocations]) => {
//     console.log('props changed:', newLocation, newLocations)
//   },
//   { immediate: true },
// )

const formattedDate = computed(() =>
  props.date ? moment(props.date).format("MMM DD, YYYY") : "",
);

const formattedTime = computed(() =>
  props.time
    ? moment(props.time).format(
        settings.value?.settings?.time_format_24_hours ? "HH:mm" : "hh:mm a",
      )
    : "",
);

const onEventClick = () => {
  if (props.link) window.open(props.link, "_blank");
};
const locationName = computed(() => {
  if (!props.locations?.length || props.location == null) return "";

  const locId = Number(props.location);

  return props.locations.find((loc) => Number(loc.id) === locId)?.name || "";
});
</script>

<style scoped>
.event-card {
  /* border: 1px solid #ddd; */
  border-radius: 24px;
  padding: 8px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  box-shadow: 0px 24px 48px -12px #0a0d122e;
  /* width: calc(464px); */
}
/* 
.event-image {
  width: 464px;
  aspect-ratio: 16/11;
  object-fit: contain;
  border-radius: 20px;
}
@media screen and (max-width: 480px) {
  .event-image {
    width: 100%;
    min-width: calc(100vw - 20px);
  }
} */
.event-image-wrapper {
  position: relative;

  width: 100%;
  max-width: 464px;
  /* aspect-ratio: 16/11; */

  border-radius: 20px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* .event-image-wrapper::before {
  content: "";
  position: absolute;
  inset: 0;

  background-image: var(--bg);
  background-size: cover;
  background-position: center;

  filter: blur(50px);
  transform: scale(1.5);
  opacity: 0.75;
} */

.event-image {
  position: relative;
  /* z-index: ; */

  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 480px) {
  .event-image-wrapper {
    max-width: 100%;
  }

  .event-image {
    border-radius: 16px;
  }
}
.event-image.is-placeholder {
  object-fit: cover;
}
.event-info-container {
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  width: calc(100% - 40px);
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.99);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  box-sizing: border-box;
}

.event-title {
  font-family: "Inter";
  font-size: 24px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0%;
  color: var(--color-text-primary);
  margin: 0;
  margin-bottom: 5px;
  padding-left: 5px;
}

.event-description {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: rgba(18, 22, 51, 0.5);
  padding-left: 5px;
  white-space: nowrap;
  flex-wrap: nowrap;
  overflow: hidden;
}

/* @media screen and (max-width: 480px) {
  .event-description {
    font-size: 14px;
  }
} */

.event-price {
  font-weight: 600;
  margin-top: 4px;
}
.event-date,
.event-time,
.event-location,
.description-separator {
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 8px;
  white-space: nowrap;
  align-items: center;
}
.event-location {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.location-text {
  display: inline-block;
  line-height: 1;
}

.icon {
  height: 20px;
  width: 20px;
}
</style>
