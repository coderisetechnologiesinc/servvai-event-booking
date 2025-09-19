import { useEffect, useState, useRef, Fragment } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment-timezone";
import PageWrapper from "./PageWrapper";
import PageHeader from "../Containers/PageHeader";
// import PageContent from "../Containers/PageContent";
import BlockStack from "../Containers/BlockStack";
import FilterTable from "../Containers/FilterTable";
import Card from "../Containers/Card";
import Badge from "../Containers/Badge";
import InlineStack from "../Containers/InlineStack";
import ButtonGroupConnected from "../Controls/ButtonGroupConnected";
import ConnectedButton from "../Controls/ConnectedButton";
import InputFieldControl from "../Controls/InputFieldControl";
import Datepicker from "react-tailwindcss-datepicker";
import ListPagination from "../Controls/ListPagination";
import Dropdown from "../Containers/Dropdown";
import PageActionButton from "../Controls/PageActionButton";
import CheckboxControl from "../Controls/CheckboxControl";
import timezones from "../../utilities/timezones";
import {
  Bars4Icon,
  PencilSquareIcon,
  EyeIcon,
  PaperAirplaneIcon,
  XCircleIcon,
  WalletIcon,
  AdjustmentsVerticalIcon,
  ArrowDownOnSquareStackIcon,
} from "@heroicons/react/16/solid";
const BookingsPage = ({ settings }) => {
  const [loading, setLoading] = useState(false);
  const [headings, setHeadings] = useState([
    { label: "Order ID", value: "order", visible: true },
    { label: "Order Date/Time", value: "date", visible: true },
    { label: "Registrant", value: "registrant", visible: true },
    { label: "Event Title/Location", value: "title", visible: true },
    { label: "Occurrence", value: "occurrence", visible: true },
    { label: "Mode", value: "paid", visible: true },
    { label: "Status", value: "status", visible: true },
  ]);
  const providers = ["offline", "zoom"];
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [customizeDropdown, setCustomizeDropdown] = useState(false);
  const [bookings, setBookings] = useState(false);
  const [selectedInterval, setSelectedTimeInterval] = useState("all");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
  });
  const [timezone, setTimezone] = useState("US/Pacific");
  const [timeFormat, setTimeFormat] = useState("hh:mm a");
  const [price, setPrice] = useState({ from: null, to: null });
  const [provider, setProvider] = useState("");
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState({
    offline: true,
    zoom: true,
  });
  const [showBulkAction, setShowBulkActions] = useState(false);
  const firstFetch = useRef(false);

  // --- Dropdown refs and click outside handlers ---
  const customizeDropdownRef = useRef(null);
  const filterDropdownRef = useRef(null);

  useEffect(() => {
    if (!customizeDropdown) return;
    const handleClickOutside = (event) => {
      if (
        customizeDropdownRef.current &&
        !customizeDropdownRef.current.contains(event.target)
      ) {
        setCustomizeDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [customizeDropdown]);

  useEffect(() => {
    if (!filterDropdown) return;
    const handleClickOutside = (event) => {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        setFilterDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [filterDropdown]);

  const getPostId = (variant) => {
    // console.log(variant.indexOf("0"), variant.length - 1);
    if (variant.indexOf("0") < variant.length - 1) {
      return {
        id: variant.slice(0, variant.indexOf("0")),
        occurrence: variant.slice(variant.indexOf("0")),
      };
    } else {
      return { id: variant.slice(0, variant.indexOf("0")) };
    }
  };

  const handleOrderSelect = (ID) => {
    let newOrders = [...selectedOrder];
    if (selectedOrder.includes(ID)) {
      newOrders = newOrders.filter((order) => order !== ID);
      setSelectedOrder(newOrders);
    } else {
      newOrders.push(ID);
      setSelectedOrder(newOrders);
    }
  };
  const handleSelectAll = () => {
    if (!bookings || bookings.bookings.length === 0) return;

    let newOrders = [];
    if (selectedOrder.length === bookings.bookings.length) {
      setSelectedOrder([]);
      return;
    }
    bookings.bookings.forEach((booking) => {
      newOrders.push(booking.id);
    });
    setSelectedOrder(newOrders);
  };

  const resendConfirmations = async ({ id, occurrence }) => {
    setLoading(true);
    let url = `/wp-json/servv-plugin/v1/event/${id}/registrants/${registrant}/resend`;
    if (occurrence) {
      url += `?occurrence_id=${occurrence}`;
    }
    const refundBookingResponse = await axios(url, {
      method: "POST",
      headers: { "X-WP-Nonce": servvData.nonce },
    }).catch((error) => {
      toast("Failed to resend emails");
      setActiveDropdown(null);
      setLoading(false);
    });
    if (refundBookingResponse && refundBookingResponse.status === 200) {
      toast("Emails successfully resent");
    }
    setActiveDropdown(null);
    setLoading(false);
  };

  const refundBooking = async ({ id, occurrence }) => {
    setLoading(true);
    let url = `/wp-json/servv-plugin/v1/bookings/${id}/refund`;
    const refundBookingResponse = await axios(url, {
      method: "POST",
      headers: { "X-WP-Nonce": servvData.nonce },
    }).catch((error) => {
      toast("Failed to refund booking");
      setActiveDropdown(null);
      setLoading(false);
    });
    if (refundBookingResponse && refundBookingResponse.status === 200) {
      toast("Booking successfully refunded");
    }
    setActiveDropdown(null);
    setLoading(false);
  };

  const cancelBookings = async (id) => {
    setLoading(true);
    let url = `/wp-json/servv-plugin/v1/bookings/${id}/cancel`;
    const refundBookingResponse = await axios(url, {
      method: "POST",
      headers: { "X-WP-Nonce": servvData.nonce },
    }).catch((error) => {
      toast("Failed to cancel booking");
      setActiveDropdown(null);
      setLoading(false);
    });
    if (refundBookingResponse && refundBookingResponse.status === 200) {
      toast("Booking successfully cancelled");
    }
    setActiveDropdown(null);
    setLoading(false);
  };

  const setActive = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else setActiveDropdown(id);
  };
  const updateTimeFormat = (settings) => {
    if (!settings) return;
    else if (
      settings &&
      settings.settings &&
      settings.settings.time_format_24_hours
    ) {
      setTimeFormat("HH:mm");
    }
  };
  const updateTimezone = (settings) => {
    let defaultTimezone = null;

    if (!settings) return;

    if (settings.settings?.admin_dashboard) {
      const adminSettings = JSON.parse(settings.settings.admin_dashboard);
      defaultTimezone = adminSettings.default_timezone || moment.tz.guess();
    } else {
      defaultTimezone = moment.tz.guess();
    }

    let findTimezone = timezones.filter((t) => t.zone === defaultTimezone);

    if (findTimezone.length > 0) {
      setTimezone(findTimezone[0]);
    } else {
      let timezoneOffset = moment.tz(defaultTimezone).format("Z");
      let formattedOffset = `(GMT${timezoneOffset})`;

      let availableTimezone = timezones.filter(
        (t) => t.gmt === formattedOffset
      );

      if (availableTimezone.length > 0) {
        setTimezone(availableTimezone[0]);
      }
    }
  };

  useEffect(() => {
    updateTimeFormat(settings);
    updateTimezone(settings);
  }, [settings]);

  const getDates = (tz = timezone.zone) => {
    let datesValue = { startDate: null, endDate: null };

    if (dates.startDate) {
      const d = dates.startDate; // Moment object
      datesValue.startDate = new Date(
        d.year(),
        d.month(),
        d.date(),
        d.hour(),
        d.minute(),
        d.second()
      );
    }

    if (dates.endDate) {
      const d = dates.endDate;
      datesValue.endDate = new Date(
        d.year(),
        d.month(),
        d.date(),
        d.hour(),
        d.minute(),
        d.second()
      );
    }

    return datesValue;
  };

  const handleSetDates = (dates) => {
    let startDate = null;

    if (dates.startDate)
      startDate = moment.tz(
        {
          year: dates.startDate.getFullYear(),
          month: dates.startDate.getMonth(),
          day: dates.startDate.getDate(),
          hour: 0,
          minute: 0,
          second: 0,
        },
        timezone.zone
      );
    let endDate = null;
    if (dates.endDate)
      endDate = moment.tz(
        {
          year: dates.endDate.getFullYear(),
          month: dates.endDate.getMonth(),
          day: dates.endDate.getDate(),
          hour: 23,
          minute: 59,
          second: 0,
        },
        timezone.zone
      );

    setDates({
      startDate: startDate ? startDate : null,
      endDate: endDate ? endDate : null,
    });
  };
  const fetchBookings = async ({ page = 1 } = {}) => {
    setLoading(true);
    let url = "/wp-json/servv-plugin/v1/bookings";
    let params = [];

    const endDate = moment();
    let startDate = null;

    if (dates.startDate === null) {
      if (selectedInterval === "12" || firstFetch.current) {
        startDate = moment(endDate).subtract(12, "months");
      } else if (selectedInterval === "30") {
        startDate = moment(endDate).subtract(30, "days");
      } else if (selectedInterval === "7") {
        startDate = moment(endDate).subtract(7, "days");
      }

      if (!firstFetch.current && startDate) {
        params.push(`from_datetime=${startDate.format("YYYY-MM-DD HH:mm:ss")}`);
        params.push(`to_datetime=${endDate.format("YYYY-MM-DD HH:mm:ss")}`);
      }
    } else if (dates.startDate && dates.endDate) {
      const start = moment(dates.startDate);
      const end = moment(dates.endDate);
      params.push(`from_datetime=${start.format("YYYY-MM-DD HH:mm:ss")}`);
      params.push(`to_datetime=${end.format("YYYY-MM-DD HH:mm:ss")}`);
    }

    if (searchString.length > 0) {
      params.push(`search=${encodeURIComponent(searchString)}`);
    }

    if (price.from) {
      params.push(`from_price=${price.from}`);
    }

    if (price.to) {
      params.push(`to_price=${price.to}`);
    }

    // Validate selected event types
    if (!selectedProvider.offline && !selectedProvider.zoom) {
      setLoading(false);
      toast("Please select at least one event type to apply the filter.");
      return;
    }

    // Handle provider filter
    if (selectedProvider.offline !== selectedProvider.zoom) {
      const provider = selectedProvider.offline ? "offline" : "zoom";
      params.push(`event_provider=${provider}`);
    }

    // Pagination
    params.push(`page=${page}`, `page_size=10`);

    try {
      const response = await axios(`${url}?${params.join("&")}`, {
        headers: { "X-WP-Nonce": servvData.nonce },
      });

      if (response.status === 200) {
        setBookings(response.data);
      }
    } catch (error) {
      toast("Servv was unable to fetch bookings.");
    }
    setLoading(false);
    return { bookings: bookings.bookings, page: bookings.page_number };
  };

  const onFiltering = async () => {
    await fetchBookings();
  };
  const changeFilterDropdown = () => {
    setFilterDropdown(!filterDropdown);
  };
  useEffect(() => {
    fetchBookings();
  }, [dates, selectedInterval]);

  const handleChangeTimeInterval = async (newVal) => {
    setSelectedTimeInterval(newVal);
    // await fetchBookings(newVal);
  };

  const renderHeadings = () => {
    return (
      <Fragment>
        <th>
          <CheckboxControl
            onChange={() => handleSelectAll()}
            checked={
              bookings &&
              bookings.bookings &&
              selectedOrder.length === bookings.bookings.length
            }
          />
        </th>
        {headings.map((heading) => {
          if (heading.visible) return <th>{heading.label}</th>;
        })}
        <th></th>
      </Fragment>
    );
  };
  const isRefundAvailable = () => {
    let selectedBookings = bookings.bookings.map(
      (booking) => selectedOrder.indexOf(booking.id) >= 0
    );
    if (selectedBookings.length > 0) {
      return selectedBookings.filter((booking) => booking.price > 0).length > 0;
    } else return false;
  };

  const renderRows = () => {
    return bookings.bookings.map((row) => {
      return (
        <tr className="table-row">
          <td>
            <CheckboxControl
              checked={selectedOrder.indexOf(row.id) >= 0}
              size={2}
              onChange={() => handleOrderSelect(row.id)}
            />
          </td>
          {headings.map((heading) => {
            if (heading.visible) {
              const start_date = moment(row.start_datetime).tz(row.timezone);
              const order_date = moment(row.created_datetime).tz(row.timezone);
              if (heading.value === "order") {
                return (
                  <td>
                    <span className="font-semibold text-sm max-sm: text-sm">
                      {t("#")}
                      {row.id}
                    </span>
                  </td>
                );
              }
              if (heading.value === "date") {
                return (
                  <td>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {order_date.format("MMM DD YYYY")}
                      </span>
                      <span className="text-xs font-regular">
                        {order_date.format(timeFormat)}
                      </span>
                    </div>
                  </td>
                );
              }
              if (heading.value === "registrant") {
                return <td>{row.email}</td>;
              }
              if (heading.value === "title") {
                return (
                  <td>
                    <span className="font-semibold text-sm">
                      {row.product_name.length > 24
                        ? row.product_name.slice(0, 24) + "..."
                        : row.product_name}
                    </span>
                  </td>
                );
              }
              if (heading.value === "occurrence") {
                return (
                  <td>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {start_date.format("MMM DD YYYY")}
                      </span>
                      <span className="text-xs font-regular">
                        {start_date.format(timeFormat)}
                      </span>
                    </div>
                  </td>
                );
              }
              if (heading.value === "paid") {
                return (
                  <td>
                    {Number.parseFloat(row.price) > 0
                      ? Number.parseFloat(row.price)
                      : "Free"}
                  </td>
                );
              }
              if (heading.value === "status") {
                return (
                  <td>
                    <Badge
                      text={
                        row.active_registrants === 0
                          ? "Canceled"
                          : row.reunded_quantity >= row.quantity
                          ? "Refunded"
                          : "Active"
                      }
                      color={
                        row.active_registrants === 0
                          ? "error"
                          : row.reunded_quantity >= row.quantity
                          ? "warning"
                          : "success"
                      }
                      size="small"
                      align="center"
                      type="pill-colour"
                    />
                  </td>
                );
              }
            }
          })}
          <td className="filter-table-dropdown-container">
            <button onClick={() => setActive(row.id)}>
              <Bars4Icon className="dropdown-icon" />
            </button>
            {activeDropdown === row.id && (
              <div className="filter-table-dropdown">
                <span className="dropdown-header">
                  {`#${row.id}`}{" "}
                  <p className="dropdown-description wrap-break-word">
                    {row.email}
                  </p>
                </span>
                <div className="dropdown-actions">
                  <BlockStack gap={4}>
                    <button
                      className="dropdown-action"
                      onClick={() =>
                        resendConfirmations({ ...getPostId(row.variant_id) })
                      }
                    >
                      <PaperAirplaneIcon className="dropdown-icon" />
                      {t("Resend confirmation")}
                    </button>
                  </BlockStack>
                </div>
                <div className="dropdown-actions border-t w-full">
                  <BlockStack gap={4}>
                    {row.price > 0 && (
                      <button
                        className="dropdown-action"
                        onClick={() => refundBooking(row.id)}
                      >
                        <WalletIcon className="dropdown-icon" />
                        {t("Issue refund")}
                      </button>
                    )}
                    <button
                      className="dropdown-action"
                      onClick={() => cancelBookings(row.id)}
                    >
                      <XCircleIcon className="dropdown-icon" />
                      {t("Cancel booking")}
                    </button>
                  </BlockStack>
                </div>
              </div>
            )}
          </td>
        </tr>
      );
    });
  };

  const onChange = (newValue) => {
    setSearchString(newValue);
  };

  const handleEnterButton = (event) => {
    if (event.key === "Enter") {
      fetchBookings();
    }
  };

  const customizeHeading = (heading) => {
    let newHeadings = [...headings];
    let selectedHeading = headings
      .map((heading) => heading.value)
      .indexOf(heading);
    newHeadings[selectedHeading].visible = !headings[selectedHeading].visible;
    setHeadings(newHeadings);
  };

  const renderHeadingsCustomization = () => {
    return headings.map((heading) => {
      return (
        <CheckboxControl
          label={heading.label}
          name={heading.label}
          checked={heading.visible}
          onChange={() => customizeHeading(heading.value)}
        />
      );
    });
  };

  const handlePriceChange = (newVal, attribute) => {
    const newPrice = { ...price };
    let newPriceValue = newVal.replace(".", ",");
    if (attribute === "from") {
      newPrice.from = Number.parseFloat(newPriceValue);
    } else {
      newPrice.to = Number.parseFloat(newPriceValue);
    }
    setPrice({ ...newPrice });
  };
  const handleSelectProvider = (provider) => {
    let newProvidersSelection = { ...selectedProvider };

    if (provider === "offline") {
      newProvidersSelection.offline = !newProvidersSelection.offline;
    } else {
      newProvidersSelection.zoom = !newProvidersSelection.zoom;
    }

    setSelectedProvider({ ...newProvidersSelection });
  };

  const renderFilteringWithFilters = () => {
    return (
      <Fragment>
        <BlockStack gap={2}>
          <InputFieldControl
            value={price.from}
            placeholder="Price from"
            onChange={(val) => handlePriceChange(val, "from")}
            maxLength={6}
            width="w-8"
            align="left"
            type="number"
            step="any"
          />
          <InputFieldControl
            value={price.to}
            placeholder="Price to"
            onChange={(val) => handlePriceChange(val, "to")}
            maxLength={6}
            width="w-8"
            align="left"
            type="number"
            step="any"
          />
          {/* <CheckboxControl
            label="Event"
            name="offline"
            checked={selectedProvider.offline}
            onChange={() => handleSelectProvider("offline")}
          />
          <CheckboxControl
            label="Zoom meeting"
            name="zoom"
            checked={selectedProvider.zoom}
            onChange={() => handleSelectProvider("zoom")}
          /> */}
        </BlockStack>
      </Fragment>
    );
  };

  const handleGetPrevPage = () => {
    fetchBookings({ page: bookings.page_number - 1 });
  };
  const handleGetNextPage = () => {
    fetchBookings({ page: bookings.page_number + 1 });
  };

  const resetFilters = () => {
    setDates({ startDate: null, endDate: null });
    setSearchString("");
    setSelectedProvider({ offline: true, zoom: true });
    setPrice({ from: null, to: null });
    firstFetch.current = true;
  };

  const performBulkAction = async (actionType) => {
    if (!selectedOrder || selectedOrder.length === 0) return;

    setLoading(true);

    let successCount = 0;
    let failureCount = 0;

    for (const variant of selectedOrder) {
      let id = null;
      let occurrence = null;

      const variantId = bookings.bookings.find(
        (booking) => booking.id === variant
      );
      if (variantId) {
        ({ id, occurrence } = getPostId(variantId.variant_id));
      }

      let url = "";
      let successMessage = "";
      let errorMessage = "";

      switch (actionType) {
        case "resend":
          url = `/wp-json/servv-plugin/v1/event/${id}/registrants/resend`;
          if (occurrence) url += `?occurrence_id=${occurrence}`;
          successMessage = "Emails resent successfully.";
          errorMessage = "Some emails failed to resend.";
          break;

        case "refund":
          url = `/wp-json/servv-plugin/v1/booking/${variant}/refund`;
          successMessage = "Bookings refunded successfully.";
          errorMessage = "Some bookings failed to refund.";
          break;

        case "cancel":
          url = `/wp-json/servv-plugin/v1/booking/${variant}/cancel`;
          successMessage = "Bookings cancelled successfully.";
          errorMessage = "Some bookings failed to cancel.";
          break;

        default:
          toast("Unknown action type.");
          setLoading(false);
          return;
      }

      try {
        const res = await axios(url, {
          method: "POST",
          headers: { "X-WP-Nonce": servvData.nonce },
        });

        if (res.status === 200) {
          successCount++;
        } else {
          failureCount++;
        }
      } catch (error) {
        failureCount++;
      }
    }

    if (successCount > 0 && failureCount === 0) {
      toast("All actions completed successfully.");
    } else if (successCount > 0 && failureCount > 0) {
      toast(`${successCount} succeeded, ${failureCount} failed.`);
    } else {
      toast("All actions failed.");
    }

    setActiveDropdown(null);
    setShowBulkActions(false);
    setLoading(false);
  };

  const handleExport = async () => {
    let allBookings = [];
    for (let i = 1; i < bookings.page_count + 1; i++) {
      const { bookings, page } = await fetchBookings({ page: i });

      allBookings = allBookings.concat(bookings);
    }
    console.log(allBookings);
    exportToCSV(allBookings);
  };

  function exportToCSV(data, filename = "export.csv") {
    if (!data || data.length === 0) return;

    const selectedFields = [
      "id",
      "created_datetime",
      "product_name",
      "variant_name",
      "start_datetime",
      "timezone",
      "price",
      "quantity",
      "refunded_quantity",
      "active_registrants",
      "additional_registrants",
    ];

    const headerMap = {
      id: "Booking ID",
      created_datetime: "Created At",
      product_name: "Product Name",
      variant_name: "Variant",
      start_datetime: "Start Time",
      timezone: "Timezone",
      price: "Price",
      quantity: "Quantity",
      refunded_quantity: "Refunded",
      active_registrants: "Active Registrants",
      additional_registrants: "Additional Registrants",
    };

    const rows = data.map((item) => {
      const row = {};
      for (const field of selectedFields) {
        if (field === "additional_registrants") {
          if (Array.isArray(item.additional_registrants)) {
            row[field] = item.additional_registrants
              .map(
                (r) =>
                  `${r.first_name || ""} ${r.last_name || ""} (${
                    r.email || ""
                  })`
              )
              .join(" | ");
          } else {
            row[field] = "";
          }
        } else {
          row[field] = item[field] ?? "";
        }
      }
      return row;
    });

    const headers = selectedFields.map((field) => headerMap[field]);
    const csvRows = [headers.join(",")];

    for (const row of rows) {
      const line = selectedFields
        .map((field) => {
          const val = row[field];
          const escaped = ("" + val).replace(/"/g, '""');
          return `"${escaped}"`;
        })
        .join(",");
      csvRows.push(line);
    }

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  const renderBulkActions = () => {
    return (
      <div className="filter-table-dropdown ml-6 mt-6">
        <div className="dropdown-actions">
          <BlockStack gap={4}>
            <button
              className="dropdown-action"
              onClick={() => performBulkAction("resend")}
            >
              <PaperAirplaneIcon className="dropdown-icon" />
              Resend confirmations
            </button>

            {isRefundAvailable() && (
              <button
                className="dropdown-action"
                onClick={() => performBulkAction("refund")}
              >
                <WalletIcon className="dropdown-icon" />
                {t("Refund bookings")}
              </button>
            )}
            <button
              className="dropdown-action"
              onClick={() => performBulkAction("cancel")}
            >
              <XCircleIcon className="dropdown-icon" />
              {t("Cancel bookings")}
            </button>
          </BlockStack>
        </div>
      </div>
    );
  };
  const renderBookingsHeader = () => {
    return (
      <div className="card-header">
        <div className="card-heading">
          <span>{t("Bookings")}</span>
          <Badge
            text={`${bookings?.bookings?.length || 0} item${
              bookings && bookings.bookings.length > 1 ? "s" : ""
            }`}
            color="secondary"
            size="small"
            align="center"
          />
        </div>
        <div className="card-description">
          {(searchString.length > 0 ||
            dates.startDate ||
            dates.endDate ||
            !selectedProvider.offline ||
            !selectedProvider.zoom ||
            price.from ||
            price.to) && (
            <a
              className="card-header-description-link"
              onClick={() => resetFilters()}
            >
              {t("Clear filters")}
            </a>
          )}
          {/* <span>{t("Review and manage all your event bookings here.")}</span> */}
        </div>

        <InlineStack align={"left"} gap={4} cardsLayout={false}>
          <InputFieldControl
            value={searchString}
            placeholder="Search by event title"
            onChange={onChange}
            handleKeyPress={handleEnterButton}
            fullWidth={true}
            align="left"
          />
          <Datepicker
            displayFormat={"MMM DD, YYYY"}
            value={getDates()}
            placeholder="Select dates"
            inputClassName="input-control section-description text-left w-full shadow-sm border-solid border border-gray-300 bg-white"
            onChange={(newValue) => handleSetDates(newValue)}
          />
          <div ref={filterDropdownRef}>
            <Dropdown
              activator={
                <PageActionButton
                  text="Filters"
                  icon={<AdjustmentsVerticalIcon className="button-icon" />}
                  type="secondary"
                  onAction={() => changeFilterDropdown()}
                />
              }
              status={filterDropdown}
              onClose={() => setFilterDropdown(false)}
            >
              <BlockStack gap={4}>
                {renderFilteringWithFilters()}
                <PageActionButton
                  text={<span className="text-center">{t("Apply")}</span>}
                  type="primary"
                  icon={null}
                  onAction={() => {
                    onFiltering();
                    setFilterDropdown(false);
                  }}
                  justify={"justify-center"}
                />
              </BlockStack>
            </Dropdown>
          </div>
        </InlineStack>
      </div>
    );
  };

  return (
    <PageWrapper loading={loading}>
      <BlockStack gap={4}>
        <PageHeader>
          <BlockStack gap={4}>
            <h1 className="text-display-sm font-semibold mt-6">
              {t("Bookings")}
            </h1>
            <p className="page-header-description">
              {/* {t("Review and manage all your event bookings here.")} */}
              View and manage all event bookings in one place
            </p>
          </BlockStack>
          <InlineStack gap={2} align="right">
            <div ref={customizeDropdownRef}>
              <Dropdown
                activator={
                  <PageActionButton
                    text="Customize"
                    icon={<AdjustmentsVerticalIcon className="button-icon" />}
                    type="secondary"
                    onAction={() => {
                      setCustomizeDropdown(!customizeDropdown);
                    }}
                  />
                }
                status={customizeDropdown}
                onClose={() => setCustomizeDropdown(false)}
              >
                <ul>{renderHeadingsCustomization()}</ul>
              </Dropdown>
            </div>
            <PageActionButton
              text="Export"
              icon={<ArrowDownOnSquareStackIcon className="button-icon" />}
              type="secondary"
              disabled={!bookings || bookings.bookings.length === 0}
              onAction={() => {
                exportToCSV(bookings.bookings);
              }}
            />
          </InlineStack>
        </PageHeader>

        <BlockStack gap={4}>
          <InlineStack gap={4} align="left">
            <ButtonGroupConnected>
              <ConnectedButton
                text="All time"
                selected={selectedInterval === "all"}
                onAction={() => handleChangeTimeInterval("all")}
              />
              <ConnectedButton
                text="12 month"
                selected={selectedInterval === "12"}
                onAction={() => handleChangeTimeInterval("12")}
              />
              <ConnectedButton
                text="30 days"
                selected={selectedInterval === "30"}
                onAction={() => handleChangeTimeInterval("30")}
              />
              <ConnectedButton
                text="7 days"
                selected={selectedInterval === "7"}
                onAction={() => handleChangeTimeInterval("7")}
              />
            </ButtonGroupConnected>
          </InlineStack>

          <Card>
            {renderBookingsHeader()}
            {bookings && bookings.bookings.length > 0 && (
              <Fragment>
                <FilterTable headings={renderHeadings()} rows={renderRows()} />
              </Fragment>
            )}
            {selectedOrder.length > 0 && (
              <div className="filter-table-dropdown-container py-xl px-2 text-gray-600 font-regular justify-start border-b first:font-medium first:text-gray-900 md:text-sm flex flex-row">
                <button
                  onClick={() => setShowBulkActions(!showBulkAction)}
                  className="ml-auto"
                >
                  <Bars4Icon className="dropdown-icon" />
                </button>

                {showBulkAction && renderBulkActions()}
              </div>
            )}
            {bookings.page_count > 1 && (
              <ListPagination
                hasPrev={bookings.page_number > 1}
                hasNext={bookings.page_number < bookings.page_count}
                onPrev={() => handleGetPrevPage()}
                onNext={() => handleGetNextPage()}
              />
            )}
          </Card>
        </BlockStack>
      </BlockStack>
    </PageWrapper>
  );
};
export default BookingsPage;
