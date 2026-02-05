import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./widget.css";

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("#servv-platform-widget");
  if (!el) return;

  // Remove has-global-padding from closest parent container
  const wrapper = el.closest(".has-global-padding");
  if (wrapper) {
    wrapper.classList.remove("has-global-padding");
  }

  const app = createApp(App);
  app.use(createPinia());
  app.mount(el);
});
