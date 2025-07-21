import axios from "axios";

export const getFilterType = async (type) => {
  try {
    const reqURL = `/wp-json/servv-plugin/v1/filters/${type}`;
    const response = await axios.get(reqURL, {
      headers: { "X-WP-Nonce": servvData.nonce },
    });

    if (response.status === 200) {
      return { type, data: response.data };
    }
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    return { type, data: null };
  }
};

export const getFilters = async (current_plan) => {
  const filterTypes = ["locations", "languages", "categories"];
  if (current_plan === 2) {
    filterTypes.push("members");
  }

  const isDev = servvData.servv_plugin_mode === "development";
  const results = [];

  if (isDev) {
    for (const type of filterTypes) {
      const result = await getFilterType(type);
      results.push(result);
    }
  } else {
    const fetchPromises = filterTypes.map((type) => getFilterType(type));
    const parallelResults = await Promise.all(fetchPromises);
    results.push(...parallelResults);
  }

  const filters = {};
  for (const result of results) {
    if (result?.data) {
      filters[result.type] = result.data;
    }
  }

  return filters;
};
