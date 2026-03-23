import axios from "axios";

const headers = () => ({ "X-WP-Nonce": servvData.nonce });

export const getEvent = async (postId, occurrenceId = null) => {
  const response = await axios.get(`/wp-json/servv-plugin/v1/event/${postId}`, {
    params: occurrenceId ? { occurrence_id: occurrenceId } : {},
    headers: headers(),
  });
  return response.data;
};

export const createEvent = async (location, data) => {
  const response = await axios.post(
    `/wp-json/servv-plugin/v1/events/${location}`,
    data,
    { headers: headers() },
  );
  return response.data;
};

export const updateEvent = async (postId, data, occurrenceId = null) => {
  let url = `/wp-json/servv-plugin/v1/event/${postId}`;
  if (occurrenceId) url += `?occurrence_id=${occurrenceId}`;
  const response = await axios.patch(url, data, { headers: headers() });
  return response.data;
};

export const getFeaturedImage = async (postId, signal = null) => {
  const WP_API_BASE = `${servvData.restUrl}wp/v2/posts`;
  const res = await fetch(`${WP_API_BASE}/${postId}?_embed`, { signal });
  if (!res.ok) throw new Error("Failed to fetch post");
  const post = await res.json();
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
};
