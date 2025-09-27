=== Servv AI Event Booking ===
Contributors: servvai
Tags: event booking, event calendar, online booking, booking system, wordpress events plugin
Requires at least: 6.0
Tested up to: 6.8
Stable tag: 1.0.3
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Servv AI Event Booking helps you create events with AI, Zoom integration, ticketing, and reminders all in one place. You can add events to any post on your Wordpress site.

== Description ==

Servv AI Event Booking makes it easy to schedule and host online, in-person, or hybrid online/in-person events directly from your WordPress site. This means that you can deliver seamless in-person or virtual attendance experiences for your events. With AI‑assisted event creation, Zoom and Google Calendar integration, the ability to schedule recurring events, and many other great features Servv AI Event Booking can help you deliver polished booking experiences with minimal effort.

Here is what you will get:

	•	Schedule One-time or Recurring in-person/hybrid or virtual events: Set it and forget it! Save time and effort by scheduling recurring events long into the future.
 	•	Multiple Ticket pricing options: Configure your events for different ticket pricing options. For example, define whether or not tickets will be free, or for a fee. You can even configure seat limits to make sure your event isn’t accidentally oversold.   
    •	Zoom and Google Calendar Integration: Using our Zoom and Google Calendar integrations you can host virtual and hybrid virtual/in-person events using  auto-generated meeting links without having to manually set up a virtual meeting.
 	•	AI-powered event builder: Our AI-powered event builder helps you build and schedule events quickly and easy, using using smart default settings   
	•	Automated reminders and notifications: Minimize no-shows by automatically reminding your attendees about upcoming events, with email follow-ups and calendar invites.
	•	Customizable booking widgets: Embed responsive booking flows into posts, pages, or sidebars. Your schedules, where you want them.


== Installation ==
	•	Search “servvai” and install from from Plugin repository 
	•	You can also manually upload servvai-event-booking.zip via Plugins → Add New
	•	Activate Servv AI Event Booking
	•	Go to Servv AI Event Booking → Add New Event to start hosting

Note:
Please ensure that `/wp-json/` is publicly accessible over the internet  
For local development, restricted access to `/wp-json/` may cause issues

== Frequently Asked Questions ==
= Can I sell tickets? =
Yes – create free or paid tickets, set capacity, and choose sale dates.

= Can I host online meeting via Zoom/Google Meet or Teams account? =
Yes - For online events, Zoom/Google Meet/Teams links are supported. Premium version supports advanced Zoom integration.

= Is recurring scheduling supported? =
Absolutely. Define your own recurrence patterns easily.

= What payment gateways are supported? =
Currently, only the Stripe payment gateway is supported.

== Changelog ==

Link: http://support.servv.ai/changelogs/changelog/

== Developer ==

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

---
Developer Notes:

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

Local Development:

*Note: The following setup is required only for local development and testing purposes.*

To run this plugin in a local environment, create a `.env` file in the plugin root directory with the following variables:

    SERVV_PLUGIN_API_DOMAIN=https://devapi.servv.io
    SERVV_API_VERSION=v1
    SERVV_PLUGIN_SITE_URL=https://0f3e24eaf32f.ngrok.app
    SERVV_PLUGIN_MODE=development

Next, start an ngrok tunnel to expose your local WordPress site to the internet:

    ngrok http --host-header=rewrite servv.wordpress.develop

Make sure the `SERVV_PLUGIN_SITE_URL` matches the public URL provided by ngrok.