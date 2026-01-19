import { useEffect, useState, useRef, Fragment } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment-timezone";
import PageWrapper from "./PageWrapper";
import PageHeader from "../Containers/PageHeader";
import BlockStack from "../Containers/BlockStack";
import FilterTable from "../Containers/FilterTable";
import Card from "../Containers/Card";
import Badge from "../Containers/Badge";
import InlineStack from "../Containers/InlineStack";
import ButtonGroupConnected from "../Controls/ButtonGroupConnected";
import ConnectedButton from "../Controls/ConnectedButton";
import NewButtonGroup from "../Controls/NewButtonGroup";
import InputFieldControl from "../Controls/InputFieldControl";
import Datepicker from "react-tailwindcss-datepicker";
import ListPagination from "../Controls/ListPagination";
import Dropdown from "../Containers/Dropdown";
import PageActionButton from "../Controls/PageActionButton";
import CheckboxControl from "../Controls/CheckboxControl";
import { timezonesList } from "../../utilities/timezones";
import timezonesWithOffset from "../../utilities/timezones";
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
import { useServvStore } from "../../store/useServvStore";

const BookingsPage = () => {
  const { settings, timezone } = useServvStore();
  const [timeFormat, setTimeFormat] = useState("hh:mm a");
  const [loading, setLoading] = useState(false);
  const [headings, setHeadings] = useState([
    { label: "Order ID", value: "order", visible: true },
    { label: "Order Date/Time", value: "date", visible: true },
    { label: "Registrant", value: "registrant", visible: true },
    { label: "Title", value: "title", visible: true },
    { label: "Occurrence", value: "occurrence", visible: true },
    { label: "Mode", value: "paid", visible: true },
    { label: "Status", value: "status", visible: true },
  ]);
  const timeIntervals = [
    { label: "All time", value: "all" },
    { label: "12 month", value: "12" },
    { label: "30 days", value: "30" },
    { label: "7 days", value: "7" },
  ];

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
  const [price, setPrice] = useState({ from: null, to: null });
  const [filterDropdown, setFilterDropdown] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState({
    offline: true,
    zoom: true,
  });
  const [showBulkAction, setShowBulkActions] = useState(false);
  const firstFetch = useRef(false);

  const customizeDropdownRef = useRef(null);
  const filterDropdownRef = useRef(null);

  const timezones = Object.keys(timezonesList).map((zone) => {
    return { id: zone, name: timezonesList[zone] };
  });

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
    if (settings?.settings) {
      if (settings.settings.time_format_24_hours) setTimeFormat("HH:mm");
    }
  }, [settings]);

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

  const resendConfirmations = async ({ id, occurrence, registrant }) => {
    setLoading(true);

    const registrants = registrant.includes(",")
      ? registrant.split(",")
      : [registrant];

    try {
      for (const reg of registrants) {
        let url = `/wp-json/servv-plugin/v1/event/${id}/registrants/${reg}/resend`;
        if (occurrence) {
          url += `?occurrence_id=${occurrence}`;
        }

        await axios(url, {
          method: "POST",
          headers: { "X-WP-Nonce": servvData.nonce },
        });
      }

      toast("Emails successfully resent to all registrants");
    } catch (error) {
      toast("Failed to resend emails");
    } finally {
      setActiveDropdown(null);
      setLoading(false);
    }
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

  const getDates = () => {
    let datesValue = { startDate: null, endDate: null };

    if (dates.startDate) {
      const d = dates.startDate;
      datesValue.startDate = new Date(
        d.year(),
        d.month(),
        d.date(),
        d.hour(),
        d.minute(),
        d.second(),
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
        d.second(),
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
        timezone.id,
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
        timezone.id,
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

    if (!selectedProvider.offline && !selectedProvider.zoom) {
      setLoading(false);
      toast("Please select at least one event type to apply the filter.");
      return;
    }

    if (selectedProvider.offline !== selectedProvider.zoom) {
      const provider = selectedProvider.offline ? "offline" : "zoom";
      params.push(`event_provider=${provider}`);
    }

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

  const handleChangeTimeInterval = (newVal) => {
    setSelectedTimeInterval(newVal);
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
      (booking) => selectedOrder.indexOf(booking.id) >= 0,
    );
    if (selectedBookings.length > 0) {
      return selectedBookings.filter((booking) => booking.price > 0).length > 0;
    } else return false;
  };

  const renderRows = () => {
    return bookings.bookings.map((row) => {
      const startDate = moment(row.start_datetime).tz(row.timezone);
      const orderDate = moment(row.created_datetime).tz(row.timezone);

      return (
        <tr className="table-row" key={row.id}>
          {/* CHECKBOX */}
          <td className="w-auto whitespace-nowrap">
            <CheckboxControl
              checked={selectedOrder.includes(row.id)}
              size={2}
              onChange={() => handleOrderSelect(row.id)}
            />
          </td>

          {/* DYNAMIC COLUMNS */}
          {headings.map((heading) => {
            if (!heading.visible) return null;

            switch (heading.value) {
              case "order":
                return (
                  <td key="order">
                    <span className="font-semibold text-sm">
                      {t("#")}
                      {row.id}
                    </span>
                  </td>
                );

              case "date":
                return (
                  <td key="date">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {orderDate.format("MMM DD YYYY")}
                      </span>
                      <span className="text-xs font-regular">
                        {orderDate.format(timeFormat)}
                      </span>
                    </div>
                  </td>
                );

              case "registrant":
                return (
                  <td data-tooltip data-full={row.email}>
                    <span className="cell-truncate">{row.email}</span>
                  </td>
                );

              case "title":
                return (
                  <td data-tooltip data-full={row.product_name}>
                    <span className="cell-truncate font-semibold text-sm">
                      {row.product_name}
                    </span>
                  </td>
                );

              case "occurrence":
                return (
                  <td key="occurrence">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">
                        {startDate.format("MMM DD YYYY")}
                      </span>
                      <span className="text-xs font-regular">
                        {startDate.format(timeFormat)}
                      </span>
                    </div>
                  </td>
                );

              case "paid":
                return (
                  <td key="paid">
                    {Number(row.price) > 0 ? Number(row.price) : "Free"}
                  </td>
                );

              case "status":
                return (
                  <td key="status">
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

              default:
                return null;
            }
          })}

          {/* ACTIONS */}
          <td className="w-auto shrink-0 whitespace-nowrap text-right">
            <button onClick={() => setActive(row.id)}>
              <Bars4Icon className="dropdown-icon" />
            </button>

            {activeDropdown === row.id && (
              <div className="filter-table-dropdown">
                <span className="dropdown-header">
                  #{row.id}
                  <p
                    className="dropdown-description wrap-break-word"
                    data-full={row.email}
                  >
                    {row.email}
                  </p>
                </span>

                {row.active_registrants > 0 && (
                  <div className="dropdown-actions">
                    <BlockStack gap={4}>
                      <button
                        className="dropdown-action"
                        onClick={() =>
                          resendConfirmations({
                            ...getPostId(row.variant_id),
                            registrant: row.registrants_ids,
                          })
                        }
                      >
                        <PaperAirplaneIcon className="dropdown-icon" />
                        {t("Resend confirmation")}
                      </button>
                    </BlockStack>
                  </div>
                )}

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

                    {row.active_registrants > 0 && (
                      <button
                        className="dropdown-action"
                        onClick={() => cancelBookings(row.id)}
                      >
                        <XCircleIcon className="dropdown-icon" />
                        {t("Cancel booking")}
                      </button>
                    )}
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
    return headings.map((heading) => (
      <CheckboxControl
        label={heading.label}
        name={heading.label}
        checked={heading.visible}
        onChange={() => customizeHeading(heading.value)}
      />
    ));
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

    try {
      for (const variant of selectedOrder) {
        let id = null;
        let occurrence = null;

        const variantData = bookings.bookings.find(
          (booking) => booking.id === variant,
        );
        if (!variantData) continue;

        ({ id, occurrence } = getPostId(variantData.variant_id));

        const registrants = variantData.registrants_ids.includes(",")
          ? variantData.registrants_ids.split(",")
          : [variantData.registrants_ids];

        let url = "";
        let successMessage = "";
        let errorMessage = "";

        switch (actionType) {
          case "resend":
            url = `/wp-json/servv-plugin/v1/event/${id}/registrants/`;
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
            return;
        }

        if (actionType !== "resend") {
          try {
            const res = await axios.post(url, null, {
              headers: { "X-WP-Nonce": servvData.nonce },
            });
            if (res.status === 200) successCount++;
            else failureCount++;
          } catch (error) {
            failureCount++;
          }
        } else {
          try {
            const requests = registrants.map((registrant) => {
              let newURL = url + registrant + "/resend";
              if (occurrence) newURL += `?occurrence_id=${occurrence}`;
              return axios.post(newURL, null, {
                headers: { "X-WP-Nonce": servvData.nonce },
              });
            });

            const responses = await Promise.allSettled(requests);
            let succeeded = 0;
            let failed = 0;

            responses.forEach((res) => {
              if (res.status === "fulfilled" && res.value.status === 200)
                succeeded++;
              else failed++;
            });

            if (succeeded === registrants.length) successCount++;
            else failureCount++;
          } catch (error) {
            failureCount++;
          }
        }
      }

      if (successCount > 0 && failureCount === 0) {
        toast("All actions completed successfully.");
      } else if (successCount > 0 && failureCount > 0) {
        toast(`${successCount} succeeded, ${failureCount} failed.`);
      } else {
        toast("All actions failed.");
      }
    } finally {
      setActiveDropdown(null);
      setShowBulkActions(false);
      setLoading(false);
    }
  };

  const handleExport = async () => {
    let allBookings = [];
    for (let i = 1; i < bookings.page_count + 1; i++) {
      const { bookings, page } = await fetchBookings({ page: i });

      allBookings = allBookings.concat(bookings);
    }
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
                  })`,
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
          {/* <span>{t("Bookings")}</span> */}
          {bookings?.total_records > 0 && (
            <Badge
              text={`${bookings?.bookings?.length || 0} item${
                bookings && bookings?.bookings?.length > 1 ? "s" : ""
              }`}
              color="secondary"
              size="small"
              align="center"
            />
          )}
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
    <PageWrapper loading={loading} withBackground={true}>
      <BlockStack gap={4}>
        <div className="dashboard-card">
          <div className="servv-dashboard-header">
            {/* LEFT: title + description */}
            <div className="dashboard-heading">
              <h1 className="dashboard-title">Bookings</h1>
              <p className="dashboard-description">
                View and manage all event bookings in one place
              </p>
            </div>

            {/* RIGHT: actions */}
            <div className="dashboard-actions flex flex-row items-center gap-2 flex-nowrap">
              <div ref={customizeDropdownRef}>
                <Dropdown
                  activator={
                    <button
                      className="flex items-center px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium text-base hover:bg-gray-100 transition"
                      onClick={() => setCustomizeDropdown(!customizeDropdown)}
                    >
                      <AdjustmentsVerticalIcon className="w-5 h-5" />
                    </button>
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
                disabled={!bookings || bookings?.bookings?.length === 0}
                onAction={() => exportToCSV(bookings.bookings)}
              />
            </div>
          </div>

          <div className="header-line" />

          <BlockStack gap={4}>
            <div className="inline-flex w-fit mb-4">
              <NewButtonGroup
                buttons={timeIntervals.map((i) => i.label)}
                active={
                  timeIntervals.find((i) => i.value === selectedInterval)?.label
                }
                onChange={(label) => {
                  const selected = timeIntervals.find((i) => i.label === label);
                  handleChangeTimeInterval(selected.value);
                }}
              />
            </div>

            <Card>
              {renderBookingsHeader()}

              {bookings && bookings?.bookings?.length > 0 && (
                <Fragment>
                  <FilterTable
                    tableClassName={"bookings-table"}
                    headings={renderHeadings()}
                    rows={renderRows()}
                  />
                </Fragment>
              )}

              {selectedOrder.length > 1 && (
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
        </div>
      </BlockStack>
    </PageWrapper>
  );
};

export default BookingsPage;
