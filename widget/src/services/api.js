import axios from "axios";

const apiConfig = {
  headers: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Content-Type, SERVV-SHOP-TYPE, SERVV-SHOP-DOMAIN, SERVV-CUSTOMER-ID, SERVV-CUSTOMER-EMAIl, SERVV-CUSTOMER-FIRST-NAME, SERVV-CUSTOMER-LAST-NAME, SERVV-SIGNATURE",
    },
  },
  responseType: "json",
};

export default axios.create(apiConfig);
