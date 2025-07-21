<template>
  <div id="svv-wgt-app">
    <WidgetRoot />
  </div>
</template>

<script>
import WidgetRoot from "@/containers/WidgetRoot";

export default {
  name: "App",
  components: {
    WidgetRoot,
  },
  // mounted() {
  //   console.log("app");
  // },
};
</script>

<style lang="scss"></style>
