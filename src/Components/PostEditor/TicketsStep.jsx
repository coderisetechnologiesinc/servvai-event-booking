import { TicketIcon, PlusIcon, MinusIcon, CheckMark } from "../../assets/icons";
import { useState, useEffect, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import RadioGroup from "../Controls/RecurrenceRadioGroup";
import NewInputControl from "../Controls/NewInputControl";
import NewTimeInputControl from "../Controls/NewTimeInputControl";
import DatePickerControl from "./DatePickerControl";
import moment from "moment";
const TicketsStep = ({
  attributes,
  setAttributes,
  changeStep,
  stripeConnected,
  isNew,
  settings,
  isError,
  setError = () => {},
}) => {
  const {
    quantity = 100,
    availability = "open", // "open" | "scheduled"
  } = attributes || {};
  const MIN_QTY = 1;
  const [MAX_QTY, SET_MAX_QTY] = useState(
    settings.free_registrants_limit || 15,
  );
  const [defaultQty, setDefaultQty] = useState(1);
  const [defaultPrice, setDefaultPrice] = useState(1);
  const isFreePlanRestricted =
    !stripeConnected || settings?.current_plan?.id === 1;

  const AVAILABILITY_OPTIONS = [
    { value: "open", label: "Open" },
    { value: "scheduled", label: "Sales Start & End" },
  ];
  const TIYCKET_TYPES = [
    { value: "free", label: "Free" },
    { value: "paid", label: "Paid" },
    { value: "donation", label: "Donation" },
  ];

  const tickets = attributes?.tickets || [];
  const timezone = attributes?.meeting?.timezone || "UTC";

  const updateTickets = (next) => {
    const updated = next.map((ticket) => {
      if (ticket.action === "remove") return ticket;

      if (ticket.event_id) {
        return {
          ...ticket,
          action: ticket.action || "update",
        };
      }

      return ticket;
    });

    setAttributes({ tickets: updated });
  };

  const updateTicket = (id, patch) => {
    updateTickets(tickets.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  };
  const getTimeFromISO = (iso) => {
    if (!iso) return "";
    return moment(iso).tz(timezone).format("HH:mm");
  };

  useEffect(() => {
    const visibleFreeTickets = tickets.filter(
      (t) => t.action !== "remove" && t.type === "free",
    );

    const usedFreeQuantity = visibleFreeTickets.reduce(
      (sum, ticket) => sum + Number(ticket.quantity || 0),
      0,
    );

    const remaining = Math.max(
      0,
      (settings.free_registrants_limit || 15) - usedFreeQuantity,
    );

    SET_MAX_QTY(remaining);
  }, [tickets, settings.free_registrants_limit]);

  useEffect(() => {
    if (settings?.settings?.admin_dashboard) {
      let adminSettings = JSON.parse(settings.settings.admin_dashboard);
      let defaultQtyFromSettings =
        Number.parseInt(adminSettings.default_quantity) || 1;
      setDefaultQty(defaultQtyFromSettings);
      let defaultPriceFromSettings =
        Number.parseFloat(adminSettings.default_price) || 1;
      setDefaultPrice(defaultPriceFromSettings);
    }
  }, [settings]);

  useEffect(() => {
    if (!isFreePlanRestricted) return;

    if (!tickets.length) {
      setAttributes({
        tickets: [
          {
            id: uuidv4(),
            type: "free",
            title: "Standard",
            quantity: defaultQty,
            availability: "open",
          },
        ],
      });
    }
  }, [isFreePlanRestricted]);

  const setTimeToISO = (iso, time) => {
    const base = iso ? moment(iso).tz(timezone) : moment().tz(timezone);

    let hour, minute;

    if (typeof time === "string") {
      [hour, minute] = time.split(":").map(Number);
    } else if (typeof time === "object" && time !== null) {
      ({ hour, minute } = time);

      if (time.period === "PM" && hour < 12) hour += 12;
      if (time.period === "AM" && hour === 12) hour = 0;
    } else {
      console.warn("Unsupported time format:", time);
      return base.toISOString();
    }

    base.set({ hour, minute, second: 0 });
    return base.toISOString();
  };

  const getSaleStartDate = () => {
    if (!activeTicket?.start_datetime) {
      return { date: null, label: "Select date" };
    }
    return {
      date: activeTicket.start_datetime.split("T")[0],
      label: activeTicket.start_datetime.split("T")[0],
    };
  };

  const getSaleEndDate = () => {
    if (!activeTicket?.end_datetime) {
      return { date: null, label: "Select date" };
    }
    return {
      date: activeTicket.end_datetime.split("T")[0],
      label: activeTicket.end_datetime.split("T")[0],
    };
  };

  const getSaleStartTime = () => {
    return activeTicket?.start_datetime
      ? moment(activeTicket.start_datetime).tz(timezone)
      : moment().tz(timezone);
  };

  const getSaleEndTime = () => {
    return activeTicket?.end_datetime
      ? moment(activeTicket.end_datetime).tz(timezone)
      : moment().add(1, "hour").tz(timezone);
  };

  const handleSaleStartDateChange = (date) => {
    const base = activeTicket?.start_datetime
      ? moment(activeTicket.start_datetime).tz(timezone)
      : moment().tz(timezone);

    const selected = moment(date).tz(timezone);

    base.set({
      year: selected.year(),
      month: selected.month(),
      date: selected.date(),
    });

    updateTicket(activeTicketId, {
      start_datetime: base.toISOString(),
    });
  };

  const handleSaleEndDateChange = (date) => {
    const base = activeTicket?.end_datetime
      ? moment(activeTicket.end_datetime).tz(timezone)
      : moment().add(1, "day").tz(timezone);

    const selected = moment(date).tz(timezone);

    base.set({
      year: selected.year(),
      month: selected.month(),
      date: selected.date(),
    });

    updateTicket(activeTicketId, {
      end_datetime: base.toISOString(),
    });
  };
  const handleSaleStartTimeChange = (momentObj) => {
    if (!momentObj) return;

    updateTicket(activeTicketId, {
      start_datetime: momentObj.toISOString(),
    });
  };

  const handleSaleEndTimeChange = (momentObj) => {
    if (!momentObj) return;

    updateTicket(activeTicketId, {
      end_datetime: momentObj.toISOString(),
    });
  };

  const [activeTicketId, setActiveTicketId] = useState(tickets[0]?.id || null);
  const visibleTickets = tickets.filter((t) => t.action !== "remove");

  const removeTicket = (id) => {
    const ticketIndex = tickets.findIndex((t) => t.id === id);
    if (ticketIndex === -1) return;

    const ticket = tickets[ticketIndex];

    if (ticket.event_id) {
      const updatedTickets = [...tickets];
      updatedTickets[ticketIndex] = {
        ...ticket,
        action: "remove",
      };

      updateTickets(updatedTickets);
      setActiveTicketId(null);
    } else {
      updateTickets(tickets.filter((t) => t.id !== id));
      setActiveTicketId(null);
    }
  };

  useEffect(() => {
    if (!activeTicketId && tickets.length) {
      setActiveTicketId(tickets[0].id);
    }
  }, [tickets]);

  const activeTicket = visibleTickets.find((t) => t.id === activeTicketId);

  useEffect(() => {
    if (!activeTicket && visibleTickets.length) {
      setActiveTicketId(visibleTickets[0].id);
    }
    if (!visibleTickets.length) {
      setActiveTicketId(null);
    }
  }, [visibleTickets, activeTicket]);

  const qty = activeTicket?.quantity ?? MIN_QTY;
  const isFreeTicket = activeTicket?.type === "free";

  const activeFreeQty =
    isFreeTicket && typeof activeTicket?.quantity === "number"
      ? activeTicket.quantity
      : 0;

  const MAX_TICKET_QTY = isFreeTicket ? activeFreeQty + MAX_QTY : 500;
  const freeQuotaExcludingActive = (() => {
    if (!activeTicket) return MAX_QTY;

    if (activeTicket.type !== "free") {
      // active ticket was not consuming free quota
      return MAX_QTY;
    }

    // active ticket WAS consuming free quota → add it back
    return MAX_QTY + Number(activeTicket.quantity || 0);
  })();

  const addTicket = () => {
    const remainingFreeQuota = MAX_QTY;

    const initialQty =
      remainingFreeQuota > 0 ? Math.min(defaultQty, remainingFreeQuota) : 0;

    const newTicket = {
      id: uuidv4(),
      type: "free",
      title: "Standard",
      quantity: initialQty,
      availability: "open",
    };

    updateTickets([...tickets, newTicket]);
    setActiveTicketId(newTicket.id);
  };

  return (
    <div className="step__wrapper servv_tickets">
      {/* Header */}
      <div className="step__header">
        <TicketIcon className="step__header_icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Ticket Types</h4>
          <p className="step__description">
            Set up ticket categories and total quantity
          </p>
        </div>
        {!isNew &&
          attributes.meeting?.occurrences &&
          attributes.meeting?.occurrences?.length > 0 && (
            <p className="step__description">
              This is a recurring event. To see tickets for a specific date,
              please view that occurrence.
            </p>
          )}
      </div>

      {/* Content */}
      <div className="step__content">
        <button
          type="button"
          className="servv_ticket_add"
          onClick={addTicket}
          disabled={isFreePlanRestricted}
        >
          <PlusIcon />
          <span>Add ticket</span>
        </button>
        <div className="step__content_block">
          {tickets
            .filter((t) => t.action !== "remove")
            .map((ticket) => (
              <div
                key={ticket.id}
                className={`servv_ticket_card ${
                  activeTicketId === ticket.id
                    ? "servv_ticket_card--active"
                    : ""
                }`}
                onClick={() => setActiveTicketId(ticket.id)}
              >
                <div className="servv_ticket_card__title">
                  <span>
                    {ticket.title || "Untitled"} ({ticket.type})
                  </span>

                  <button
                    type="button"
                    className="servv_ticket_card__remove"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTicket(ticket.id);
                    }}
                    disabled={isFreePlanRestricted}
                  >
                    <MinusIcon />
                  </button>
                </div>

                <div className="servv_ticket_card__count">
                  <strong>{ticket.quantity}</strong>
                  <span>{ticket.quantity > 1 ? "tickets" : "ticket"}</span>
                </div>
              </div>
            ))}
        </div>
        {tickets.length > 0 && activeTicketId && (
          <Fragment>
            {stripeConnected && (
              <div className="step__content_block">
                <span className="step__content_title">Type</span>
                <RadioGroup
                  name="ticket-type"
                  value={
                    stripeConnected ? activeTicket?.type || "free" : "free"
                  }
                  options={TIYCKET_TYPES}
                  disabled={!stripeConnected}
                  onChange={(val) => {
                    const prevType = activeTicket?.type;
                    const prevQty = Number(activeTicket?.quantity || MIN_QTY);

                    let nextQty = prevQty;
                    let nextPrice = activeTicket?.price;

                    if (val === "free") {
                      nextQty = Math.min(prevQty, freeQuotaExcludingActive);
                      nextPrice = undefined;
                    }

                    if (prevType === "free" && val !== "free") {
                      nextQty = Math.min(prevQty, 500);
                    }

                    if (val === "paid") {
                      const currentPrice = Number(activeTicket?.price);

                      if (!currentPrice || currentPrice <= 0) {
                        nextPrice = String(defaultPrice);
                      }
                    }

                    nextQty = Math.max(MIN_QTY, nextQty);

                    const patch = {
                      type: val,
                      quantity: nextQty,
                    };

                    if (val === "paid" || val === "donation") {
                      patch.price = nextPrice ?? "";
                    }

                    updateTicket(activeTicketId, patch);
                  }}
                />
              </div>
            )}

            <div className="step__content_block">
              <span className="step__content_title">Title</span>
              <NewInputControl
                placeholder="Enter title"
                value={activeTicket?.title || ""}
                onChange={(val) => updateTicket(activeTicketId, { title: val })}
              />
            </div>
            {activeTicket?.type === "paid" && (
              <div className="step__content_block">
                <span className="step__content_title">Price</span>

                <NewInputControl
                  type="text"
                  inputMode="decimal"
                  placeholder="Enter price"
                  value={activeTicket?.price ?? ""}
                  error={isError ? "Please enter valid price" : ""}
                  onChange={(val) => {
                    // allow empty
                    if (val === "") {
                      updateTicket(activeTicketId, { price: "" });
                      setError(true);
                      return;
                    } else {
                      setError(false);
                    }

                    // allow numbers + 2 decimals
                    if (!/^\d+(\.\d{0,2})?$/.test(val)) return;
                    if (Number.parseInt(val) === 0) {
                      setError(true);
                    } else {
                      setError(false);
                    }
                    updateTicket(activeTicketId, { price: val });
                  }}
                />
              </div>
            )}
            {/* Quantity */}
            <div className="servv_ticket_quantity">
              <label className="step__content_title">Quantity</label>

              <div className="servv_ticket_quantity__input">
                {/* Decrease */}
                <button
                  type="button"
                  onClick={() => {
                    if (qty > MIN_QTY) {
                      updateTicket(activeTicketId, { quantity: qty - 1 });
                    }
                  }}
                  disabled={qty <= MIN_QTY}
                >
                  <MinusIcon />
                </button>

                {/* Input */}
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="servv_ticket_quantity__field"
                  placeholder="Enter a quantity"
                  value={qty === "" ? "" : String(qty)}
                  onChange={(e) => {
                    const raw = e.target.value;

                    if (raw === "") {
                      updateTicket(activeTicketId, { quantity: "" });
                      return;
                    }

                    if (!/^\d+$/.test(raw)) return;

                    const num = Number(raw);

                    if (num >= MIN_QTY && num <= MAX_TICKET_QTY) {
                      updateTicket(activeTicketId, { quantity: num });
                    }
                  }}
                  onBlur={() => {
                    // normalize empty → MIN_QTY
                    if (activeTicket.quantity === "") {
                      updateTicket(activeTicketId, { quantity: MIN_QTY });
                    }
                  }}
                />

                {/* Increase */}
                <button
                  type="button"
                  onClick={() => {
                    if (qty < MAX_TICKET_QTY) {
                      updateTicket(activeTicketId, { quantity: qty + 1 });
                    }
                  }}
                  disabled={qty >= MAX_TICKET_QTY}
                >
                  <PlusIcon />
                </button>
              </div>

              {isFreeTicket && (
                <p className="servv_ticket_quantity__hint">
                  You have {MAX_QTY} free tickets remaining for your plan.
                </p>
              )}
            </div>

            {/* Availability */}
            {
              <div className="step__content_block">
                <span className="step__content_title">Availability</span>

                <RadioGroup
                  name="ticket-availability"
                  value={activeTicket?.availability || "open"}
                  options={AVAILABILITY_OPTIONS}
                  onChange={(val) =>
                    updateTicket(activeTicketId, {
                      availability: val,
                      ...(val === "open"
                        ? { start_datetime: undefined, end_datetime: undefined }
                        : {}),
                    })
                  }
                  disabled={settings?.current_plan?.id === 1}
                />
              </div>
            }

            {activeTicket?.availability === "scheduled" && (
              <div className="servv_ticket_sales_block">
                {/* <span className="step__content_title">Ticket sales period</span> */}
                {/* <span className="servv_ticket_quantity__hint text-start">
                  Timezone: {timezone}
                </span> */}

                {/* START */}
                <div className="servv_datetime_row">
                  <div className="servv_datetime_col">
                    <label className="step__content_title">Start date</label>
                    <DatePickerControl
                      variant="field"
                      label={getSaleStartDate().label}
                      date={getSaleStartDate().date}
                      onChange={handleSaleStartDateChange}
                    />
                  </div>

                  <div className="servv_datetime_col">
                    <label className="step__content_title">Start time</label>
                    <NewTimeInputControl
                      time={activeTicket?.start_datetime}
                      onChange={handleSaleStartTimeChange}
                    />
                  </div>
                </div>

                {/* END */}
                <div className="servv_datetime_row">
                  <div className="servv_datetime_col">
                    <label className="step__content_title">End date</label>
                    <DatePickerControl
                      variant="field"
                      label={getSaleEndDate().label}
                      date={getSaleEndDate().date}
                      onChange={handleSaleEndDateChange}
                    />
                  </div>

                  <div className="servv_datetime_col">
                    <label className="step__content_title">End time</label>
                    <NewTimeInputControl
                      time={activeTicket?.end_datetime}
                      onChange={handleSaleEndTimeChange}
                    />
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        )}
      </div>
      <div className="servv_actions mt-auto">
        <button
          type="button"
          className="servv_button servv_button--secondary"
          onClick={() => changeStep("venue")}
        >
          Previous
        </button>

        <button
          type="button"
          className="servv_button servv_button--primary"
          onClick={() => changeStep("filters")}
          disabled={isError}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default TicketsStep;
