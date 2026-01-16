import { useEffect, useState } from "react";
import { useEventsLogic } from "./useEventsLogic";
const PLACEHOLDER_IMAGE = `${window.servvData.pluginUrl}public/assets/images/placeholder.png`;

const WP_API_BASE = "/wp-json/wp/v2/posts";

const imageCache = new Map();

const EventCard = ({ meeting, handleOpenEvent }) => {
  const postId = meeting?.post_id;

  const [imageSrc, setImageSrc] = useState(
    imageCache.get(postId) || PLACEHOLDER_IMAGE
  );

  useEffect(() => {
    if (!postId) return;

    if (imageCache.has(postId)) {
      const cached = imageCache.get(postId);
      setImageSrc((prev) => (prev === cached ? prev : cached));
      return;
    }

    const controller = new AbortController();

    fetch(`${WP_API_BASE}/${postId}?_embed`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((post) => {
        const url =
          post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          PLACEHOLDER_IMAGE;

        imageCache.set(postId, url);

        setImageSrc((prev) => (prev === url ? prev : url));
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          imageCache.set(postId, PLACEHOLDER_IMAGE);
        }
      });

    return () => controller.abort();
  }, [postId]);

  return (
    <div className="event-card">
      <div className="event-image-wrapper">
        <div className="event-image-container">
          <img
            src={imageSrc}
            alt={meeting?.title || "Event image"}
            className="event-image"
            loading="lazy"
            onClick={() => {
              handleOpenEvent({
                id: meeting.post_id,
                occurrence_id: meeting.occurrence_id,
              });
            }}
            onError={(e) => {
              e.currentTarget.src = PLACEHOLDER_IMAGE;
            }}
          />
        </div>
      </div>

      <div className="event-description">
        <h4 className="event-title">{meeting.title}</h4>
        {meeting.date ? (
          <p className="event-datetime">
            {meeting.date} | {meeting.time} | {meeting.timezone}
          </p>
        ) : (
          <p className="event-datetime">Recurring event</p>
        )}
      </div>
      <div className="event-badges">
        {!meeting.is_hidden ? (
          <div className="servv-event-badge badge-success">
            <span>On sale</span>
          </div>
        ) : (
          <div className="servv-event-badge badge-info">
            <span>Unlisted</span>
          </div>
        )}
        {meeting.recurrence !== "Recurring" ? (
          <div className="servv-event-badge badge-warning">
            <span>One-time</span>
          </div>
        ) : (
          <div className="servv-event-badge badge-brand">
            <span>Recurring</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
