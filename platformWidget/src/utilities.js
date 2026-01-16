// src/utilities.js
import moment from './servicesShared/moment-timezone-extended.js'

import forEach from 'lodash.foreach'

export const convertFromUtcToLocal = (rawTime, timezone) => {
  return moment(rawTime).tz(timezone).format('YYYY-MM-DDTHH:mm:ss')
}

export const convertEventsDates = (rawEventsList) => {
  const convertedEvents = []

  forEach(rawEventsList, (event) => {
    convertedEvents.push({
      ...event,
      start_time:
        event.start_time && event.timezone
          ? convertFromUtcToLocal(event.start_time, event.timezone)
          : event.start_time,
    })
  })

  return convertedEvents
}
async function resizeImageToPreview(url, maxWidth = 460, maxHeight = 320) {
  try {
    const img = await loadImage(url)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    // maintain aspect ratio
    let width = img.width
    let height = img.height
    const ratio = Math.min(maxWidth / width, maxHeight / height)

    width = Math.floor(width * ratio)
    height = Math.floor(height * ratio)

    canvas.width = width
    canvas.height = height
    ctx.drawImage(img, 0, 0, width, height)

    // Export compressed image
    return canvas.toDataURL('image/webp', 0.7)
  } catch (e) {
    console.warn('Preview resize failed:', url, e)
    return url // fallback
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

// async function convertImgToBase64(url) {
//   try {
//     const response = await fetch(url, { mode: 'cors' })
//     const blob = await response.blob()

//     return new Promise((resolve) => {
//       const reader = new FileReader()
//       reader.onloadend = () => resolve(reader.result)
//       reader.readAsDataURL(blob)
//     })
//   } catch (error) {
//     console.warn('Failed to inline image:', url, error)
//     return url // fallback
//   }
// }

export async function exportWidgetWithCSS() {
  const widget = document.querySelector('#servv-platform-widget')
  if (!widget) return { html: '', css: '' }

  const clone = widget.cloneNode(true)

  // Inline images
  const images = clone.querySelectorAll('img')
  for (const img of images) {
    const src = img.src
    if (!src) continue

    try {
      const resizedBase64 = await resizeImageToPreview(src)
      img.src = resizedBase64
    } catch (e) {
      console.warn('Image resize failed:', src)
    }
  }

  const widgetHTML = clone.outerHTML

  // Extract ONLY CSS that affects the widget
  const onlyWidgetCSS = extractWidgetCSS(widget)

  // Add Google Fonts (safe)
  const googleFontLink = `
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
`

  const cssText = googleFontLink + '\n' + onlyWidgetCSS

  return { html: widgetHTML, css: cssText }
}
function extractWidgetCSS(widgetEl) {
  let cssText = ''

  // Get all loaded stylesheets
  for (const sheet of document.styleSheets) {
    let rules

    try {
      rules = sheet.cssRules // may throw CORS for external styles
    } catch {
      continue
    }

    if (!rules) continue

    for (const rule of rules) {
      if (!rule.selectorText) continue

      try {
        // Check if selector applies to the widget
        if (widgetEl.querySelector(rule.selectorText)) {
          cssText += rule.cssText + '\n'
        }
      } catch {
        // Some CSS selectors break querySelector(:has, :focus-visible)
        continue
      }
    }
  }

  return `<style>${cssText}</style>`
}

export async function generateIframeEmbedCode() {
  const { html, css } = await exportWidgetWithCSS()

  const fullDoc = `
${css}
${html}
`

  const encoded = fullDoc
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  return `
<iframe
  style="width:100%; min-height:600px; border:0;"
  srcdoc="${encoded}">
</iframe>`
}
