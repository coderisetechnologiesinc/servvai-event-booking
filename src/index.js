/**
 * File: src/index.js
 *
 * Entry point for your block plugin.
 * - Bootstraps i18n
 * - Registers the block
 * - Translates any existing DOM (data‑i18n‑key markers)
 */

import "./bootstrap-i18n.js"; // if you have code to load WP translations
import "./input.css"; // block’s editor styles
import "./style.scss"; // both frontend & editor styles
import "./editor.scss"; // editor‑only styles

import { registerBlockType, createBlock } from "@wordpress/blocks";
import { select, dispatch } from "@wordpress/data";
import { domReady } from "@wordpress/dom-ready";
import Edit from "./edit.jsx";
import metadata from "./block.json";

// --- i18n Bootstrap ---------------------------------

import { initI18n, translateAll, t } from "./utilities/textResolver.js";

// 1. Expose helper to `window` so any `{t("…")}` calls injected by transforms or manual calls work:
window.t = t;

// 2. Initialize default locale. Pass “de” for German as requested:
initI18n("en_US");

// ---------------------------------------------------

const BLOCK_NAME = metadata.name;
if (typeof wp === "undefined" || !wp.blocks) {
  const el = document.getElementById("servv-wrap");
  if (el) {
    el.innerHTML =
      "<div style='padding:1rem; background:#fff3cd; color:#856404; border:1px solid #ffeeba;'>⚠️ Gutenberg (block editor) is not supported on this site. Please activate Gutenberg to use the Servv Plugin block.</div>";
  }
} else {
  // Register your block exactly as you had it before:
  registerBlockType(BLOCK_NAME, {
    edit: Edit,
    blockHooks: {
      "core/post-content": "after",
    },
    attributes: {
      meeting: {
        type: "object",
        default: {
          eventType: 1,
          title: "",
          agenda: "",
          startTime: null,
          duration: 60,
          timezone: "",
          recurrence: null,
          location: "offline",
        },
        eventType: {
          type: "number",
          default: "1",
        },
        title: {
          type: "string",
          default: "",
        },
        agenda: {
          type: "string",
          default: "",
        },
        startTime: {
          type: "string",
          default: null,
        },
        duration: {
          type: "number",
          default: 60,
        },
        timezone: {
          type: "string",
          default: "",
        },
        recurrence: {
          type: "object",
          default: null,
        },
        location: {
          type: "string",
          default: "offline",
        },
      },
      product: {
        type: "object",
        default: {
          price: 0,
          quantity: null,
        },
        price: {
          type: "number",
          default: 0,
        },
        quantity: {
          type: "number",
          default: 1,
        },
      },
      notifications: {
        type: "object",
        default: {
          google_calendar: true,
          disable_emails: false,
        },
        google_calendar: {
          type: "boolean",
          default: true,
        },
        disable_emails: {
          type: "boolean",
          default: false,
        },
      },
      registrants: {
        type: "array",
        default: [],
      },
      types: {
        type: "object",
        default: {},
        location_id: {
          type: "number",
          default: null,
        },
        category_id: {
          type: "number",
          default: null,
        },
        language_id: {
          type: "number",
          default: null,
        },
        members: {
          type: "array",
          default: [],
        },
      },
      custom_fields: {
        type: "object",
        default: {},
        custom_field_1_name: {
          type: "string",
          default: "",
        },
        custom_field_1_value: {
          type: "string",
          default: "",
        },
        custom_field_2_name: {
          type: "string",
          default: "",
        },
        custom_field_2_value: {
          type: "string",
          default: "",
        },
      },
      tickets: {
        type: "array",
        default: [],
      },
    },

    // onSave: ({ attributes }) => {
    //   const blockProps = useBlockProps.save();
    //   console.log(attributes);
    // },
  });
}

const isBlockInserted = () => {
  const blocks = select("core/block-editor").getBlocks();
  return blocks.some((block) => block.name === BLOCK_NAME);
};

wp.domReady(() => {
  const searchParams = new URLSearchParams(window.location.search);

  const block = createBlock(BLOCK_NAME);
  const checkEditorLoaded = setInterval(() => {
    const blocks = wp.data.select("core/block-editor").getBlocks();
    if (blocks !== undefined) {
      clearInterval(checkEditorLoaded);
      if (!isBlockInserted() && searchParams.has("servv_plugin")) {
        // console.log(!isBlockInserted(), searchParams.has("servv_plugin"));
        wp.data.dispatch("core/block-editor").insertBlock(block);
      }
    }
  }, 500);
  // **Finally**—once the editor has mounted (or after a tick), translate everything
  // in the current DOM under the block’s root.
  // We `setTimeout(..., 0)` just to let React/WordPress finish mounting first.
  setTimeout(() => {
    // If you know your block’s wrapper element, you can pass it in:
    // e.g. translateAll(document.querySelector('.wp-block-servv-your-block'));
    // Here we simply translate the entire document so any data‑i18n‑key tags also update:
    translateAll();
  }, 0);
});
