<template>
  <div :class="{ 'svv-auth-valid': isUserValid }">
    <!--    <link-->
    <!--      rel="preload"-->
    <!--      href=""-->
    <!--      as="font"-->
    <!--      type="font/woff2"-->
    <!--      crossorigin="anonymous"-->
    <!--    />-->

    <PlainListViewMode
      v-if="
        apiAccessValid &&
        widgetSettings.widget_view_mode &&
        widgetSettings.widget_view_mode === 'plain'
      "
    />
    <ModalDialogViewMode
      v-if="
        apiAccessValid &&
        widgetSettings.widget_view_mode &&
        widgetSettings.widget_view_mode === 'modal'
      "
    />
  </div>
</template>

<script>
import PlainListViewMode from "@/components/viewModeWrappers/PlainListViewMode";
import ModalDialogViewMode from "@/components/viewModeWrappers/ModalDialogViewMode";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "WidgetRoot",
  components: {
    PlainListViewMode,
    ModalDialogViewMode,
  },
  data() {
    return {
      wgtRootContainerLocator: ".svv-wgt-container",
      isUserValid: true,
    };
  },
  computed: {
    ...mapGetters({
      widgetSettings: "common/widgetSettings",
      // isUserValid: "common/isUserValid",
      apiAccessValid: "common/apiAccessValid",
      isBundlePage: "events/isBundlePage",
    }),
  },
  methods: {
    ...mapActions({
      fetchWidgetSettings: "common/fetchWidgetSettings",
      fetchStoreDataShopifyApi: "common/fetchStoreDataShopifyApi",
      processShopParams: "common/processShopParams",
    }),
    ...mapMutations({
      setShopParams: "common/setShopParams",
      setDefaultsFilterParams: "search/setDefaultsFilterParams",
      setWindowSize: "common/setWindowSize",
      setBundleViewMode: "events/setBundleViewMode",
    }),
    resizeWindowHandler() {
      this.setWindowSize(window ? window.innerWidth : 1000);
    },
    async getShopParams() {
      const customerIdEl = document.getElementById(
        "servv_calendar_customer_id"
      );
      const customerEmailEl = document.getElementById(
        "servv_calendar_customer_email"
      );
      const customerFirstNameEl = document.getElementById(
        "servv_calendar_customer_first_name"
      );
      const customerLastNameEl = document.getElementById(
        "servv_calendar_customer_last_name"
      );
      const shopDomainEl = document.getElementById(
        "servv_calendar_shop_domain"
      );
      const signatureEl = document.getElementById("servv_calendar_signature");

      const defaultFilterParamsEl = document.getElementById(
        "servv_calendar_default_filter_params"
      );

      const authData = {
        customerId: customerIdEl ? customerIdEl.value : "",
        customerEmail: customerEmailEl ? customerEmailEl.value : "",
        customerFirstName: customerFirstNameEl ? customerFirstNameEl.value : "",
        customerLastName: customerLastNameEl ? customerLastNameEl.value : "",
        shopDomain: shopDomainEl ? shopDomainEl.value : "",
        signature: signatureEl ? signatureEl.value : "",
      };
      await this.processShopParams(authData);

      const defaultFilterParams = defaultFilterParamsEl
        ? defaultFilterParamsEl.value
        : "";

      await this.setDefaultsFilterParams(defaultFilterParams);
    },
  },
  created() {
    this.resizeWindowHandler();
    window.addEventListener("resize", this.resizeWindowHandler);
    try {
      const product_id = document.querySelector("#servv_op_wgt_product_id");

      if (product_id) {
        this.setBundleViewMode(true);
      }
    } catch (e) {
      console.log(e);
    }
  },
  async mounted() {
    await this.getShopParams();
    await this.fetchWidgetSettings();
    // await this.fetchStoreDataShopifyApi();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeWindowHandler);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
