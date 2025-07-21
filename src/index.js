/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import {
  registerBlockType,
  createBlock,
  useBlockProps,
} from "@wordpress/blocks";
import { dispatch, select } from "@wordpress/data";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";
import "./editor.scss";
import "react-toastify/dist/ReactToastify.css";
/**
 * Internal dependencies
 */
import Edit from "./edit";
import metadata from "./block.json";
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
const BLOCK_NAME = metadata.name;

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
        quantity: 0,
      },
      price: {
        type: "number",
        default: 0,
      },
      quantity: {
        type: "number",
        default: 0,
      },
    },
    notifications: {
      type: "object",
      default: {
        google_calendar: false,
        disable_emails: false,
      },
      google_calendar: {
        type: "boolean",
        default: false,
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
      },
      category_id: {
        type: "number",
      },
      language_id: {
        type: "number",
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
});
