import axios from "axios";

export const uploadMedia = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post("/wp-json/wp/v2/media", formData, {
    headers: { "X-WP-Nonce": servvData.nonce },
    timeout: 30000,
  });

  return response.data.source_url;
};
