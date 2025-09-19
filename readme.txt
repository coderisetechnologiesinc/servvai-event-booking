=== ServvAI Event Booking ===
Contributors: servvai
Tags: event booking, event calendar, online booking, booking system, wordpress events plugin
Requires at least: 6.0
Tested up to: 6.8
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

ServvAI Event Booking plugin helps you create events with AI, Zoom integration, ticketing, and reminders all in one place

== Description ==

Servv AI Event Booking makes it easy to host online, in-person, or hybrid events directly from your WordPress site. With AI‑assisted event creation, Zoom & Google Calendar integration, recurring events, multiple ticket types, and automated reminders — deliver polished booking experiences with minimal effort.

AI-powered event builder: streamline event creation using smart defaults 
Zoom & Google Calendar sync: manage virtual/hybrid events with auto-generated meeting links 
Recurring events & ticket options: support free or paid ticket types with configurable seat limits 
Automated reminders & notifications: reduce no-shows with email follow-ups and calendar invites 
Customizable booking widgets: embed responsive booking flows into posts, pages, or sidebars 
Hybrid event support: deliver seamless in-person or virtual attendance experiences 

== Installation ==
1. Upload servv-ai-event-booking.zip via Plugins → Add New
2. Activate Servv AI Event Booking
4. Go to Servv AI → Add New Event to start hosting

== Frequently Asked Questions ==
= Can I sell tickets? =
Yes – create free or paid tickets, set capacity, and choose sale dates.

= Can I host online meeting via Zoom/Google Meet or Teams account? =
Yes - For online events, Zoom/Google Meet/Teams links are supported. Premium version supports advanced Zoom integration.

= Is recurring scheduling supported? =
Absolutely. Define your own recurrence patterns easily.

== Changelog ==
= 1.0.0 =
* Initial release (beta)


== Bundled Libraries and Licenses ==
- firebase/php-jwt (MIT License) - https://github.com/firebase/php-jwt
(All libraries are GPL-compatible.)

- @emotion/react (MIT License) - https://github.com/emotion-js/emotion  
- @emotion/styled (MIT License) - https://github.com/emotion-js/emotion  
- @heroicons/react (MIT License) - https://github.com/tailwindlabs/heroicons  
- @mui/icons-material (MIT License) - https://github.com/mui/material-ui  
- @mui/material (MIT License) - https://github.com/mui/material-ui  
- @mui/styled-engine-sc (MIT License) - https://github.com/mui/material-ui  
- @stripe/react-stripe-js (MIT License) - https://github.com/stripe/react-stripe-js  
- @stripe/stripe-js (MIT License) - https://github.com/stripe/stripe-js  
- @wordpress/api-fetch (GPL-compatible) - https://github.com/WordPress/gutenberg  
- @wordpress/components (GPL-compatible) - https://github.com/WordPress/gutenberg  
- @wordpress/compose (GPL-compatible) - https://github.com/WordPress/gutenberg  
- @wordpress/dom-ready (GPL-compatible) - https://github.com/WordPress/gutenberg  
- @wordpress/icons (GPL-compatible) - https://github.com/WordPress/gutenberg  
- @wordpress/interactivity (GPL-compatible) - https://github.com/WordPress/gutenberg  
- @wordpress/url (GPL-compatible) - https://github.com/WordPress/gutenberg  
- axios (MIT License) - https://github.com/axios/axios  
- dotenv (BSD-2-Clause) - https://github.com/motdotla/dotenv  
- he (MIT License) - https://github.com/mathiasbynens/he  
- lodash.capitalize (MIT License) - https://github.com/lodash/lodash  
- lodash.foreach (MIT License) - https://github.com/lodash/lodash  
- lodash.startcase (MIT License) - https://github.com/lodash/lodash  
- moment (MIT License) - https://github.com/moment/moment  
- moment-timezone (MIT License) - https://github.com/moment/moment-timezone  
- quill (BSD-3-Clause) - https://github.com/quilljs/quill  
- react-spinners (MIT License) - https://github.com/davidhu2000/react-spinners  
- react-tailwindcss-datepicker (MIT License) - https://github.com/heyjuliette/react-tailwindcss-datepicker  
- react-toastify (MIT License) - https://github.com/fkhadra/react-toastify  
- reaviz (MIT License) - https://github.com/reaviz/reaviz  
- stripe (MIT License) - https://github.com/stripe/stripe-node  
- styled-components (MIT License) - https://github.com/styled-components/styled-components  
- tailwind-datepicker-react (MIT License) - https://github.com/onefuture/tailwind-datepicker-react  
- uuid (MIT License) - https://github.com/uuidjs/uuid  

### Vue Widget Dependencies

- @vue/composition-api (MIT License) - https://github.com/vuejs/composition-api  
- core-js (MIT License) - https://github.com/zloirock/core-js  
- jquery (MIT License) - https://jquery.org/license/  
- js-datepicker (MIT License) - https://github.com/qodesmith/datepicker  
- lodash.has (MIT License) - https://github.com/lodash/lodash  
- lodash.isempty (MIT License) - https://github.com/lodash/lodash  
- lodash.sortby (MIT License) - https://github.com/lodash/lodash  
- lodash.uniq (MIT License) - https://github.com/lodash/lodash  
- portal-vue (MIT License) - https://github.com/LinusBorg/portal-vue  
- v-calendar (MIT License) - https://github.com/nathanreyes/v-calendar  
- v-tooltip (MIT License) - https://github.com/Akryum/v-tooltip  
- vue (MIT License) - https://github.com/vuejs/vue  
- vue-copy-to-clipboard (MIT License) - https://github.com/Inndy/vue-copy-to-clipboard  
- vue-frag (MIT License) - https://github.com/Thomvaill/vue-frag  
- vue-fragment (MIT License) - https://github.com/Thomvaill/vue-fragment  
- vue-i18n (MIT License) - https://github.com/kazupon/vue-i18n  
- vue-js-modal (MIT License) - https://github.com/euvl/vue-js-modal  
- vue-masonry (MIT License) - https://github.com/shershen08/vue-masonry  
- vue-select (MIT License) - https://github.com/sagalbot/vue-select  
- vue-svg-loader (MIT License) - https://github.com/visualfanatic/vue-svg-loader  
- vue-waypoint (MIT License) - https://github.com/scaccogatto/vue-waypoint  
- vuex (MIT License) - https://github.com/vuejs/vuex  

== Source code & build ==

This plugin ships compiled assets for performance. The corresponding human-readable source code is included in this plugin and also publicly available.

Source directories:
- Gutenberg/admin/editor source: src/
- Frontend widget source: widget/src/
- PHP source: inc/, *.php

Compiled (distributed) assets:
- Gutenberg/admin/editor bundles: build/
- Frontend widget bundle: widget/dist/js/servv-widget.js
- CSS bundles: build/ and widget/dist/css/

Public repository (source and history):
- https://github.com/coderisetechnologiesinc/servvai-event-booking

We use standard tooling (e.g., webpack/Vite, Babel/TypeScript, Tailwind where applicable). The unminified source is in `src/` and `widget/src/`. The distributed files are generated from those sources.

== Developer Notes ==

This plugin contains two separate projects:

1. **Main plugin React app**

Located in the root `src/` folder, built using `@wordpress/scripts` and Tailwind CSS.

To build:

    npm install
    npm run build

This generates files in the `build-assets/` folder used by the plugin.

---

2. **Widget Vue app**

Located in `widget/`.

To build:

    cd widget
    yarn install
    yarn build

This generates minified JS and CSS in `widget/dist/`.

---

Both source code and build files are included in this plugin.

== Local Development Setup ==

*Note: The following setup is required only for local development and testing purposes.*

To run this plugin in a local environment, create a `.env` file in the plugin root directory with the following variables:

    SERVV_PLUGIN_API_DOMAIN=https://devapi.servv.io
    SERVV_API_VERSION=v1
    SERVV_PLUGIN_SITE_URL=https://0f3e24eaf32f.ngrok.app
    SERVV_PLUGIN_MODE=development

Next, start an ngrok tunnel to expose your local WordPress site to the internet:

    ngrok http --host-header=rewrite servv.wordpress.develop

Make sure the `SERVV_PLUGIN_SITE_URL` matches the public URL provided by ngrok.

== External services ==

This plugin connects to external services to provide certain features. Below we explain what each service is used for, what data is sent, and under which conditions.

1) Google Maps Embed (www.google.com/maps)
- What it is / why: Used to display an interactive map for event locations.
- What data is sent & when: When a map is visible, the user’s browser loads the Google Maps iframe directly from Google, which may receive IP address, browser details, and the map query parameters to render the map.
- Terms / Privacy: https://maps.google.com/help/terms_maps/ , https://policies.google.com/privacy

2) Google Fonts (fonts.googleapis.com / fonts.gstatic.com)
- What it is / why: Used to load web fonts used by the plugin’s admin/editor UI.
- What data is sent & when: When the editor/admin screens load, the browser may request font files from Google Fonts and share typical browser metadata (e.g., IP, user agent).
- Terms / Privacy: https://developers.google.com/fonts/faq/privacy , https://policies.google.com/privacy

3) Stripe (js.stripe.com / api.stripe.com)
- What it is / why: Used to securely process credit/debit card payments for event bookings.
- What data is sent & when:
  • When payment features are enabled and a payment form is viewed, the browser loads Stripe’s JavaScript from https://js.stripe.com/v3/. Stripe may receive standard browser data (e.g., IP address, user agent) to deliver this script.
  • When a customer submits a payment, the payment details entered in the form (e.g., card information entered into Stripe Elements, billing name, email, billing address, order amount/currency, and relevant metadata such as order ID) are sent directly to Stripe to create a payment method and/or process the payment. Card data is handled by Stripe; our plugin does not store raw card numbers.
  • If webhooks are enabled, Stripe sends payment event notifications (e.g., payment_succeeded, payment_failed, refund.updated) from Stripe’s servers to this site’s webhook endpoint so the order status can be updated.
- Conditions: Stripe is only used if you enable the Stripe payment option in the plugin settings and view or submit the payment form. If you disable Stripe payments, no requests to Stripe are made.
- Terms / Privacy: https://stripe.com/legal , https://stripe.com/privacy
