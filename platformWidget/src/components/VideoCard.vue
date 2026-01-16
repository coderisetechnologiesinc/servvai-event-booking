<template>
  <div class="yt-card" @click="openVideo">
    <!-- Background -->
    <div class="yt-background" :style="{ backgroundImage: `url(${thumbnail})` }" />

    <!-- Play -->
    <div class="play-wrapper">
      <PlayIcon class="play-icon" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PlayIcon from '@/assets/icons/play.svg'
/**
 * Props:
 *  - youtube: embed HTML OR link
 */
const props = defineProps({
  youtube: {
    type: String,
    required: true,
  },
})

/* -----------------------------
   Extract video ID
-------------------------------- */
const extractVideoId = (input) => {
  if (!input) return null

  // 1) iframe embed HTML
  const iframeMatch = input.match(/src=["']([^"']+)["']/)
  const url = iframeMatch ? iframeMatch[1] : input

  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
  ]

  for (const p of patterns) {
    const m = url.match(p)
    if (m?.[1]) return m[1]
  }

  return null
}

/* -----------------------------
   Computed values
-------------------------------- */
const videoId = computed(() => extractVideoId(props.youtube))

const thumbnail = computed(() =>
  videoId.value ? `https://img.youtube.com/vi/${videoId.value}/hqdefault.jpg` : '',
)

const videoUrl = computed(() =>
  videoId.value ? `https://www.youtube.com/watch?v=${videoId.value}` : '#',
)

/* -----------------------------
   Actions
-------------------------------- */
const openVideo = () => {
  if (!videoId.value) return
  window.open(videoUrl.value, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
/* Card */
.yt-card {
  position: relative;
  width: 480px;
  height: 336px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 24px 48px -12px rgba(10, 13, 18, 0.18);
  cursor: pointer;
  overflow: hidden;
}
@media screen and (max-width: 480px) {
  .yt-card {
    width: 100%;
    max-width: 100%;
  }
}

/* Background */
.yt-background {
  position: absolute;
  inset: 8px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
}

.yt-background::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.4);
}

/* Play */
.play-wrapper {
  position: absolute;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.play-icon {
  position: relative;
  width: 64px;
  height: 64px;
  /* border: 3.2px solid #ffffff; */
  fill: rgba(255, 255, 255, 0.2);
  border-radius: 2.66667px;
}
</style>
