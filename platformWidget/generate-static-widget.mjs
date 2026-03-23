#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const args = Object.fromEntries(
  process.argv
    .slice(2)
    .filter((a) => a.startsWith("--"))
    .map((a) => a.slice(2).split("="))
    .map(([k, ...v]) => [k, v.join("=")]),
);

const WP_URL = args["wp-url"];
const PAGE_SIZE = Number(args["page-size"]) || 12;
const OUTPUT_FILE = args["output"] || path.join(__dirname, "servv-widget.html");

if (!WP_URL) {
  console.error(`
  Usage:
  node generate-static-widget.mjs \\
  --wp-url=https://site.com \\
  --output=widget.html`);
  process.exit(1);
}

async function fetchPage(page) {
  const url = `${WP_URL.replace(/\/$/, "")}/wp-json/servv-plugin/v1/widget/data?page=${page}&page_size=${PAGE_SIZE}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function fetchAllData() {
  const first = await fetchPage(1);
  const settings = first.settings || {};
  const totalPages = first.page_count || 1;
  const totalRecords = first.total_records || 0;

  console.log(`pages: ${totalPages} | records: ${totalRecords}`);

  let meetings = [...(first.meetings || [])];

  if (totalPages > 1) {
    const results = await Promise.all(
      Array.from({ length: totalPages - 1 }, (_, i) => fetchPage(i + 2)),
    );
    results.forEach((r) => meetings.push(...(r.meetings || [])));
  }

  return { settings, meetings };
}

// async function fetchAllData() {

//   const first = await fetchPage(1);

//   const settings = first.settings || {};
//   const totalPages = first.page_count || 1;
//   const totalRecords = first.total_records || 0;

//   console.log(`📄 pages: ${totalPages} | records: ${totalRecords}`);

//   let meetings = [...(first.meetings || [])];

//   if (totalPages > 1) {
//     console.log(`⚡ loading ${totalPages - 1} pages in parallel`);
//     const results = await Promise.all(
//       Array.from({ length: totalPages - 1 }, (_, i) => fetchPage(i + 2)),
//     );
//     results.forEach((r) => meetings.push(...(r.meetings || [])));
//   }

//   meetings = meetings.map((m) => {
//     if (!m.product?.image_url) return m;
//     const fixedUrl = m.product.image_url.replace(
//       /https?:\/\/[^/]+\.local/,
//       WP_URL.replace(/\/$/, ""),
//     );
//     return { ...m, product: { ...m.product, image_url: fixedUrl } };
//   });

//   return { settings, meetings };
// }

function imageToBase64(filePath) {
  if (!fs.existsSync(filePath)) return "";
  const ext = path.extname(filePath).slice(1);
  const mime = ext === "svg" ? "image/svg+xml" : `image/${ext}`;
  return `data:${mime};base64,${fs.readFileSync(filePath).toString("base64")}`;
}

function buildSkeleton(count = 3) {
  const card = `
    <div class="skeleton-card">
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line w80"></div>
        <div class="skeleton-line w50"></div>
      </div>
    </div>`;

  return `
    <div id="servv-skeleton">
      ${Array(count).fill(card).join("")}
    </div>
    <style>
      #servv-skeleton{max-width:480px;margin:0 auto;display:flex;flex-direction:column;gap:16px;padding:16px}
      .skeleton-card{background:#fff;border-radius:24px;overflow:hidden;height:300px;box-shadow:0 24px 48px -12px #0a0d122e}
      .skeleton-img{width:100%;height:220px;background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;animation:shimmer 1.5s infinite}
      .skeleton-body{padding:14px;display:flex;flex-direction:column;gap:8px}
      .skeleton-line{height:16px;border-radius:8px;background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;animation:shimmer 1.5s infinite}
      .w80{width:80%}.w50{width:50%}
      @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
    </style>`;
}

function buildHtml({ settings, meetings }) {
  const distHtml = fs.readFileSync(
    path.join(__dirname, "dist/index.html"),
    "utf8",
  );
  const distAssets = path.join(__dirname, "dist/assets");
  const outputDir = path.dirname(OUTPUT_FILE);

  const files = fs.readdirSync(distAssets);
  const jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  const cssFile = files.find(
    (f) => f.startsWith("index-") && f.endsWith(".css"),
  );

  if (!jsFile) console.warn("JS not found in dist/assets");
  if (!cssFile) console.warn("CSS not found in dist/assets");

  const js = jsFile
    ? fs.readFileSync(path.join(distAssets, jsFile), "utf8")
    : "";
  const css = cssFile
    ? fs.readFileSync(path.join(distAssets, cssFile), "utf8")
    : "";

  const placeholderBase64 = imageToBase64(
    path.join(__dirname, "dist/images/placeholder.png"),
  );
  const avatarPlaceholderBase64 = imageToBase64(
    path.join(__dirname, "dist/images/avatarPlaceholder.png"),
  );

  if (placeholderBase64) console.log("placeholder inlined");
  if (avatarPlaceholderBase64) console.log("avatarPlaceholder inlined");

  const jsFilename = "widget.js";
  fs.writeFileSync(path.join(outputDir, jsFilename), js);

  const staticScript = `<script>
window.__SERVV_STATIC__ = ${JSON.stringify({ settings, meetings })};
window.servvPlatformAjax = {
  base_url: "",
  ajax_url: "",
  nonce: "",
  assets_url: "",
  placeholderImage: ${JSON.stringify(placeholderBase64)},
  avatarPlaceholder: ${JSON.stringify(avatarPlaceholderBase64)},
};
</script>`;

  const skeleton = buildSkeleton(Math.min(meetings.length, 3));

  return distHtml
    .replace(/<script[^>]+src="\/assets\/[^"]+"><\/script>/g, "")
    .replace(/<link[^>]+href="\/assets\/[^"]+"[^>]*>/g, "")
    .replace(
      "</head>",
      `<style>${css}</style>\n${staticScript}\n<script src="./${jsFilename}"></script>\n</head>`,
    )
    .replace(
      '<div id="app"></div>',
      `<div id="platformwidget-wrapper"><div id="servv-platform-widget">${skeleton}</div></div>`,
    );
}

async function main() {
  console.log("fetching data...");
  const { settings, meetings } = await fetchAllData();
  console.log(`events: ${meetings.length}`);

  const html = buildHtml({ settings, meetings });
  fs.writeFileSync(OUTPUT_FILE, html);
  console.log(`${OUTPUT_FILE}`);
  console.log(`${path.join(path.dirname(OUTPUT_FILE), "widget.js")}`);
}

main().catch((e) => {
  console.error("❌", e);
  process.exit(1);
});
