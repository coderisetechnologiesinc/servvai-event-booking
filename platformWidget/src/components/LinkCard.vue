<template>
  <a :href="link" class="service-card" v-on:click.prevent="handleOpenLink">
    <span class="service-title">
      {{ title }}
    </span>
  </a>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
const handleOpenLink = () => {
  // console.log(props)
  if (props.url) {
    // console.log(props.url)
    open(props.url, "_blank");
  }
};
</script>

<style scoped>
/* Cards */
.service-card {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  gap: 16px;

  width: 480px;
  height: 69px;
  background: #ffffff;
  box-shadow:
    0px 12px 16px -4px rgba(10, 13, 18, 0.08),
    0px 4px 6px -2px rgba(10, 13, 18, 0.03);
  border-radius: 20px;

  text-decoration: none;
  cursor: pointer;
}

@media screen and (max-width: 480px) {
  .service-card {
    width: 100%;
    max-width: 100%;
  }
}

/* Our Services */
.service-title {
  width: 360px;
  height: 29px;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: var(--color-text-primary);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
