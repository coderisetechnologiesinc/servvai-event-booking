<template>
  <div class="card-widget">
    <div class="cover">
      <img class="cover-bg" :src="noiseImage" alt="Cover" />

      <div class="ellipse ellipse-left"></div>
      <div class="ellipse ellipse-right"></div>

      <div class="star star-1"></div>
      <div class="star star-2"></div>
      <div class="star star-3"></div>

      <div class="cover-actions">
        <button class="icon-btn" @click="shareCurrentUrl"><ShareIcon /></button>
        <!----<button class="icon-btn"><MoreIcon /></button>-->
      </div>
    </div>

    <img class="avatar" :src="pw_avatar" alt="Avatar" />

    <div class="section">
      <h2>{{ pw_title }}</h2>
      <p class="subtitle">{{ pw_description }}</p>

      <div class="info">
        <div class="info-item">
          <MailIcon />
          <span>{{ pw_email }}</span>
        </div>

        <div class="info-item">
          <MapIcon class="map-icon" />
          <span>{{ pw_address }}</span>
        </div>
      </div>
    </div>

    <div class="actions">
      <button v-if="pw_instagram" class="btn insta" @click="openLink(pw_instagram)">
        Follow Instagram
      </button>

      <button v-if="pw_tiktok" class="btn tiktok" @click="openLink(pw_tiktok)">
        Follow TikTok
      </button>
    </div>
    <div v-if="showNotification" class="mac-notification">Link copied</div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch, ref } from 'vue'

import { useCommonStore } from '../stores/common'
import { storeToRefs } from 'pinia'
import ShareIcon from '@/assets/icons/share.svg'
// import MoreIcon from '@/assets/icons/more.svg'
import MailIcon from '@/assets/icons/mail.svg'
import MapIcon from '@/assets/icons/map.svg'

const baseUrl = window.servvPlatformAjax?.base_url || ''
const defaultAvatar = `${baseUrl}images/avatarPlaceholder.png`
const noiseImage = `${baseUrl}images/noise.png`

const store = useCommonStore()

const { settings } = storeToRefs(store)
const showNotification = ref(false)
let notificationTimeout = null

function showMacNotification() {
  showNotification.value = true

  clearTimeout(notificationTimeout)
  notificationTimeout = setTimeout(() => {
    showNotification.value = false
  }, 1600)
}

function shareCurrentUrl() {
  const url = window.location.href

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(showMacNotification)
  } else {
    fallbackCopy(url)
    showMacNotification()
  }
}

const fallbackCopy = (text) => {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

const getBranding = () => {
  const root = settings.value

  if (!root) {
    // console.log('[BrandingWidget] no root settings')
    return null
  }
  // console.log(root)
  const inner = root
  if (!inner) {
    // console.log('[BrandingWidget] no nested settings')
    return null
  }

  let w = inner.widget_style_settings
  if (!w) {
    // console.log('[BrandingWidget] no widget_style_settings')
    return null
  }

  if (typeof w === 'string') {
    try {
      // console.log('[BrandingWidget] parsing widget_style_settings:', w)
      w = JSON.parse(w)
    } catch (e) {
      // console.warn('[BrandingWidget] failed JSON parse', e)
      return null
    }
  }
  // console.log(w)
  return w
}

const applyBrandingBackground = (branding) => {
  if (!branding) return

  /* ---------- PAGE BACKGROUND ---------- */
  if (branding.pw_bg_type === 'color') {
    document.body.style.background = branding.pw_background_color || '#ffffff'
    document.body.style.opacity = branding.pw_background_opacity ?? 1
  }

  if (branding.pw_bg_type === 'gradient') {
    document.body.style.background = branding.pw_background_gradient
    document.body.style.opacity = 1
  }

  if (branding.pw_bg_type === 'image') {
    document.body.style.backgroundImage = `url(${branding.pw_background_image})`
    document.body.style.backgroundPosition = 'center center'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundAttachment = 'fixed'
    document.body.style.opacity = '1'
  }

  /* ---------- WIDGET BACKGROUND ---------- */
  const widgetEl = document.querySelector('#servv-platform-widget')

  if (widgetEl) {
    if (branding.pw_widget_bg_type === 'color') {
      widgetEl.style.background = branding.pw_widget_bg_color || '#ffffff'
    }

    if (branding.pw_widget_bg_type === 'gradient') {
      widgetEl.style.background = branding.pw_widget_bg_gradient
    }

    widgetEl.style.borderRadius = '25px'
  }

  /* ---------- TEXT COLOR ---------- */
  const textColor = branding.pw_text_color || '#121633'
  const textOpacity = typeof branding.pw_text_opacity === 'number' ? branding.pw_text_opacity : 0.5

  const r = parseInt(textColor.slice(1, 3), 16)
  const g = parseInt(textColor.slice(3, 5), 16)
  const b = parseInt(textColor.slice(5, 7), 16)

  document.documentElement.style.setProperty(
    '--color-text-primary',
    `rgba(${r}, ${g}, ${b}, ${textOpacity})`,
  )
}

onMounted(() => {
  const branding = getBranding()
  if (branding) applyBrandingBackground(branding)
})

watch(
  () => settings.value,
  () => {
    const branding = getBranding()
    // console.log('[BrandingWidget] Settings updated → applying background', branding)
    applyBrandingBackground(branding)
  },
  { deep: true, immediate: true },
)

const widgetSettings = computed(() => {
  const root = settings.value
  if (!root) return {}

  let raw = root.widget_style_settings
  if (!raw) return {}

  try {
    return typeof raw === 'string' ? JSON.parse(raw) : raw
  } catch (e) {
    console.warn('[BrandingWidget] Failed to parse widget_style_settings:', e)
    return {}
  }
})

function openLink(url) {
  if (!url) return
  window.open(url, '_blank')
}

const pw_title = computed(() => widgetSettings.value.pw_title || 'Our Services')
const pw_description = computed(
  () => widgetSettings.value.pw_description || 'Professional help for your growth',
)
const pw_address = computed(() => widgetSettings.value.pw_address || 'New York, USA')
const pw_email = computed(() => widgetSettings.value.pw_email || 'info@example.com')
const pw_avatar = computed(() => widgetSettings.value.pw_avatar || defaultAvatar)
const pw_instagram = computed(() => widgetSettings.value.pw_instagram || '')
const pw_tiktok = computed(() => widgetSettings.value.pw_tiktok || '')
</script>

<style>
:root {
  --bg-cover-gradient: linear-gradient(117.91deg, #1f014b 22.68%, #3b0888 76.24%, #731df5 106.42%);

  --shadow-cover:
    0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03);
  --cover-bg-opacity: 0.2;

  --ellipse-opacity: 0.08;
  --ellipse-gradient: linear-gradient(274deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));

  --star-gradient: linear-gradient(135deg, #ffffff, #999999);
  --star-1-opacity: 0.2;
  --star-2-opacity: 0.5;
  --star-3-opacity: 0.35;

  --bg-card: #ffffff;
  --shadow-card: 0px 24px 48px -12px rgba(10, 13, 18, 0.18);

  --bg-button-insta: linear-gradient(42deg, #9b25f8, #583dff);
  --bg-button-tiktok: linear-gradient(74deg, #583dff, #9b25f8);

  --color-text-primary: #121633;
  --color-text-secondary: #717680;
  --color-text-white: #ffffff;

  --color-icon: #121633;
  --shadow-btn: 0px 4px 8px -2px rgba(10, 13, 18, 0.4);

  --border-avatar: #ffffff;
  --border-btn: rgba(0, 0, 0, 0.1);
}

.ellipse {
  position: absolute;
  opacity: 0.08;
  background: linear-gradient(280deg, rgba(255, 255, 255, 0) 6%, rgba(255, 255, 255, 0.08) 98%);
  -webkit-mask-image: radial-gradient(circle, #000 100%);
  mask-image: radial-gradient(circle, #000 100%);
  pointer-events: none;
}

.ellipse-left {
  position: absolute;
  width: 144px;
  height: 144px;
  top: -42px;
  left: -40px;

  background: linear-gradient(280deg, rgba(255, 255, 255, 0) 6%, rgba(255, 255, 255, 0.08) 98%);

  -webkit-mask-image: radial-gradient(circle, #000 100%);
  mask-image: radial-gradient(circle, #000 100%);
  pointer-events: none;
}

.ellipse-right {
  width: 181px;
  height: 181px;
  top: 44px;
  right: -20px;
  background: linear-gradient(274deg, rgba(255, 255, 255, 0.17) 3%, rgba(255, 255, 255, 0) 72%);
}

.star {
  position: absolute;
  background: linear-gradient(135deg, #fff, #999);
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg width='40' height='40' ... </svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg width='40' height='40' ... </svg>");
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.star-1 {
  width: 42px;
  height: 42px;
  top: 26px;
  left: 167px;
  opacity: 0.5;
}

.star-2 {
  width: 34px;
  height: 34px;
  top: 26px;
  left: 167px;
  opacity: 0.5;
}

.star-3 {
  width: 36px;
  height: 36px;
  top: 61px;
  left: 298px;
  opacity: 0.35;
}
</style>

<style scoped>
.card-widget {
  width: 100%;
  max-width: 480px;
  height: 464px;
  background: var(--bg-card);
  border-radius: 24px;
  box-shadow: var(--shadow-card);
  padding: 8px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

/* @media screen and (max-width: 480px) {
  .card-widget {
    width: calc(100% - 20px);
  }
} */

.cover {
  position: relative;
  width: 100%;
  height: 160px;
  border-radius: 20px;
  background: var(--bg-cover-gradient);
  box-shadow: var(--shadow-cover);
  overflow: hidden;
}
/* @media screen and (max-width: 480px) {
  .cover {
    width: calc(100% - 16px);
  }
} */

.cover-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: var(--cover-bg-opacity);
  mix-blend-mode: soft-light;
  pointer-events: none;
}

.ellipse {
  position: absolute;
  pointer-events: none;
}

.ellipse-left {
  width: 144px;
  height: 144px;
  top: -38px;
  left: -40px;
  background: linear-gradient(
    279.53deg,
    rgba(255, 255, 255, 0.08) 5.6%,
    rgba(255, 255, 255, 0.8) 98.46%
  );
  transform: rotate(-180deg);

  border-radius: 50%;
}

.ellipse-right {
  position: absolute;
  width: 180px;
  height: 180px;
  top: 80px;
  right: -80px;

  background: linear-gradient(
    99.53deg,
    rgba(255, 255, 255, 0.08) 5.6%,
    rgba(255, 255, 255, 0.8) 98.46%
  );

  border-radius: 50%;
  transform: rotate(180deg);
}

.star {
  position: absolute;
  background: var(--star-gradient);
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'><path d='M10.1467 17.7942C13.9734 16.9623 16.9623 13.9734 17.7942 10.1467L20 0L22.2058 10.1467C23.0377 13.9734 26.0266 16.9623 29.8533 17.7942L40 20L29.8533 22.2058C26.0266 23.0377 23.0377 26.0266 22.2058 29.8533L20 40L17.7942 29.8533C16.9623 26.0266 13.9734 23.0377 10.1467 22.2058L0 20L10.1467 17.7942Z' fill='black'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'><path d='M10.1467 17.7942C13.9734 16.9623 16.9623 13.9734 17.7942 10.1467L20 0L22.2058 10.1467C23.0377 13.9734 26.0266 16.9623 29.8533 17.7942L40 20L29.8533 22.2058C26.0266 23.0377 23.0377 26.0266 22.2058 29.8533L20 40L17.7942 29.8533C16.9623 26.0266 13.9734 23.0377 10.1467 22.2058L0 20L10.1467 17.7942Z' fill='black'/></svg>");
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.star-1 {
  width: 40px;
  height: 40px;
  top: 26px;
  left: 167px;
  opacity: var(--star-2-opacity);
}

.star-2 {
  width: 34px;
  height: 34px;
  top: 93px;
  left: 116px;
  opacity: var(--star-2-opacity);
}

.star-3 {
  width: 36px;
  height: 36px;
  top: 61px;
  left: 298px;
  opacity: var(--star-1-opacity);
}

.cover-actions {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: none;
}

.icon-btn {
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: none;
  width: 36px;
  height: 36px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-btn);
  padding: 0;
  line-height: 1;
  flex-shrink: 0;
  display: flex;
  transition:
    background-color 0.18s ease,
    transform 0.18s ease,
    box-shadow 0.18s ease;
}
/* Hover */
.icon-btn:hover {
  background-color: rgba(255, 255, 255, 0.92);
  transform: scale(1.06);
  box-shadow: 0 6px 14px -4px rgba(10, 13, 18, 0.25);
}

/* Active (click) */
.icon-btn:active {
  transform: scale(0.96);
  box-shadow: 0 3px 8px -4px rgba(10, 13, 18, 0.35);
}

/* Keyboard focus (accessibility) */
.icon-btn:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px rgba(115, 29, 245, 0.4),
    0 6px 14px -4px rgba(10, 13, 18, 0.25);
}

.icon-btn svg {
  width: 20px;
  height: 20px;
  stroke: var(--color-icon);
  display: block;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid var(--border-avatar);
  position: absolute;
  top: 108px;
  left: 50%;
  transform: translateX(-50%);
}

.section {
  margin-top: 68px;
  text-align: center;
  padding: 8px;
}

.section h2 {
  font-family: 'Inter';
  font-size: 24px;
  font-weight: 800;
  /* color: var(--color-text-primary); */
  margin-block-end: 0;
  margin-block-start: 0;
}

.subtitle {
  /* margin-top: 4px; */
  font-size: 20px;
  /* color: var(--color-text-primary); */
  color: rgba(18, 22, 51, 1);
  margin-block-end: 0;
  margin-block-start: 0;
  margin: 8px auto;
  text-wrap: wrap;
}

.info {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  color: var(--color-text-secondary);
  font-size: 16px;
}

.actions {
  margin-block-end: 0;
  margin-block-start: 0;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 16px;
}
@media screen and (max-width: 480px) {
  .actions {
    margin-top: 16px;
  }
}
.btn {
  padding: 8px 24px;
  height: 40px;
  border-radius: 12px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border: 1px solid var(--border-btn);
  color: var(--color-text-white);
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 2px 4px -2px #0a0d1280;

  box-shadow: 0px 4px 8px -2px #0a0d1266;
}

.btn.insta {
  background: var(--bg-button-insta);
}

.btn.tiktok {
  background: var(--bg-button-tiktok);
}
.mac-notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.96);
  padding: 14px 24px;
  background: rgba(30, 30, 30, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 14px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  opacity: 0;
  animation: macFadeInOut 1.6s ease forwards;
  z-index: 999999;
  pointer-events: none;
}
.map-icon {
  width: 15px;
}

@keyframes macFadeInOut {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.96);
  }
  15% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  85% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.98);
  }
}
</style>
