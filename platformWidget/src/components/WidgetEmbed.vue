<script setup>
import { ref, nextTick } from 'vue'
import { exportWidgetWithCSS, captureEventsListHtml, downloadStaticWidget } from '@/utilities'
import { useEventsStore } from '@/stores/events'
import { storeToRefs } from 'pinia'
import ShareIcon from '@/assets/icons/share.svg'

const eventsStore = useEventsStore()
const { pagination } = storeToRefs(eventsStore)
const isExporting = ref(false)

async function handleDownload() {
  isExporting.value = true
  try {
    // Fetch and cache all pages (only makes API calls for pages not yet cached)
    await eventsStore.fetchAllPagesForExport()

    const totalPages = pagination.value.totalPages || 1
    const originalPage = pagination.value.currentPage
    const allPagesHtml = {}

    // Page 1: capture full widget HTML (branding, links, videos + events) + CSS
    eventsStore.loadCachedPage(1)
    await nextTick()
    allPagesHtml[1] = await captureEventsListHtml()
    const { html: widgetHtml, css } = await exportWidgetWithCSS()

    // Pages 2-N: only capture the events-list per page
    for (let p = 2; p <= totalPages; p++) {
      eventsStore.loadCachedPage(p)
      await nextTick()
      allPagesHtml[p] = await captureEventsListHtml()
    }

    // Restore original page
    eventsStore.loadCachedPage(originalPage)

    await downloadStaticWidget(widgetHtml, css, allPagesHtml, pagination.value)
  } catch (e) {
    console.error('Static export failed:', e)
  }
  isExporting.value = false
}
</script>

<template>
  <button class="btn-export" :disabled="isExporting" @click="handleDownload">
    <ShareIcon class="btn-export__icon" />
    <span>{{ isExporting ? 'Exporting…' : 'Share' }}</span>
  </button>
</template>

<style scoped>
.btn-export {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: opacity 0.2s;
  align-self: center;
}
.btn-export:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn-export__icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
.btn-export__icon :deep(path),
.btn-export__icon :deep(circle),
.btn-export__icon :deep(polyline) {
  stroke: white;
}
</style>
