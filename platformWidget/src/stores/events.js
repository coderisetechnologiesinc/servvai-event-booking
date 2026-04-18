import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { convertEventsDates } from "@/utilities.js";

export const useEventsStore = defineStore("events", () => {
  const meetingsList = ref([]);
  const meetingsListFetched = ref(false);
  const loading = ref(false);

  const pageSize = ref(12);
  const reqParams = ref("");
  const selectedDate = ref(null);
  const currentPage = ref(1);
  const allPages = ref({});
  const pagination = ref({
    currentPage: 1,
    pageSize: 12,
    totalPages: 0,
    totalRecords: 0,
    pageCount: 0,
  });
  // const imageCache = new Map();

  const getApiBase = () => {
    const raw =
      window.servvPlatformAjax?.base_url || window.servvPlatformAjax?.ajax_url;

    if (raw) {
      const withProtocol = raw.startsWith("http") ? raw : `https://${raw}`;
      return withProtocol
        .replace(/\/wp-admin\/admin-ajax\.php$/, "")
        .replace(/\/$/, "");
    }

    return window.location.origin;
  };

  // const fetchImageByPostId = async (postId) => {
  //   if (!postId) return null;
  //   if (imageCache.has(postId)) {
  //     return imageCache.get(postId);
  //   }

  //   try {
  //     const res = await axios.get(
  //       `${getApiBase()}/wp-json/wp/v2/posts/${postId}?_embed`,
  //     );
  //     const url =
  //       res.data._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  //     imageCache.set(postId, url);
  //     return url;
  //   } catch (e) {
  //     imageCache.set(postId, null);
  //     return null;
  //   }
  // };

  async function fetchEventsList({
    date = null,
    page = 1,
    filteringParams = "",
  } = {}) {
    loading.value = true;
    currentPage.value = page;

    if (window.__SERVV_STATIC__?.meetings) {
      if (!window.__SERVV_ALL_MEETINGS__) {
        const items = window.__SERVV_STATIC__.meetings.map((event) => ({
          ...event,
          product_price: event.product ? event.product.price : 0,
          wgtItemId: uuidv4(),
        }));
        let processed = convertEventsDates(items).sort((a, b) =>
          moment(a.start_time).diff(moment(b.start_time)),
        );

        // const uniquePostIds = [
        //   ...new Set(
        //     processed.map((m) => m?.shop_post_object_id).filter(Boolean),
        //   ),
        // ];
        // console.log("post ids", uniquePostIds);

        // await Promise.all(uniquePostIds.map((id) => fetchImageByPostId(id)));

        processed = processed.map((meeting) => {
          const image = meeting?.image_url
          return {
            ...meeting,
            featuredImage: image ? image || null : null,
          };
        });



        window.__SERVV_ALL_MEETINGS__ = processed;
      }

      const all = window.__SERVV_ALL_MEETINGS__;
      const pageSize_ = pageSize.value;
      const totalRecords = all.length;
      const totalPages = Math.ceil(totalRecords / pageSize_);
      const start = (page - 1) * pageSize_;
      const paginated = all.slice(start, start + pageSize_);

      meetingsList.value = {
        meetings: paginated,
        listIsEmpty: paginated.length === 0,
      };

      pagination.value = {
        currentPage: page,
        pageSize: pageSize_,
        totalPages,
        totalRecords,
        pageCount: totalPages,
      };

      meetingsListFetched.value = true;
      loading.value = false;
      return;
    }

    try {
      const filteringParamsString = reqParams.value || filteringParams || "";
      const searchDate = date || selectedDate.value;

      const params = new URLSearchParams();
      params.append("security", servvAjax.nonce);
      params.append("action", "servv_get_events_filtered_list");
      params.append("page", page);
      params.append("without_occurrences", true);
      params.append("page_size", pageSize.value);

      if (searchDate) {
        params.append("date", searchDate);
      }

      if (filteringParamsString.length > 0) {
        const parsed = new URLSearchParams(filteringParamsString);
        for (const [key, value] of parsed) {
          if (key !== "search") params.append(`${key}[]`, value);
          else params.append(key, value);
        }
      }

      const response = await axios.post(servvAjax.ajax_url, params);

      if (response?.status === 200 && response?.data?.meetings) {
        pagination.value = {
          currentPage: response.data.page_number || page,
          pageSize: response.data.page_size || pagination.value.pageSize,
          totalPages: response.data.page_count || 0,
          totalRecords: response.data.total_records || 0,
          pageCount: response.data.page_count || 0,
        };

        const items = response.data.meetings.map((event) => ({
          ...event,
          product_price: event.product ? event.product.price : 0,
          wgtItemId: uuidv4(),
        }));

        let meetingsProcessed = convertEventsDates(items).sort((a, b) =>
          moment(a.start_time).diff(moment(b.start_time)),
        );

        // meetingsProcessed = await Promise.all(
        //   meetingsProcessed.map(async (meeting) => {
        //     try {
        //       if (!meeting?.product?.post_id) {
        //         return { ...meeting, featuredImage: null };
        //       }

        //       const res = await fetchImageByPostId(meeting.product.post_id);

        //       const imageUrl =
        //         res.data._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        //         null;

        //       return {
        //         ...meeting,
        //         featuredImage: imageUrl,
        //       };
        //     } catch (e) {
        //       return {
        //         ...meeting,
        //         featuredImage: null,
        //       };
        //     }
        //   }),
        // );

        const listPackage = {
          meetings: meetingsProcessed,
          listIsEmpty: meetingsProcessed.length === 0,
        };

        if (!searchDate) {
          meetingsList.value = listPackage;
        } else {
          meetingsList.value = {
            ...listPackage,
            meetingsList: listPackage.meetings,
          };
        }

        meetingsListFetched.value = true;
      } else {
        meetingsList.value = { meetings: [], listIsEmpty: true };
        pagination.value.totalRecords = 0;
        pagination.value.totalPages = 0;
        meetingsListFetched.value = true;
      }
    } catch (err) {
      console.error("fetchEventsList error:", err);
      meetingsList.value = { meetings: [], listIsEmpty: true };
      pagination.value.totalRecords = 0;
      pagination.value.totalPages = 0;
    }

    loading.value = false;
  }

  async function fetchAllPagesForExport() {
    if (!meetingsListFetched.value) {
      await fetchEventsList({ page: 1 });
    }

    const total = pagination.value.totalPages || 1;
    const originalPage = currentPage.value;

    // Cache currently displayed page
    if (!allPages.value[originalPage]) {
      allPages.value[originalPage] = [...(meetingsList.value.meetings || [])];
    }

    // Fetch and cache any missing pages
    for (let p = 1; p <= total; p++) {
      if (allPages.value[p]) continue;
      await fetchEventsList({ page: p });
      allPages.value[p] = [...(meetingsList.value.meetings || [])];
    }

    // Restore original page view without an API call
    if (currentPage.value !== originalPage) {
      loadCachedPage(originalPage);
    }
  }

  function loadCachedPage(page) {
    if (!allPages.value[page]) return;
    meetingsList.value = {
      meetings: allPages.value[page],
      listIsEmpty: allPages.value[page].length === 0,
    };
    currentPage.value = page;
    pagination.value = { ...pagination.value, currentPage: page };
  }

  return {
    meetingsList,
    meetingsListFetched,
    loading,
    pageSize,
    currentPage,
    reqParams,
    selectedDate,
    pagination,
    allPages,
    fetchEventsList,
    fetchAllPagesForExport,
    loadCachedPage,
  };
});
