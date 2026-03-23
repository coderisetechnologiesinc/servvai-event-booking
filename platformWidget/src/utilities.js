// src/utilities.js
import moment from "./servicesShared/moment-timezone-extended.js";
import forEach from "lodash.foreach";

export const convertFromUtcToLocal = (rawTime, timezone) => {
  return moment(rawTime).tz(timezone).format("YYYY-MM-DDTHH:mm:ss");
};

export const convertEventsDates = (rawEventsList) => {
  const convertedEvents = [];

  forEach(rawEventsList, (event) => {
    convertedEvents.push({
      ...event,
      start_time:
        event.start_time && event.timezone
          ? convertFromUtcToLocal(event.start_time, event.timezone)
          : event.start_time,
    });
  });

  return convertedEvents;
};

async function resizeImageToPreview(url, maxWidth = 460, maxHeight = 320) {
  try {
    const img = await loadImage(url);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    let width = img.width;
    let height = img.height;
    const ratio = Math.min(maxWidth / width, maxHeight / height);

    width = Math.floor(width * ratio);
    height = Math.floor(height * ratio);

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);

    return canvas.toDataURL("image/webp", 0.7);
  } catch (e) {
    console.warn("Preview resize failed:", url, e);
    return url;
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// ── Знімає поточний фон body як inline <style> ──
function captureBodyBackground() {
  const s = document.body.style;
  const props = [
    "background",
    "background-color",
    "background-image",
    "background-size",
    "background-position",
    "background-repeat",
    "background-attachment",
    "opacity",
  ];

  const rules = props
    .map((p) => {
      const val = s.getPropertyValue(p);
      return val ? `  ${p}: ${val};` : null;
    })
    .filter(Boolean)
    .join("\n");

  if (!rules) return "";

  return `<style>body {\n${rules}\n}</style>`;
}

// ── Знімає поточний фон #servv-platform-widget як inline <style> ──
function captureWidgetBackground(widgetEl) {
  const s = widgetEl.style;
  const props = [
    "background",
    "background-color",
    "background-image",
    "background-size",
    "background-position",
    "background-repeat",
    "border-radius",
  ];

  const rules = props
    .map((p) => {
      const val = s.getPropertyValue(p);
      return val ? `  ${p}: ${val};` : null;
    })
    .filter(Boolean)
    .join("\n");

  if (!rules) return "";

  return `<style>#servv-platform-widget {\n${rules}\n}</style>`;
}

// ── Конвертує Vue @click handlers у статичні onclick ──
function convertInteractiveElements(clone) {
  // Соцмережі — кнопки з aria-label і data-url
  clone.querySelectorAll(".s-icon-btn[aria-label]").forEach((btn) => {
    const label = btn.getAttribute("aria-label");
    const liveBtn = document.querySelector(
      `.s-icon-btn[aria-label="${label}"]`,
    );
    if (!liveBtn) return;

    const url = liveBtn.dataset.url;
    if (url) {
      btn.removeAttribute("onclick");
      btn.setAttribute(
        "onclick",
        `window.open(${JSON.stringify(url)},'_blank')`,
      );
      btn.setAttribute(
        "style",
        (btn.getAttribute("style") || "") + ";cursor:pointer",
      );
    }
  });

  // Share button — копіює поточний URL + показує toast
  clone.querySelectorAll(".icon-btn").forEach((btn) => {
    btn.setAttribute(
      "onclick",
      `(function(){
        var url=window.location.href;
        if(navigator.clipboard&&window.isSecureContext){
          navigator.clipboard.writeText(url);
        } else {
          var t=document.createElement('textarea');
          t.value=url;
          t.style.position='absolute';
          t.style.left='-9999px';
          document.body.appendChild(t);
          t.select();
          document.execCommand('copy');
          document.body.removeChild(t);
        }
        var n=document.createElement('div');
        n.textContent='Link copied';
        n.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:14px 24px;background:rgba(30,30,30,0.75);backdrop-filter:blur(12px);border-radius:14px;color:#fff;font-size:15px;font-weight:500;z-index:999999;pointer-events:none;transition:opacity 0.3s;';
        document.body.appendChild(n);
        setTimeout(function(){document.body.removeChild(n)},1600);
      })()`,
    );
  });

  return clone;
}

export async function exportWidgetWithCSS() {
  const widget = document.querySelector("#servv-platform-widget");
  if (!widget) return { html: "", css: "" };

  let clone = widget.cloneNode(true);
  const liveImgs = Array.from(widget.querySelectorAll("img"));
  const cloneImgs = Array.from(clone.querySelectorAll("img"));
  const dpr = window.devicePixelRatio || 1;

  for (let i = 0; i < cloneImgs.length; i++) {
    const src = cloneImgs[i].src;
    if (!src) continue;
    const rect = liveImgs[i]?.getBoundingClientRect();
    const maxW = rect?.width ? Math.ceil(rect.width * dpr) : 920;
    const maxH = rect?.height ? Math.ceil(rect.height * dpr) : 640;
    try {
      cloneImgs[i].src = await resizeImageToPreview(src, maxW, maxH);
    } catch (e) {
      console.warn("Image resize failed:", src);
    }
  }

  // Конвертуємо інтерактивні елементи
  clone = convertInteractiveElements(clone);

  const widgetHTML = clone.outerHTML;
  const onlyWidgetCSS = extractWidgetCSS(widget);
  const googleFontLink = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">`;

  // Фон сторінки і віджета
  const bodyStyle = captureBodyBackground();
  const widgetStyle = captureWidgetBackground(widget);

  const cssText =
    googleFontLink +
    "\n" +
    onlyWidgetCSS +
    "\n" +
    bodyStyle +
    "\n" +
    widgetStyle;

  return { html: widgetHTML, css: cssText };
}

function extractWidgetCSS(widgetEl) {
  let cssText = "";

  for (const sheet of document.styleSheets) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    if (!rules) continue;

    for (const rule of rules) {
      if (
        rule instanceof CSSMediaRule ||
        rule instanceof CSSKeyframesRule ||
        rule instanceof CSSFontFaceRule
      ) {
        cssText += rule.cssText + "\n";
        continue;
      }

      if (!rule.selectorText) continue;

      if (rule.selectorText === ":root" || rule.selectorText === "*") {
        cssText += rule.cssText + "\n";
        continue;
      }

      try {
        if (
          widgetEl.matches(rule.selectorText) ||
          widgetEl.querySelector(rule.selectorText)
        ) {
          cssText += rule.cssText + "\n";
        }
      } catch {
        continue;
      }
    }
  }

  return `<style>${cssText}</style>`;
}

// Captures .events-list from live DOM with images inlined at their rendered size
export async function captureEventsListHtml() {
  const widget = document.querySelector("#servv-platform-widget");
  if (!widget) return "";
  const eventsListEl = widget.querySelector(".events-list");
  if (!eventsListEl) return "";

  const clone = eventsListEl.cloneNode(true);
  const liveImgs = Array.from(eventsListEl.querySelectorAll("img"));
  const cloneImgs = Array.from(clone.querySelectorAll("img"));
  const dpr = window.devicePixelRatio || 1;

  for (let i = 0; i < cloneImgs.length; i++) {
    const src = cloneImgs[i].src;
    if (!src) continue;
    const rect = liveImgs[i]?.getBoundingClientRect();
    const maxW = rect?.width ? Math.ceil(rect.width * dpr) : 920;
    const maxH = rect?.height ? Math.ceil(rect.height * dpr) : 640;
    try {
      cloneImgs[i].src = await resizeImageToPreview(src, maxW, maxH);
    } catch (e) {
      console.warn("Image inline failed:", src, e);
    }
  }

  // Convert data-href to onclick so card links work in the static file
  clone.querySelectorAll(".event-card[data-href]").forEach((card) => {
    const href = card.getAttribute("data-href");
    if (href) {
      card.setAttribute(
        "onclick",
        `window.open(${JSON.stringify(href)},'_blank')`,
      );
      card.setAttribute(
        "style",
        (card.getAttribute("style") || "") + ";cursor:pointer",
      );
    }
  });

  return clone.outerHTML;
}

export async function downloadStaticWidget(
  widgetHtml,
  css,
  allPagesHtml,
  paginationInfo,
) {
  const pages = Object.keys(allPagesHtml)
    .map(Number)
    .sort((a, b) => a - b);
  const totalPages = pages.length;
  const pageSize = paginationInfo.pageSize || 12;
  const totalRecords = paginationInfo.totalRecords || 0;

  const parser = new DOMParser();
  const doc = parser.parseFromString(`<body>${widgetHtml}</body>`, "text/html");

  const eventsListEl = doc.querySelector(".events-list");
  const paginationEl = doc.querySelector(".events-pagination-wrapper");

  if (eventsListEl) {
    if (totalPages > 1) {
      const wrapper = doc.createElement("div");
      wrapper.className = "servv-static-pages";
      for (const p of pages) {
        const pageDiv = doc.createElement("div");
        pageDiv.className =
          "servv-static-page" + (p === 1 ? " servv-static-page--active" : "");
        pageDiv.setAttribute("data-page", p);
        pageDiv.innerHTML = allPagesHtml[p] || "";
        wrapper.appendChild(pageDiv);
      }
      eventsListEl.parentNode.replaceChild(wrapper, eventsListEl);
    } else {
      eventsListEl.outerHTML = allPagesHtml[1] || eventsListEl.outerHTML;
    }
  }

  if (paginationEl) {
    if (totalPages > 1) {
      const scopedAttr =
        Array.from(paginationEl.attributes).find((a) =>
          a.name.startsWith("data-v-"),
        )?.name || "";
      const tempDiv = doc.createElement("div");
      tempDiv.innerHTML = buildStaticPaginationHtml(
        totalPages,
        pageSize,
        totalRecords,
        scopedAttr,
      );
      paginationEl.parentNode.replaceChild(
        tempDiv.firstElementChild,
        paginationEl,
      );
    } else {
      paginationEl.parentNode.removeChild(paginationEl);
    }
  }

  const finalHtml = doc.body.innerHTML;

  const fullDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${css}
  <style>
    body { margin: 0; padding: 16px; }
    .servv-static-page { display: none; }
    .servv-static-page--active { display: block; }
    .s-icon-btn {
    transition: transform 0.18s ease;
    cursor: pointer;
  }
  .s-icon-btn:hover {
    transform: scale(1.06);
  }
  .icon-btn {
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    cursor: pointer;
  }
  .icon-btn:hover {
    transform: scale(1.125);
    box-shadow: 0 6px 14px -4px rgba(10, 13, 18, 0.25);
  }
  </style>
</head>
<body>
  ${finalHtml}
  <script>
${buildPaginationScript(totalPages, pageSize, totalRecords)}
  ${"</script>"}
</body>
</html>`;

  const blob = new Blob([fullDoc], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "servv-widget.html";
  a.click();
  URL.revokeObjectURL(a.href);
}

function buildStaticPaginationHtml(
  totalPages,
  pageSize,
  totalRecords,
  scopedAttr,
) {
  const sa = scopedAttr ? ` ${scopedAttr}` : "";
  const endRecord = Math.min(pageSize, totalRecords);

  const pageButtons = Array.from({ length: totalPages }, (_, i) => i + 1)
    .map(
      (p) =>
        `<button class="events-pagination__number${p === 1 ? " events-pagination__number--active" : ""}" data-page="${p}" onclick="servvGoToPage(${p})"${sa}>${p}</button>`,
    )
    .join("");

  return `<div class="events-pagination-wrapper" id="servv-static-pagination"${sa}>
  <nav class="events-pagination" role="navigation"${sa}>
    <button class="events-pagination__btn events-pagination__btn--prev" id="servv-prev" onclick="servvGoToPage(servvCurrentPage-1)" disabled${sa}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"${sa}><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${sa}/></svg>
    </button>
    <div class="events-pagination__numbers" id="servv-page-numbers"${sa}>${pageButtons}</div>
    <button class="events-pagination__btn events-pagination__btn--next" id="servv-next" onclick="servvGoToPage(servvCurrentPage+1)"${totalPages <= 1 ? " disabled" : ""}${sa}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"${sa}><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${sa}/></svg>
    </button>
  </nav>
  <div class="events-pagination__info" id="servv-pagination-info"${sa}>Showing 1\u2013${endRecord} of ${totalRecords} events</div>
</div>`;
}

function buildPaginationScript(totalPages, pageSize, totalRecords) {
  return `var servvCurrentPage=1,servvTotalPages=${totalPages},servvPageSize=${pageSize},servvTotalRecords=${totalRecords};
function servvGoToPage(p){
  if(p<1||p>servvTotalPages||p===servvCurrentPage)return;
  document.querySelector('.servv-static-page--active').classList.remove('servv-static-page--active');
  document.querySelector('[data-page="'+p+'"]').classList.add('servv-static-page--active');
  servvCurrentPage=p;
  document.querySelectorAll('#servv-page-numbers .events-pagination__number').forEach(function(b){
    b.classList.toggle('events-pagination__number--active',+b.dataset.page===p);
  });
  document.getElementById('servv-prev').disabled=p===1;
  document.getElementById('servv-next').disabled=p===servvTotalPages;
  var s=(p-1)*servvPageSize+1,e=Math.min(p*servvPageSize,servvTotalRecords);
  document.getElementById('servv-pagination-info').textContent='Showing '+s+'\u2013'+e+' of '+servvTotalRecords+' events';
  window.scrollTo({top:0,behavior:'smooth'});
}`;
}
