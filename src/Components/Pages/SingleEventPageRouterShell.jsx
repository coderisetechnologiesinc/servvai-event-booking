import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useServvStore } from "../../store/useServvStore";
import { useState } from "react";
import SingleEventPage from "./SingleEventPage";
import PageWrapper from "./PageWrapper";
const SingleEventPageRouterShell = () => {
  const { type, id } = useParams();
  const [searchParams] = useSearchParams();

  const occurrenceId = searchParams.get("occ");
  const navigate = useNavigate();

  const { filtersList, settings } = useServvStore();
  const [attributes, setAttributes] = useState({
    meeting: {},
    product: {},
    notifications: {},
    tickets: [],
  });
  const mergeAttributes = (patch) => {
    setAttributes((prev) => ({ ...prev, ...patch }));
  };
  const returnWithError = () => navigate("/events");

  if (!settings || !attributes) {
    return (
      <PageWrapper loading={true}>
        <div style={{ height: 200 }} />
      </PageWrapper>
    );
  }
  console.log(occurrenceId);
  return (
    <SingleEventPage
      attributes={attributes}
      setAttributes={mergeAttributes}
      postID={id}
      type={type}
      occurrenceId={occurrenceId ?? null}
      adminSection={true}
      returnWithError={returnWithError}
      setSelectedEvent={() => navigate("/events")}
      filters={filtersList}
      settings={settings}
    />
  );
};

export default SingleEventPageRouterShell;
