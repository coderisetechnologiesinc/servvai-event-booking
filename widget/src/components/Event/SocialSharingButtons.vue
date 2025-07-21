<template>
  <div class="social-sharing-buttons-container">
    <a href="#" class="facebook" @click.prevent="openDialog('facebook')">
      <FacebookIcon />
    </a>

    <a href="#" class="twitter" @click.prevent="openDialog('twitter')">
      <Twitter />
    </a>

    <a href="#" class="linkedin" @click.prevent="openDialog('linkedin')">
      <LinkedIn />
    </a>
    <CopyToClipboard :text="productUrl" @copy="copyToBufferHandler">
      <a href="#" @click.prevent="() => {}" class="copy">
        <Copy />
        <span v-show="showCopiedMsg" class="copied-msg">Copied!</span>
      </a>
    </CopyToClipboard>
  </div>
</template>

<script>
import FacebookIcon from '@/assets/images/icons/facebook.svg';
import Twitter from '@/assets/images/icons/twitter.svg';
import LinkedIn from '@/assets/images/icons/linkedin.svg';
import Email from '@/assets/images/icons/email.svg';
import Copy from '@/assets/images/icons/copy.svg';
import CopyToClipboard from 'vue-copy-to-clipboard';

export default {
  name: 'SocialSharingButtons',
  components: {
    FacebookIcon,
    Twitter,
    LinkedIn,
    Email,
    Copy,
    CopyToClipboard,
  },
  props: {
    productTitle: {
      type: String,
      default: '',
    },
    productUrl: {
      type: String,
      default: '',
    },
    productImage: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      shareUrls: {
        facebook: 'https://www.facebook.com/sharer/sharer.php',
        whatsapp: 'https://api.whatsapp.com/send',
        googleplus: 'https://plus.google.com/share',
        linkedin: 'https://linkedin.com/shareArticle',
        pinterest: 'https://pinterest.com/pin/create/button',
        telegram: 'https://telegram.me/share/',
        twitter: 'https://www.twitter.com/intent/tweet',
      },
      showCopiedMsg: false,
    };
  },

  methods: {
    objectToParams(object) {
      return `?${Object.keys(object)
        .filter(key => !!object[key])
        .map(key => `${key}=${encodeURIComponent(object[key])}`)
        .join('&')}`;
    },
    openDialog(socialNetwork) {
      let params;

      switch (socialNetwork) {
        case 'facebook':
          params = this.objectToParams({
            u: this.productUrl,
            title: this.productTitle,
            picture: this.productImage,
          });
          break;
        case 'whatsapp':
          params = this.objectToParams({ text: this.productUrl });
          break;
        case 'googleplus':
          params = this.objectToParams({ url: this.productUrl });
          break;
        case 'linkedin':
          params = this.objectToParams({
            url: this.productUrl,
            mini: true,
            title: this.productTitle,
          });
          break;
        case 'pinterest':
          params = this.objectToParams({ url: this.productUrl });
          break;
        case 'telegram':
          params = this.objectToParams({ url: this.productUrl });
          break;
        case 'twitter':
          params = this.objectToParams({
            url: this.productUrl,
            text: this.productTitle,
          });
          break;
        default:
          params = '';
      }
      window.open(`${this.shareUrls[socialNetwork]}${params}`, '__blank');
    },
    copyToBufferHandler() {
      this.showCopiedMsg = true;

      setTimeout(() => {
        this.showCopiedMsg = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
