<script setup>
import { onMounted } from 'vue'
import { useCommonStore } from '@/stores/common'
// import { useEventsStore } from './stores/events'
import EventCard from './components/EventList.vue'
const common = useCommonStore()
// const events = useEventsStore()
onMounted(async () => {
  await common.fetchWidgetSettings()
  // await events.fetchEventsList()
})
</script>

<template>
  <EventCard />
</template>
<style lang="css">
#servv-platform-widget {
  width: fit-content;
  padding: 1px;
  margin: 0 auto;
}
</style>
