import axios from "axios";
import apiFetch from "@wordpress/api-fetch";

/* ------------------ helpers ------------------ */

const getNonceHeaders = () => {
  if (typeof servvData !== "undefined" && servvData.nonce) {
    return { "X-WP-Nonce": servvData.nonce };
  }
  return {};
};

/* ------------------ fetch registrants ------------------ */

export const fetchRegistrants = async ({
  postID,
  page = 1,
  occurrenceId = null,
}) => {
  let url = `/servv-plugin/v1/event/${postID}/registrants?page_size=20&page=${page}`;

  if (occurrenceId) {
    url += `&occurrence_id=${occurrenceId}`;
  }

  try {
    const res = await apiFetch({ path: url });

    const registrants =
      res.registrants
        ?.map((registrant) => {
          if (!registrant) return null;
          return {
            id: registrant.id,
            firstName: registrant.first_name,
            lastName: registrant.last_name,
            email: registrant.email,
          };
        })
        .filter(Boolean) || [];

    return {
      registrants,
      pagination: {
        pageNumber: res.page_number,
        pageCount: res.page_count,
      },
    };
  } catch (e) {
    return {
      registrants: [],
      pagination: { pageNumber: 1, pageCount: 1 },
    };
  }
};

/* ------------------ delete registrant ------------------ */

export const deleteRegistrant = async ({
  postID,
  registrantID,
  occurrenceId = null,
}) => {
  let path = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`;

  if (occurrenceId) {
    path += `?occurrence_id=${occurrenceId}`;
  }

  return apiFetch({
    path,
    method: "DELETE",
  });
};

/* ------------------ resend one ------------------ */

export const resendRegistrantNotification = async ({
  postID,
  registrantID,
  occurrenceId = null,
}) => {
  let path = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}/resend`;

  if (occurrenceId) {
    path += `?occurrence_id=${occurrenceId}`;
  }

  return apiFetch({
    path,
    method: "POST",
  });
};

/* ------------------ resend all ------------------ */

export const resendAllNotifications = async ({
  postID,
  occurrenceId = null,
}) => {
  let url = `/wp-json/servv-plugin/v1/event/${postID}/registrants/resend`;

  if (occurrenceId) {
    url += `?occurrence_id=${occurrenceId}`;
  }

  return axios({
    url,
    method: "POST",
    headers: getNonceHeaders(),
  });
};
