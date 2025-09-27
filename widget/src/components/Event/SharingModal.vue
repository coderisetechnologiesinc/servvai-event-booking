<template>
  <div v-if="visible" class="svv-modal-overlay">
    <div class="svv-modal-content">
      <!-- Close Button -->
      <button class="svv-modal-close-btn" @click.prevent="() => onClose()">
        <CloseIcon class="svv-close-modal-icon" />
      </button>

      <!-- Left Image Section -->
      <div class="svv-modal-image-section">
        <img :src="image" alt="Event Image" />
      </div>

      <!-- Right Details Section -->
      <div class="svv-modal-details-section">
        <h2 class="svv-modal-title">
          {{ $t("mainWidget.shareEventPanelTitle") }}
        </h2>
        <p class="svv-modal-date">{{ date }}</p>
        <div class="svv-modal-details">
          <div class="svv-modal-time">
            <ClockIcon class="svv-modal-icon" /><span>{{ time }}</span>
          </div>
          <div class="svv-modal-location" v-if="location">
            <LocationIcon class="svv-modal-icon" /><span>{{ location }}</span>
          </div>
          <p class="svv-modal-language" v-if="language">
            <LanguageIcon class="svv-modal-icon" /><span>{{ language }}</span>
          </p>
        </div>
        <div class="svv-modal-subsection">
          <h3 class="svv-modal-subtitle">{{ title }}</h3>
          <p class="svv-modal-description">{{ description }}</p>
        </div>
        <!-- <p class="svv-modal-price">
          Price: <span class="free">{{ event.price }}</span>
        </p> -->
        <div class="svv-modal-share">
          <div class="svv-modal-share-header">
            <p class="svv-share-header-title">
              {{ $t("mainWidget.shareEventPanelTitle") }}
            </p>
            <a
              class="svv-share-header-action"
              href="#"
              @click.prevent="copyLink"
              ><Copy class="svv-modal-icon" /><span>Copy link</span></a
            >
          </div>
          <div class="svv-social-buttons">
            <button
              class="svv-share-button"
              @click.prevent="openDialog('facebook')"
            >
              <FacebookIcon class="svv-modal-icon" /><span>Facebook</span>
            </button>
            <button
              class="svv-share-button"
              @click.prevent="openDialog('twitter')"
            >
              <Twitter class="svv-modal-icon" /><span>X</span>
            </button>
            <button
              class="svv-share-button"
              @click.prevent="openDialog('whatsapp')"
            >
              <WhatsApp class="svv-modal-icon" /><span>WathsApp</span>
            </button>
            <button
              class="svv-share-button"
              @click.prevent="openDialog('linkedin')"
            >
              <LinkedIn class="svv-modal-icon" /><span>LinkedIn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import FacebookIcon from "@/assets/images/icons/facebook.svg";
import Twitter from "@/assets/images/icons/twitter.svg";
import LinkedIn from "@/assets/images/icons/linkedin.svg";
import ClockIcon from "@/assets/images/icons/clock.svg";
import DurationIcon from "@/assets/images/icons/duration.svg";
import LanguageIcon from "@/assets/images/icons/lang.svg";
import LocationIcon from "@/assets/images/icons/location.svg";
import CloseIcon from "@/assets/images/icons/close.svg";
import Copy from "@/assets/images/icons/copy.svg";
import WhatsApp from "@/assets/images/icons/whatsapp.svg";

export default {
  name: "EventModal",
  components: {
    DurationIcon,
    ClockIcon,
    LanguageIcon,
    LocationIcon,
    DurationIcon,
    Copy,
    Twitter,
    FacebookIcon,
    LinkedIn,
    CloseIcon,
    WhatsApp,
  },
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      default: "",
    },
    date: { type: String, default: "" },
    time: { type: String, default: "" },
    location: { type: String, default: "" },
    language: { type: String, default: "" },
    title: { type: String, default: "Event" },
    description: {
      type: String,
      default: "",
    },
    price: { type: String, default: "Free" },
    link: { type: String, default: "" },
    onClose: { type: Function, default: () => {} },
  },
  data() {
    return {
      shareUrls: {
        facebook: "https://www.facebook.com/sharer/sharer.php",
        whatsapp: "https://api.whatsapp.com/send",
        googleplus: "https://plus.google.com/share",
        linkedin: "https://linkedin.com/shareArticle",
        pinterest: "https://pinterest.com/pin/create/button",
        telegram: "https://telegram.me/share/",
        twitter: "https://www.twitter.com/intent/tweet",
      },
      showCopiedMsg: false,
    };
  },
  methods: {
    copyLink() {
      navigator.clipboard.writeText(this.event.link);
      alert("Event link copied!");
    },
    objectToParams(object) {
      return `?${Object.keys(object)
        .filter((key) => !!object[key])
        .map((key) => `${key}=${encodeURIComponent(object[key])}`)
        .join("&")}`;
    },
    openDialog(socialNetwork) {
      let params;

      switch (socialNetwork) {
        case "facebook":
          params = this.objectToParams({
            u: this.productUrl,
            title: this.productTitle,
            picture: this.productImage,
          });
          break;
        case "whatsapp":
          params = this.objectToParams({ text: this.link });
          break;
        case "googleplus":
          params = this.objectToParams({ url: this.link });
          break;
        case "linkedin":
          params = this.objectToParams({
            url: this.link,
            mini: true,
            title: this.title,
          });
          break;
        case "pinterest":
          params = this.objectToParams({ url: this.link });
          break;
        case "telegram":
          params = this.objectToParams({ url: this.link });
          break;
        case "twitter":
          params = this.objectToParams({
            url: this.link,
            text: this.title,
          });
          break;
        default:
          params = "";
      }
      window.open(`${this.shareUrls[socialNetwork]}${params}`, "__blank");
    },
  },
};
</script>
