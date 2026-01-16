<script setup>
import { onMounted, ref, watch, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useEventsStore } from '../stores/events'
import EventCard from './EventCard.vue'
import BrandingCard from './BrandingCard.vue'
import LinkCard from './LinkCard.vue'
import VideoCard from './VideoCard.vue'
import EventsPagination from './EventsPagination.vue'
// import WidgetEmbed from '@/components/WidgetEmbed.vue'
import FlagIcon from '@/assets/icons/flag.svg'
import Logo from '@/assets/icons/logo.svg'
import LinkIcon from '@/assets/icons/link.svg'
import VideoIcon from '@/assets/icons/video.svg'
import { useCommonStore } from '@/stores/common'
import { useFiltersStore } from '@/stores/filters'
const eventsStore = useEventsStore()
const commonStore = useCommonStore()
const filtersStore = useFiltersStore()
const { pagination } = storeToRefs(eventsStore)
const { settingsFetched } = storeToRefs(commonStore)
const { locations, filtersListFetched } = storeToRefs(filtersStore)
const eventsList = ref([])
const widgetSettings = computed(() => {
  try {
    return JSON.parse(commonStore.settings?.widget_style_settings || '{}')
  } catch {
    return {}
  }
})

const contentOrder = computed(() =>
  Array.isArray(widgetSettings.value.pw_content_order)
    ? widgetSettings.value.pw_content_order
    : ['events', 'links', 'videos'],
)

const links = computed(() =>
  Array.isArray(widgetSettings.value.pw_links) ? widgetSettings.value.pw_links : [],
)

const videos = computed(() =>
  Array.isArray(widgetSettings.value.pw_youtube_videos)
    ? widgetSettings.value.pw_youtube_videos
    : [],
)

onMounted(async () => {
  if (!eventsStore.meetingsListFetched) {
    await eventsStore.fetchEventsList({ page: 1 })
  }

  if (!filtersListFetched.value) {
    await filtersStore.fetchLocations()
  }

  eventsList.value = eventsStore.meetingsList.meetings || []
})

async function handlePageChange(page) {
  await eventsStore.fetchEventsList({ page })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watch(
  () => eventsStore.meetingsList.meetings,
  (newVal) => {
    eventsList.value = newVal || []
  },
)
</script>

<template>
  <div v-if="settingsFetched" class="section-container">
    <BrandingCard />

    <!-- ORDERED CONTENT -->
    <template v-for="block in contentOrder" :key="block">
      <!-- EVENTS -->
      <template v-if="block === 'events' && eventsList.length > 0">
        <div class="section-title-container">
          <FlagIcon class="icon" />
          <h3 class="section-title">Events</h3>
          <span class="events-counter">{{ eventsList.length }}</span>
        </div>

        <div class="events-list">
          <EventCard
            v-for="event in eventsList"
            :key="event.wgtItemId"
            :title="event.topic"
            :image="event.product?.image_url"
            :price="event.product_price"
            :date="event.start_time"
            :time="event.start_time"
            :timezone="event.timezone"
            :link="event.product.post_url"
            :locations="locations || []"
            :location="event.location_id"
          />
        </div>

        <EventsPagination
          v-if="pagination.totalPages > 1"
          :current-page="pagination.currentPage"
          :total-pages="pagination.totalPages"
          :total-records="pagination.totalRecords"
          :page-size="pagination.pageSize"
          :maxVisiblePages="2"
          @page-change="handlePageChange"
        />
      </template>

      <!-- LINKS -->
      <template v-else-if="block === 'links' && links.length > 0">
        <div class="section-title-container">
          <LinkIcon class="icon" />
          <h3 class="section-title">Links</h3>
          <span class="events-counter">{{ links.length }}</span>
        </div>

        <div v-if="links.length" class="events-list">
          <LinkCard v-for="link in links" :key="link.id" :title="link.text" :url="link.url" />
        </div>
      </template>

      <!-- VIDEOS -->
      <template v-else-if="block === 'videos' && videos.length > 0">
        <div class="section-title-container">
          <VideoIcon class="icon" />
          <h3 class="section-title">Videos</h3>
          <span class="events-counter">{{ videos.length }}</span>
        </div>

        <div v-if="videos.length" class="events-list">
          <VideoCard v-for="video in videos" :key="video.id" :youtube="video.url" />
        </div>
      </template>
    </template>

    <div class="logo-container">
      <Logo />
      <span>Created: ServvAI</span>
    </div>
  </div>
</template>

<style scoped>
.section-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
@media screen and (max-width: 480px) {
  .section-container {
    max-width: 100%;
    min-width: calc(100vw - 10px);
    width: calc(100vw - 10px);
  }
}

.section-title-container {
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
}
.events-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
}
.loading-state {
  text-align: center;
  padding: 40px;
  color: #818097;
}
.icon {
  width: 28px;
  height: 28px;
  stroke: var(--color-text-primary);
  color: var(--color-text-primary);
}
.icon :deep(path) {
  stroke: var(--color-text-primary);
}
.section-title {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  margin: 0;
  color: var(--color-text-primary);
}
.events-counter {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  color: var(--color-text-primary);

  background-color: #d7d3e5;

  width: 25px;
  height: 25px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  opacity: 0.35;
  filter: brightness(0.88);
  filter: grayscale(100%);
  margin-bottom: 10px;
  align-items: center;
}
.logo-container span {
  font-family: 'Inter';
  font-weight: 500;
  font-size: 20px;
  color: rgba(18, 22, 51, 1);
}
</style>
