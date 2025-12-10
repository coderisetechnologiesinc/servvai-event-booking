import { Fragment, useState, useEffect } from "react";
import BlockStack from "../Containers/BlockStack";
import ButtonGroup from "../Controls/ButtonGroup";
import InputFieldControl from "../Controls/InputFieldControl";
import DatePickerControl from "./DatePickerControl";
import TimeInputControl from "../Controls/TimeInputControl";
import Badge from "../Containers/Badge";
import ProductDetails from "./ProductDetails";

import {
  PlusCircleIcon,
  EllipsisVerticalIcon,
  DocumentDuplicateIcon,
  PencilSquareIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { deleteTicket } from "../../utilities/tickets";
import moment from "moment";
const TicketsSection = ({
  adminSection,
  tickets,
  eventDetails,
  onTicketsChange,
  settings,
  postId,
  disabled,
  stripeAccount,
  handleSetLoading = () => {},
  productDetails,
  id,
  handleDetailsChange = () => {},
  occurrenceId,
  status = null,
}) => {
  const ticketTypes = ["Paid", "Free", "Donation"];
  const ticketsAvailability = ["Open", "Sales start & end"];
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketName, setTicketName] = useState("");
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [showTicketDropdown, setShowTicketDropdown] = useState(null);
  const [ticketQuantity, setTicketsQuantity] = useState(null);
  const [ticketPrice, setTicketPrice] = useState(null);
  const [ticketPriceInput, setTicketPriceInput] = useState("");
  const [ticketAvailability, setTicketAvailability] = useState(0);
  const [timeFormat, setTimeFormat] = useState("hh:mm a");

  useEffect(() => {
    if (status === "publish" || status === "admin") return;

    if (
      settings &&
      settings.settings &&
      settings.current_plan &&
      settings.current_plan.id === 1
    ) {
      if (
        settings.settings.admin_dashboard &&
        settings.settings.admin_dashboard.default_quantity
      ) {
        if (productDetails.quantity !== 1) {
          handleDetailsChange("quantity", 1);
        }
      } else {
        handleDetailsChange("quantity", 1);
      }
    }
  }, [status, settings]);

  const handleTicketDelete = async (index) => {
    let currentTickets = [...tickets];
    if (currentTickets[index].id) {
      handleSetLoading(true);
      const response = await deleteTicket({
        postId: postId,
        token: servvData.nonce,
        ticketId: currentTickets[index].id,
      });
      if (response && response.status === 200) {
        currentTickets.splice(index, 1);
        onTicketsChange(currentTickets);
        if (selectedTicket === index) setSelectedTicket(null);
        setShowTicketDropdown(null);
      }
      handleSetLoading(false);
    } else {
      currentTickets.splice(index, 1);
      onTicketsChange(currentTickets);
      if (selectedTicket === index) setSelectedTicket(null);
      setShowTicketDropdown(null);
    }
  };

  const handleTicketChange = (field, value) => {
    let editedTicket = [...tickets];
    editedTicket[selectedTicket][field] = value;
    onTicketsChange(editedTicket);
  };

  const handleTimeFormatChange = () => {
    if (!settings) return;
    else if (
      settings &&
      settings.settings &&
      settings.settings.time_format_24_hours
    ) {
      // console.log(settings.settings.time_format_24_hours);
      setTimeFormat("HH:mm");
    }
  };
  const handleSetTicketForEdit = (index) => {
    setSelectedTicket(index);

    if (tickets[index].price > 0) {
      setSelectedTicketType(0);
    } else if (tickets[index].is_donation) {
      setSelectedTicketType(2);
    } else {
      setSelectedTicketType(1);
    }
    setShowTicketDropdown(null);
  };
  useEffect(() => {
    handleTimeFormatChange();
  }, [settings]);

  const renderTickets = () => {
    return tickets.map((ticket, index) => {
      return (
        <Fragment>
          <div className="w-full border border-gray-200 bg-white rounded-lg flex flex-row p-lg relative">
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-1 justify-start items-center">
                <span className="text-sm font-semibold text-gray-700">
                  {ticket?.name || ""}
                </span>
                <span className="text-sm font-regular text-gray-600">
                  {ticket?.price
                    ? ticket.price +
                      ` ${settings.currency ? settings.currency : "CAD"}`
                    : "Free"}
                </span>
              </div>
              <div className="flex flex-row gap-2">
                {ticket.quantity ? (
                  <Badge
                    text={`${
                      ticket.quantity > 1
                        ? ticket.quantity + " " + "tickets"
                        : ticket.quantity + " " + "ticket"
                    }`}
                    color="success"
                    type="pill-colour"
                  />
                ) : (
                  <Badge
                    text={"Unlimited quantity"}
                    color="success"
                    type="pill-colour"
                  />
                )}
                <span className="self-end justify-self-end">
                  {!ticket.id && (
                    <Badge text={"Draft"} color="gray" type="pill-outline" />
                  )}
                </span>
              </div>
            </div>
            {(adminSection || !ticket.id) && (
              <button
                className="justify-self-end ml-auto"
                onClick={
                  showTicketDropdown === index
                    ? () => setShowTicketDropdown(null)
                    : () => setShowTicketDropdown(index)
                }
              >
                <EllipsisVerticalIcon className="w-6 fill-gray-700" />
              </button>
            )}
            {showTicketDropdown === index && (
              <div
                className="absolute top-full right-0 mt-2
                transform translate-x-full
                bg-white border border-gray-200 rounded-lg shadow-lg z-50
                p-4 flex flex-col gap-4
                transition-all duration-200 ease-out
                opacity-100 scale-100"
              >
                {ticket?.name && (
                  <div className="text-sm font-semibold text-gray-700">
                    <span>{ticket?.name}</span>
                    <span> </span>
                    {ticket?.price && (
                      <span className="font-regular">
                        {ticket?.price +
                          ` ${settings.currency ? settings.currency : "CAD"}`}
                      </span>
                    )}
                  </div>
                )}
                {/* {ticket?.price && (
                  <div className="text-sm font-regular text-gray-600"></div>
                )} */}
                {/* {ticket?.name ||
                  (ticket?.price && (
                    <div className="w-full border-b border-gray-200 flex-nowrap"></div>
                  ))} */}
                <button
                  className="flex flex-row justify-start gap-2 w-full flex-nowrap"
                  onClick={() => {
                    handleSetTicketForEdit(index);
                  }}
                >
                  <PencilSquareIcon className="w-6 stroke-white fill-black" />
                  <span className="text-sm font-medium text-gray-700">
                    {t("Edit ticket")}
                  </span>
                </button>
                <button
                  className="flex flex-row justify-start gap-2 w-full flex-nowrap"
                  onClick={() => handleTicketAdd({ ticket: ticket })}
                >
                  <DocumentDuplicateIcon className="w-6 stroke-white fill-black" />
                  <span className="text-sm font-medium text-gray-700">
                    {t("Duplicate ticket")}
                  </span>
                </button>
                <div className="w-full border-b border-gray-200"></div>
                <button
                  className="flex flex-row justify-start gap-2 w-full flex-nowrap"
                  onClick={() => handleTicketDelete(index)}
                >
                  <XCircleIcon className="w-6 stroke-white fill-black" />
                  <span className="text-sm font-medium text-gray-700">
                    {t("Delete ticket")}
                  </span>
                </button>
              </div>
            )}
          </div>
        </Fragment>
      );
    });
  };

  const handleTicketTypeChange = (val) => {
    const type = ticketTypes.indexOf(val);
    let currentTickets = [...tickets];

    if (type === 0) {
      currentTickets[selectedTicket].price = 0;
      if (
        settings &&
        settings.settings &&
        settings.settings.admin_dashboard &&
        settings.settings.admin_dashboard.default_price
      ) {
        currentTickets[selectedTicket].price =
          settings.settings.admin_dashboard.default_price;
        setTicketPriceInput(settings.settings.admin_dashboard.default_price);
      }
      currentTickets[selectedTicket].is_donation = false;
    }
    if (type === 1) {
      delete currentTickets[selectedTicket].price;
      currentTickets[selectedTicket].is_donation = false;
    }
    if (type == 2) {
      delete currentTickets[selectedTicket].price;
      currentTickets[selectedTicket].is_donation = true;
    }

    onTicketsChange(currentTickets);

    setSelectedTicketType(type);
  };

  const handleTicketNameChange = (val) => {
    handleTicketChange("name", val);
  };

  const handleTicketPriceChange = (val) => {
    let currentValue = val;

    if (val.indexOf(".") === currentValue.length - 1) {
      currentValue += "00";
    }
    const newPrice = Number.parseFloat(currentValue);

    handleTicketChange("price", isNaN(newPrice) ? "" : newPrice);
    setTicketPriceInput(val);
  };

  const handleTicketsQuantityChange = (val) => {
    if (isNaN(Number.parseInt(val)) && Number.parseInt(val) < 0)
      handleTicketChange("quantity", 0);
    else
      handleTicketChange(
        "quantity",
        Number.parseInt(val) <= 1000 ? Number.parseInt(val) : 1000
      );
  };

  const handleTicketAvailabilityChange = (val) => {
    const type = ticketsAvailability.indexOf(val);
    const currentTickets = [...tickets];

    if (type === 0) {
      if (currentTickets[selectedTicket].start_datetime) {
        delete currentTickets[selectedTicket].start_datetime;
        delete currentTickets[selectedTicket].end_datetime;
      }
    }
    if (type === 1) {
      // let currentStartTime = eventDetails.startTime
      //   ? eventDetails.timezone
      //     ? moment(eventDetails.startTime).tz(eventDetails.timezone)
      //     : moment(eventDetails.startTime)
      //   : eventDetails.timezone
      //   ? moment().tz(eventDetails.timezone)
      //   : moment();
      // currentTickets[selectedTicket].start_datetime = currentStartTime.format();
      // currentTickets[selectedTicket].end_datetime = moment(currentStartTime)
      //   .add(1, "d")
      //   .format();
    }
    setTicketAvailability(type);
    onTicketsChange(currentTickets);
  };

  const handleTicketAdd = ({ ticket = null }) => {
    let currentTickets = [...tickets];
    if (ticket) {
      currentTickets.push({ ...ticket, id: null });
    } else {
      let newTicket = { quantity: null };

      if (
        settings &&
        settings.settings &&
        settings.settings.admin_dashboard &&
        settings.settings.admin_dashboard.default_price &&
        !disabled &&
        selectedTicketType === 0
      ) {
        newTicket.price = Number.parseFloat(
          settings.settings.admin_dashboard.default_price
        );
      }
      if (
        settings &&
        settings.settings &&
        settings.settings.admin_dashboard &&
        settings.settings.admin_dashboard.default_quantity
      ) {
        newTicket.quantity = Number.parseInt(
          settings.settings.admin_dashboard.default_quantity
        );
      }
      currentTickets.push({ ...newTicket });
    }

    setSelectedTicket(currentTickets.length - 1);
    setTicketPriceInput(
      ticket
        ? ticket.price
        : currentTickets[currentTickets.length - 1].price || 0
    );
    if (ticket && ticket.is_donation) {
      setSelectedTicketType(2);
    } else if (ticket && ticket.price > 0) {
      setSelectedTicketType(0);
    } else {
      setSelectedTicketType(1);
    }
    onTicketsChange(currentTickets);
    setShowTicketDropdown(null);
  };

  const handleTicketCancel = () => {
    setSelectedTicket(null);
  };

  useEffect(() => {
    if (
      !tickets ||
      tickets.length === 0 ||
      selectedTicket === null ||
      tickets.length - 1 < selectedTicket
    )
      return;

    if (tickets[selectedTicket].name) {
      setTicketName(tickets[selectedTicket].name);
    }

    if (tickets[selectedTicket].price) {
      setTicketPrice(tickets[selectedTicket].price);
      setTicketPriceInput(tickets[selectedTicket].price);
    }
    if (tickets[selectedTicket].quantity) {
      setTicketsQuantity(tickets[selectedTicket].quantity);
    }

    if (tickets[selectedTicket].is_donation === true) {
      setSelectedTicketType(2);
    } else if (tickets[selectedTicket].price > 0) {
      setSelectedTicketType(0);
    } else {
      setSelectedTicketType(1);
    }
    // console.log(
    //   tickets[selectedTicket].start_datetime,
    //   tickets[selectedTicket].end_datetime
    // );
    if (
      tickets[selectedTicket].start_datetime !== undefined ||
      tickets[selectedTicket].end_datetime !== undefined
    ) {
      setTicketAvailability(1);
    } else {
      setTicketAvailability(0);
    }
  }, [selectedTicket]);

  const handleSaleStartDateChange = (date) => {
    const currentTickets = [...tickets];
    // console.log("newDate", date);
    // console.log("time", currentTickets[selectedTicket].start_datetime);
    const currentTime = currentTickets[selectedTicket].start_datetime
      ? moment(currentTickets[selectedTicket].start_datetime).tz(
          eventDetails.timezone || "US/Pacific"
        )
      : moment(eventDetails.startTime).tz(
          eventDetails.timezone || "US/Pacific"
        );
    // console.log("currentTime", currentTime);
    const selectedDate = moment(date).startOf("day");
    // console.log("selectedDate", selectedDate);
    currentTime.set(
      {
        year: selectedDate.year(),
        month: selectedDate.month(),
        date: selectedDate.date(),
      },
      true
    );
    // console.log("selectedDate+time", currentTime);

    currentTickets[selectedTicket].start_datetime = currentTime.toISOString();

    onTicketsChange(currentTickets);
  };

  const handleSaleEndDateChange = (date) => {
    const currentTickets = [...tickets];

    const currentTime = currentTickets[selectedTicket].end_datetime
      ? moment(currentTickets[selectedTicket].end_datetime).tz(
          eventDetails.timezone || "US/Pacific"
        )
      : moment(eventDetails.startTime)
          .add(1, "d")
          .tz(eventDetails.timezone || "US/Pacific");

    const selectedDate = moment(date).tz(eventDetails.timezone || "US/Pacific");

    selectedDate.set({
      hour: currentTime.get("hour"),
      minute: currentTime.get("minute"),
      second: currentTime.get("second"),
    });

    currentTickets[selectedTicket].end_datetime = selectedDate.toISOString();

    onTicketsChange(currentTickets);
  };

  const getStartDate = () => {
    if (tickets[selectedTicket].start_datetime) {
      // console.log(tickets[selectedTicket].start_datetime);
      // const startMoment = moment(tickets[selectedTicket].start_datetime);

      // console.log(startMoment.format("YYYY-MM-DD").split("T")[0]);

      return {
        startDate: tickets[selectedTicket].start_datetime.split("T")[0],
        label: tickets[selectedTicket].start_datetime.split("T")[0],
      };
    }
    return { startDate: null, label: "Select a date" };
  };

  const getEndDate = () => {
    if (tickets[selectedTicket].end_datetime) {
      // const endMoment = moment(tickets[selectedTicket].end_datetime).tz(
      //   eventDetails.timezone || "US/Pacific"
      // );

      return {
        endDate: tickets[selectedTicket].end_datetime.split("T")[0],
        label: tickets[selectedTicket].end_datetime.split("T")[0],
      };
    }
    return { endDate: null, label: "Select a date" };
  };

  const getStartTime = () => {
    if (tickets[selectedTicket].start_datetime) {
      return moment(tickets[selectedTicket].start_datetime).tz(
        eventDetails.timezone || "US/Pacific"
      );
    }
    return moment().tz(eventDetails.timezone || "US/Pacific");
  };

  const getEndTime = () => {
    if (tickets[selectedTicket].end_datetime) {
      return moment(tickets[selectedTicket].end_datetime).tz(
        eventDetails.timezone || "US/Pacific"
      );
    }
    return moment().tz(eventDetails.timezone || "US/Pacific");
  };

  const handleSaleStartTimeChange = (newVal) => {
    const currentDateTime = tickets[selectedTicket].start_datetime
      ? moment(tickets[selectedTicket].start_datetime).tz(
          eventDetails.timezone || "US/Pacific"
        )
      : moment(eventDetails.startTime).tz(
          eventDetails.timezone || "US/Pacific"
        );

    const selectedTime = moment(newVal).tz(
      eventDetails.timezone || "US/Pacific"
    );

    currentDateTime.set({
      hour: selectedTime.get("hour"),
      minute: selectedTime.get("minute"),
      second: 0,
    });

    const currentTickets = [...tickets];
    currentTickets[selectedTicket].start_datetime =
      currentDateTime.toISOString();

    onTicketsChange(currentTickets);
  };

  const handleSaleEndTimeChange = (newVal) => {
    const currentDateTime = tickets[selectedTicket].end_datetime
      ? moment(tickets[selectedTicket].end_datetime).tz(
          eventDetails.timezone || "US/Pacific"
        )
      : moment(eventDetails.startTime).tz(
          eventDetails.timezone || "US/Pacific"
        );

    const selectedTime = moment(newVal).tz(
      eventDetails.timezone || "US/Pacific"
    );

    currentDateTime.set({
      hour: selectedTime.get("hour"),
      minute: selectedTime.get("minute"),
      second: 0,
    });

    const currentTickets = [...tickets];
    currentTickets[selectedTicket].end_datetime = currentDateTime.toISOString();

    onTicketsChange(currentTickets);
  };

  const checkTimeDiff = () => {
    const startDate = tickets[selectedTicket].start_datetime;
    const endDate = tickets[selectedTicket].end_datetime;
    if (startDate && endDate) {
      let start = moment(startDate);
      let end = moment(endDate);
      return start.isAfter(end);
    } else return false;
  };

  const ticketsMods = ["Single", "Multiple"];
  const [selectedTicketsMode, setSelectedTicketMode] = useState(ticketsMods[0]);
  const handleTicketModeChange = (val) => {
    setSelectedTicketMode(val);
  };
  useEffect(() => {
    if (tickets.length > 0) {
      setSelectedTicketMode(ticketsMods[1]);
    }
  }, [tickets]);
  // useEffect(() => {
  //   if (ticketAvailability === 1) {
  //     console.log(moment.utc(getEndDate().endDate).toISOString());
  //   }
  // }, [ticketAvailability]);
  return (
    <Fragment>
      <div className={`section-container`}>
        <div className="section-heading">{t("Tickets")}</div>
        {/* <ButtonGroup
          buttons={ticketsMods}
          active={selectedTicketsMode}
          onChange={handleTicketModeChange}
          disabled={disabled || tickets.length > 0}
        /> */}
        {disabled && (
          <ProductDetails
            productDetails={productDetails}
            id={postId}
            handleDetailsChange={handleDetailsChange}
            stripeAccount={stripeAccount}
          />
        )}
        {!disabled && (
          <Fragment>
            {tickets?.length === 0 && (
              <p className="text-gray-600 font-regular text-sm">
                {t("Click the button below to create a new ticket")}
              </p>
            )}
            {adminSection && eventDetails.recurrence && !occurrenceId && (
              <p className="text-gray-600 font-regular text-sm">
                {t(
                  "This is a recurring event. To see tickets for a specific date,\r\n                please view that occurrence."
                )}
              </p>
            )}

            {(tickets?.length === 0 || tickets?.length > 0) && (
              <button
                className={`flex flex-row gap-2 text-brand-700 fill-brand-700 items-center ${
                  disabled ? "filter grayscale" : ""
                }`}
                onClick={handleTicketAdd}
                disabled={disabled}
              >
                <PlusCircleIcon className="w-4" />
                <span className="text-[16px]">{t("Create new ticket")}</span>
              </button>
            )}
            {tickets?.length > 0 && renderTickets()}
            {tickets?.length > 0 && selectedTicket !== null && (
              <fieldset className="input-container-col">
                <BlockStack gap={4}>
                  {/* <legend className="text-gray-400 font-semibold text-sm">
                Create new ticket
              </legend> */}
                  <ButtonGroup
                    title="Type"
                    buttons={ticketTypes}
                    active={ticketTypes[selectedTicketType]}
                    onChange={handleTicketTypeChange}
                    disabled={!stripeAccount || !stripeAccount.id || disabled}
                  />
                  {settings && (!stripeAccount || !stripeAccount.id) && (
                    <div className="section-description text-brand-600">
                      Note: To create paid and donation tickets, you need to
                      connect your Stripe account.
                    </div>
                  )}
                  <div className="input-container-col">
                    <label className="section-description">{t("Name")}</label>
                    <InputFieldControl
                      value={tickets[selectedTicket]?.name || ""}
                      onChange={handleTicketNameChange}
                      disabled={disabled}
                      type="text"
                      width={"100%"}
                      align="left"
                    />
                  </div>
                  {selectedTicketType === 0 && (
                    <div className="input-container-col">
                      <label className="section-description">
                        {t("Ticket price")}
                      </label>
                      <InputFieldControl
                        value={ticketPriceInput}
                        // value={ticketPrice}
                        onChange={handleTicketPriceChange}
                        type="text"
                        width={"100%"}
                        disabled={disabled}
                        align="left"
                        placeholder="0.00"
                        prefix="$"
                      />
                    </div>
                  )}
                  <div className="input-container-col">
                    <label className="section-description">
                      {t("Quantity")}
                    </label>
                    <InputFieldControl
                      value={tickets[selectedTicket]?.quantity || ""}
                      onChange={handleTicketsQuantityChange}
                      type="number"
                      width={"100%"}
                      minValue="0"
                      // maxValue="1000"
                      disabled={disabled}
                      align="left"
                      placeholder="0"
                    />
                  </div>
                  <ButtonGroup
                    title="Availability"
                    buttons={ticketsAvailability}
                    active={ticketsAvailability[ticketAvailability]}
                    onChange={handleTicketAvailabilityChange}
                  />
                  {ticketAvailability === 1 && (
                    <Fragment>
                      <p className="text-sm text-regular text-gray-500">
                        {`Timezone: ${
                          eventDetails.timezone
                            ? eventDetails.timezone
                            : "Not selected"
                        }`}
                      </p>
                      {checkTimeDiff() && (
                        <p className="text-sm text-regular text-error-500">
                          {t("Sales start must be erlier then sales end.")}
                        </p>
                      )}
                      <div className="flex flex-row justify-between gap-8">
                        <div className="input-container-col w-full">
                          <label className="section-description text-gray-700">
                            {t("Sales start")}
                          </label>
                          <div className="pt-">
                            <DatePickerControl
                              label={getStartDate().label}
                              date={getStartDate().startDate}
                              onChange={handleSaleStartDateChange}
                              variant="fields"
                              disabled={disabled}
                            />
                          </div>
                        </div>
                        <div className="input-container-col">
                          {/* <label className="section-description">Start time</label> */}
                          <TimeInputControl
                            time={getStartTime()}
                            label={"Start time"}
                            timeFormat={timeFormat}
                            onChange={handleSaleStartTimeChange}
                            disabled={disabled}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row justify-between gap-8">
                        <div className="input-container-col w-full">
                          <label className="section-description text-gray-700">
                            {t("Sales end")}
                          </label>
                          <div className="">
                            <DatePickerControl
                              label={getEndDate().label}
                              date={getEndDate().endDate}
                              onChange={handleSaleEndDateChange}
                              disabled={disabled}
                              variant="fields"
                            />
                          </div>
                        </div>
                        <div className="input-container-col">
                          {/* <label className="section-description">Start time</label> */}
                          <TimeInputControl
                            time={getEndTime()}
                            label={"End time"}
                            timeFormat={timeFormat}
                            onChange={handleSaleEndTimeChange}
                            disabled={disabled}
                          />
                        </div>
                      </div>
                    </Fragment>
                  )}
                  <div className="flex flex-row justify-start gap-lg mt-[1em]">
                    <button
                      className="rounded-lg border border-gray-300 text-sm text-gray-500 font-semibold px-lg py-md bg-white shadow-combined-gray disabled:border-gray-100 text-gray-200"
                      onClick={handleTicketCancel}
                      disabled={disabled}
                    >
                      {t("Cancel")}
                    </button>
                    <button
                      className="rounded-lg border border-brand-300 text-sm text-brand-700 font-semibold px-lg py-md bg-white shadow-combined-brand"
                      onClick={() => {
                        setSelectedTicket(null);
                      }}
                      disabled={disabled}
                    >
                      Done
                    </button>
                  </div>
                </BlockStack>
              </fieldset>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
export default TicketsSection;
