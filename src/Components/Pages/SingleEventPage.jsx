import PageWrapper from "./PageWrapper";
import EventDetails from "../PostEditor/EventDetails";
import BlockStack from "../Containers/BlockStack";
import InlineStack from "../Containers/InlineStack";
import PageActionButton from "../Controls/PageActionButton";
import PageHeader from "../Containers/PageHeader";
import axios from "axios";
import { useState } from "react";

import {
  createTicket,
  updateTicket,
  multipleTicketsCreate,
  multipleTicketsUpdate,
} from "../../utilities/tickets";

const SingleEventPage = ({
  attributes,
  setAttributes,
  postID = null,
  type = "offline",
  occurrenceId = null,
  adminSection = true,
  returnWithError = () => {},
  setSelectedEvent = () => {},
  filters = null,
  settings = null,
}) => {
  const [loading, setLoading] = useState(false);

  const handleEventUpdate = async () => {
    let requestURL = `/wp-json/servv-plugin/v1/event/${postID}`;
    if (occurrenceId) {
      requestURL += `?occurrence_id=${occurrenceId}`;
    }

    let data = {
      meeting: {
        topic: attributes.meeting.title,
        start_time: attributes.meeting.startTime,
        duration: attributes.meeting.duration,
        agenda: "",
        timezone: attributes.meeting.timezone,
        type: 1,
        recurrence: attributes.meeting.recurrence,
      },
      product: {
        price: attributes.product.price,
        quantity: attributes.product.quantity,
      },
      notifications: {
        google_calendar: attributes.notifications.google_calendar,
        disable_emails: attributes.notifications.disable_emails,
      },
      appointment: {
        is_appointment: false,
        slot_duration: 15,
      },
      types: {
        ...attributes.types,
      },
      custom_fields: {
        custom_field_1_name: "",
        custom_field_1_value: "",
        custom_field_2_name: "",
        custom_field_2_value: "",
      },
      tickets: attributes.tickets,
      registrants: attributes.registrants.filter((reg) => reg.status),
    };
    setLoading(true);
    const res = await axios.patch(requestURL, data, {
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    await updateTickets();
    setLoading(false);
    setSelectedEvent(null);
  };

  const updateTickets = async () => {
    if (!attributes.tickets || attributes.tickets.length === 0) return;
    const ticketsToCreate = attributes.tickets.filter((ticket) => !ticket.id);
    console.log(ticketsToCreate);
    const ticketsToUpdate = attributes.tickets.filter((ticket) => ticket.id);

    if (ticketsToCreate.length === 1) {
      await createTicket({
        postId: postID,
        token: servvData.nonce,
        ticket: ticketsToCreate[0],
        occurrenceId: occurrenceId,
      });
    } else if (ticketsToCreate.length > 1) {
      await multipleTicketsCreate({
        postId: postID,
        token: servvData.nonce,
        tickets: ticketsToCreate,
        occurrenceId: occurrenceId,
      });
    }
    if (ticketsToUpdate.length === 1) {
      await updateTicket({
        postId: postID,
        token: servvData.nonce,
        ticket: ticketsToUpdate[0],
        occurrenceId: occurrenceId,
      });
    } else if (ticketsToUpdate.length > 1) {
      await multipleTicketsUpdate({
        postId: postID,
        token: servvData.nonce,
        tickets: ticketsToUpdate,
        occurrenceId: occurrenceId,
      });
    }
  };

  return (
    <PageWrapper loading={loading}>
      <div className="servv-app max-w-[1080px] mx-auto h-full min-h-screen w-[65%] [@media(max-width:1110px)]:w-full">
        {/* <div className="border-l h-full border-gray-200 pl-4 w-full grow-[2] pr-4 max-w-[720px]"> */}
        <BlockStack gap={-1}>
          <PageHeader>
            <h1 className="text-display-sm mt-6">
              {occurrenceId ? "Occurrence Details" : "Event Details"}
            </h1>
            <InlineStack gap={2} align="right">
              <PageActionButton
                text="Cancel"
                // icon={<ArrowUturnLeftIcon className="button-icon" />}
                type="secondary"
                onAction={() => setSelectedEvent(null)}
              />
              <PageActionButton
                text="Save"
                // icon={<InboxArrowDownIcon className="primary button-icon" />}
                type="primary"
                onAction={() => handleEventUpdate()}
              />
            </InlineStack>
          </PageHeader>
          <EventDetails
            attributes={attributes}
            setAttributes={setAttributes}
            postID={postID}
            occurrenceId={occurrenceId}
            adminSection={adminSection}
            handleSetLoading={setLoading}
            returnWithError={returnWithError}
            filters={filters}
            settingsData={settings}
          />
        </BlockStack>
      </div>
      {/* </div> */}
    </PageWrapper>
  );
};
export default SingleEventPage;
