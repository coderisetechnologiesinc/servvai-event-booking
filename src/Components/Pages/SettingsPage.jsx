import BlockStack from "../Containers/BlockStack";
import PageHeader from "../Containers/PageHeader";
import InlineStack from "../Containers/InlineStack";
import PageActionButton from "../Controls/PageActionButton";
import AnnotatedSection from "../Containers/AnnotatedSection";
import PageContent from "../Containers/PageContent";
import { useState, useEffect } from "react";
import SelectControl from "../Controls/SelectControl";
import timezones from "../../utilities/timezones";
import CheckboxControl from "../Controls/CheckboxControl";
import axios from "axios";
import InputFieldControl from "../Controls/InputFieldControl";
import TimeInputControl from "../Controls/TimeInputControl";
import ButtonGroup from "../Controls/ButtonGroup";
import moment from "moment";
import { toast } from "react-toastify";
import TabsComponent from "../Containers/TabsComponent";
import PageWrapper from "./PageWrapper";
import {
  mergeTranslations,
  getTranslationsTpl,
} from "../../utilities/translations";
import { getLanguagesList } from "../../utilities/languages";
import startCase from "lodash.startcase";
import capitalize from "lodash.capitalize";
import { loadStripe } from "@stripe/stripe-js";

import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/16/solid";
import apiFetch from "@wordpress/api-fetch";
const SettingsPage = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [billingPlans, setBillingPlans] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [zoomAccount, setZoomAccount] = useState(null);
  const [stripeAccount, setStripeAccount] = useState(null);
  const timezoneOptions = timezones.map((timezone) => timezone.zone);
  const getZoomAccount = async () => {
    const getZoomAccountResponse = await apiFetch({
      path: "/servv-plugin/v1/zoom/account",
    });
    if (getZoomAccountResponse) {
      setZoomAccount(getZoomAccountResponse);
    }
  };

  const getStripeAccount = async () => {
    const getStripeAccountResponse = await apiFetch({
      path: "/servv-plugin/v1/stripe/account",
    });
    if (getStripeAccountResponse) {
      setStripeAccount(getStripeAccountResponse);
    }
  };

  const [tabsList, setTabsList] = useState([
    { label: "General", value: 0 },
    { label: "Reminders", value: 1 },
    { label: "Billing", value: 2 },
    // { label: "Fast Checkout", value: 4 },
    // { label: "Location", value: 3 },
    { label: "Widget", value: 5 },
    { label: "Translations", value: 6 },
  ]);

  const viewModeOptions = [
    { label: "List", value: "list" },
    { label: "Grid", value: "grid" },
    // { label: "Categories", value: "category" },
    // { label: "Workflow", value: "progressive" },
  ];
  const pageSizes = [
    {
      label: "10 items",
      value: 10,
    },
    {
      label: "20 items",
      value: 20,
    },
    {
      label: "50 items",
      value: 50,
    },
  ];

  const filters = ["Locations", "Languages", "Categories", "Members"];
  const availableViewMods = viewModeOptions.map((opt) => opt.label);
  const availablePageSizes = pageSizes.map((opt) => opt.label);
  const [selectedTab, setSelectedTab] = useState(0);
  const handleSelectChange = (val) => {
    setSelectedTab(val);
  };
  const [defaultEndTime, setDefaultEndTime] = useState(moment());
  const timeOptions = [
    { label: "24 hours", value: 24 },
    { label: "12 hours", value: 12 },
  ].map((format) => format.label);
  const eventTypes = [
    { label: "Event", value: "offline" },
    { label: "Zoom Event", value: "online" },
  ];

  const currencyOptions = [
    { label: "Currency sign: $ / 元" },
    { label: "Alphabets: USD / CAD / CNY" },
  ].map((format) => format.label);

  const validateWidgetSettings = (newSettings) => {
    let settings = { ...newSettings };
    if (settings.ew_events_list_view === undefined) {
      settings.ew_events_list_view = "list";
    }
    if (settings.ew_events_grid_fluid_mode === undefined) {
      settings.ew_events_grid_fluid_mode = false;
    }
    if (settings.ew_card_description_display_words_limit === undefined) {
      settings.ew_card_description_display_words_limit = 9;
    }
    if (settings.ew_list_item_description_display_words_limit === undefined) {
      settings.ew_list_item_description_display_words_limit = 9;
    }
    if (settings.ew_events_list_page_size_default === undefined) {
      settings.ew_events_list_page_size_default = 10;
    }
    if (settings.ew_widget_desplayed_filter === undefined) {
      settings.ew_widget_desplayed_filter =
        "Locations,Languages,Categories,Members";
    }
    if (settings.ew_show_language_selector === undefined) {
      settings.ew_show_language_selector = true;
    }
    if (settings.ew_show_top_filters === undefined) {
      settings.ew_show_top_filters = true;
    }
    if (settings.show_calendar === undefined) {
      settings.show_calendar = true;
    }
    if (settings.permanently_open_calendar === undefined) {
      settings.permanently_open_calendar = true;
    }
    if (settings.show_widget_title === undefined) {
      settings.show_widget_title = true;
    }
    if (settings.ew_events_counter === undefined) {
      settings.ew_events_counter = true;
    }
    if (settings.ew_hide_view_mode_switch === undefined) {
      settings.ew_hide_view_mode_switch = true;
    }
    if (settings.show_event_images === undefined) {
      settings.show_event_images = true;
    }
    if (settings.ew_image_aspect === undefined) {
      settings.ew_image_aspect = false;
    }
    if (settings.show_events_list_separator_badge === undefined) {
      settings.show_events_list_separator_badge = true;
    }
    if (settings.ew_show_quantity === undefined) {
      settings.ew_show_quantity = false;
    }
    if (settings.ew_show_share_button === undefined) {
      settings.ew_show_share_button = true;
    }
    if (settings.ew_show_event_type_badge === undefined) {
      settings.ew_show_event_type_badge = true;
    }
    if (settings.translations === undefined) {
      settings.translations = mergeTranslations(
        getTranslationsTpl(),
        settings?.settings?.widget_style_settings?.translations || {}
      );
    }

    return settings;
  };

  const validateSettings = (newSettings) => {
    let validatedSettings = { ...newSettings };
    validatedSettings.settings.widget_style_settings =
      validatedSettings.settings.widget_style_settings.length > 0
        ? JSON.parse(validatedSettings.settings.widget_style_settings)
        : {};
    validatedSettings.settings.admin_dashboard =
      validatedSettings.settings.admin_dashboard.length > 0
        ? JSON.parse(validatedSettings.settings.admin_dashboard)
        : {};

    // console.log(
    //   !newSettings,
    //   !newSettings.settings,
    //   !newSettings.settings.admin_dashboard,
    //   !newSettings.settings.admin_dashboard.default_timezone
    // );
    if (
      !newSettings ||
      !newSettings.settings ||
      !newSettings.settings.admin_dashboard ||
      !newSettings.settings.admin_dashboard.default_timezone
    ) {
      validatedSettings.settings.admin_dashboard.default_timezone =
        "US/Pacific";
    }
    if (
      !newSettings ||
      !newSettings.settings ||
      !newSettings.settings.admin_dashboard ||
      !newSettings.settings.admin_dashboard.default_duration
    ) {
      validatedSettings.settings.admin_dashboard.default_duration = 1;
    }
    if (
      !newSettings ||
      !newSettings.settings ||
      !newSettings.settings.admin_dashboard ||
      !newSettings.settings.admin_dashboard.default_start_time
    ) {
      validatedSettings.settings.admin_dashboard.default_start_time = moment(
        "10:00 am",
        "hh:mm a"
      ).format("hh:mm a");
    }
    if (
      !newSettings ||
      !newSettings.settings ||
      !newSettings.settings.admin_dashboard ||
      !newSettings.settings.admin_dashboard.default_price
    ) {
      validatedSettings.settings.admin_dashboard.default_price = 10.0;
    }
    if (!newSettings.stetings) {
      validatedSettings.settings.time_format_24_hours = false;
    }
    if (
      !newSettings ||
      !newSettings.settings ||
      !newSettings.settings.admin_dashboard ||
      !newSettings.settings.admin_dashboard.default_event_type
    ) {
      validatedSettings.settings.admin_dashboard.default_event_type = "offline";
    }
    if (!newSettings.currency || newSettings.currency.length === 0) {
      validatedSettings.currency = "sign";
    }
    if (!newSettings.settings) {
      validatedSettings.hide_time_zone = false;
    }
    if (!newSettings.first_reminder_hours) {
      validatedSettings.first_reminder_hours = 24;
    }
    if (!newSettings.second_reminder_hours) {
      validatedSettings.second_reminder_hours = 2;
    }
    validatedSettings.settings.widget_style_settings = validateWidgetSettings(
      validatedSettings.settings.widget_style_settings
    );
    setTabsList(
      validatedSettings.current_plan
        ? [
            { label: "General", value: 0 },
            { label: "Reminders", value: 1 },
            { label: "Billing", value: 7 },
            // { label: "Fast Checkout", value: 4 },
            { label: "Widget", value: 5 },
            { label: "Translations", value: 6 },
            // { label: "Location", value: 3 },
          ]
        : [
            { label: "General", value: 0 },
            { label: "Reminders", value: 1 },
            // { label: "Fast Checkout", value: 4 },
            { label: "Widget", value: 5 },
            { label: "Translations", value: 6 },
            { label: "Billing", value: 7 },
          ]
    );
    setSettings({ ...validatedSettings }, () => {});
  };
  const getSettings = async () => {
    setLoading(true);
    const getSettingsResponse = await axios(
      "/wp-json/servv-plugin/v1/shop/info",
      {
        headers: { "X-WP-Nonce": servvData.nonce },
      }
    ).catch((error) => toast("Servv unable to fetch settings."));
    if (getSettingsResponse && getSettingsResponse.status === 200) {
      validateSettings(getSettingsResponse.data);
    }
    setLoading(false);
  };
  const getBillingPlans = async () => {
    setLoading(true);
    const getBillingPlansResponse = await axios(
      "/wp-json/servv-plugin/v1/shop/paymentplans",
      {
        headers: { "X-WP-Nonce": servvData.nonce },
      }
    ).catch((error) => toast("Servv unable to fetch billing plans."));
    if (getBillingPlansResponse && getBillingPlansResponse.status === 200) {
      setBillingPlans(getBillingPlansResponse.data.plans);
    }
    setLoading(false);
  };
  const defaultWidgetLanguage =
    settings?.settings?.widget_style_settings?.widgets_default_language || "en";
  const translations = mergeTranslations(
    getTranslationsTpl(),
    settings?.settings?.widget_style_settings?.translations || {}
  );
  const getDefaultWidgetLanguageName = () => {
    const fullList = getLanguagesList();

    const langCode = fullList.filter(
      (lang) => lang.value === defaultWidgetLanguage
    )[0].label;

    return langCode;
  };
  // useEffect(() => {
  //   let newTime = null;
  //   if (
  //     settings &&
  //     settings.settings &&
  //     settings.settings.admin_dashboard &&
  //     settings.settings.admin_dashboard.default_start_time
  //   ) {
  //     newTime = moment(
  //       settings.settings.admin_dashboard.default_start_time,
  //       "hh:mm a"
  //     );

  //     setDefaultEndTime(
  //       newTime.add(settings.settings.admin_dashboard.default_duration, "hours")
  //     );
  //   } else {
  //     newTime = moment("11:00 am", "hh:mm a");
  //     setDefaultEndTime(newTime);
  //   }
  // }, [settings]);
  const saveSettings = async () => {
    setLoading(true);

    const saveSettingsResponse = await axios({
      method: "PUT",
      url: "/wp-json/servv-plugin/v1/shop/settings",
      headers: { "X-WP-Nonce": servvData.nonce },
      data: {
        ...settings,
        settings: {
          ...settings.settings,
          admin_dashboard: JSON.stringify(settings.settings.admin_dashboard),
          widget_style_settings: JSON.stringify(
            settings.settings.widget_style_settings
          ),
        },
      },
    });
    if (saveSettingsResponse && saveSettingsResponse.status === 200) {
      toast("Settings saved successfully.");
    }
    setLoading(false);
  };
  const getSettingsInfo = async () => {
    if (servvData.servv_plugin_mode === "development") {
      await getSettings();
      await getBillingPlans();
      if (settings.current_plan.id === 2) {
        await getZoomAccount();
        await getStripeAccount();
      }
    } else {
      getSettings();
      getBillingPlans();
      if (settings.current_plan.id === 2) {
        getZoomAccount();
        getStripeAccount();
      }
    }
  };

  useEffect(() => {
    getSettingsInfo();
  }, []);
  const durationOptions = () => {
    const options = [];
    for (let i = 1; i <= 12; i++) {
      if (i === 1) options.push({ label: "1 hour", value: 1 });
      else {
        options.push({ label: `${i} hours`, value: i });
      }
    }

    return options.map((option) => option.label);
  };
  const handleTimezoneChange = (zone) => {
    let currentSettings = { ...settings };
    currentSettings.settings.admin_dashboard.default_timezone = zone;
    setSettings(currentSettings);
  };
  const handleDefaultStartTimeChange = (newVal) => {
    let currentSettings = { ...settings };
    let newTime = moment(newVal);
    currentSettings.settings.admin_dashboard.default_start_time =
      newTime.format("hh:mm a");
    setDefaultEndTime(
      newTime.add(
        currentSettings.settings.admin_dashboard.default_duration,
        "hours"
      )
    );
    setSettings(currentSettings);
  };

  const handleDefaultDurationChange = (newVal) => {
    let currentSettings = { ...settings };
    let duration = durationOptions().indexOf(newVal);

    currentSettings.settings.admin_dashboard.default_duration = duration + 1;

    const newTime = moment(
      currentSettings.settings.admin_dashboard.default_start_time,
      "hh:mm a"
    );
    setDefaultEndTime(newTime.add(duration + 1, "hours"));
    setSettings(currentSettings);
  };
  const handleTimeFormatChange = (format) => {
    let currentSettings = { ...settings };
    const newFormat = format === "24 hours";
    currentSettings.settings.time_format_24_hours = newFormat;
    setSettings(currentSettings);
  };
  const handleHideTimezoneChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.hide_time_zone =
      !currentSettings.settings.hide_time_zone;
    setSettings(currentSettings);
  };
  const handleCurrencyChange = (currencyFormat) => {
    let currentSettings = { ...settings };
    if (currencyFormat === "Alphabets: USD / CAD / CNY")
      currentSettings.settings.widget_style_settings.currency_format =
        "alphabets";
    else
      currentSettings.settings.widget_style_settings.currency_format = "sign";
    setSettings(currentSettings);
  };

  const handleDefaultPriceChange = (newVal) => {
    let currentSettings = { ...settings };
    currentSettings.settings.admin_dashboard.default_price = newVal;
    setSettings(currentSettings);
  };

  const getDefaultStartTime = () => {
    if (
      settings &&
      settings.settings &&
      settings.settings.admin_dashboard &&
      settings.settings.admin_dashboard &&
      settings.settings.admin_dashboard.default_start_time
    ) {
      return moment(
        settings.settings.admin_dashboard.default_start_time,
        "hh:mm a"
      );
    } else return moment("10:00 am", "hh:mm a");
  };

  const handleEmailRemindersStateChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.disable_emails =
      !currentSettings.settings.disable_emails;
    setSettings(currentSettings);
  };
  const handleFirstReminderStateChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.first_reminder =
      !currentSettings.settings.first_reminder;
    setSettings(currentSettings);
  };
  const handleSecondReminderStateChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.second_reminder =
      !currentSettings.settings.second_reminder;
    setSettings(currentSettings);
  };
  const handleFinishedReminderStateChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.finished_reminder =
      !currentSettings.settings.finished_reminder;
    setSettings(currentSettings);
  };
  const handleFirstReminderHoursChange = (newVal) => {
    let currentSettings = { ...settings };
    currentSettings.first_reminder_hours = Number.parseInt(newVal);
    setSettings(currentSettings);
  };
  const handleSecondReminderHoursChange = (newVal) => {
    let currentSettings = { ...settings };
    currentSettings.second_reminder_hours = Number.parseInt(newVal);
    setSettings(currentSettings);
  };
  const handleDefaultTypeChange = (newVal) => {
    let currentSettings = { ...settings };
    if (newVal === "Online")
      currentSettings.settings.admin_dashboard.default_event_type = "online";
    else
      currentSettings.settings.admin_dashboard.default_event_type = "offline";
    setSettings(currentSettings);
  };

  const handleFreeCheckoutChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.free_events_skip_checkout =
      !currentSettings.settings.free_events_skip_checkout;
    setSettings(currentSettings);
  };

  const handleSkipCaptchaChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.free_events_skip_captcha =
      !currentSettings.settings.free_events_skip_captcha;
    setSettings(currentSettings);
  };

  const handleMarketingConsentChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.free_checkout_marketing_checkbox =
      !currentSettings.settings.free_checkout_marketing_checkbox;
    setSettings(currentSettings);
  };

  const handleNewAdditionalEmailsChange = (newVal) => {
    let currentSettings = { ...settings };
    currentSettings.additional_reminder_emails = newVal;
    setSettings(currentSettings);
  };

  const handleAdditionalRemindersHoursChange = (newVal) => {
    let currentSettings = { ...settings };
    currentSettings.members_reminder_hours = newVal;
    setSettings(currentSettings);
  };

  const handleStaffMemberEmailChange = () => {
    let currentSettings = { ...settings };
    currentSettings.settings.skip_members_in_calendar_files =
      !currentSettings.settings.skip_members_in_calendar_files;
    setSettings(currentSettings);
  };

  const getDefaultEndTime = () => {
    if (
      settings &&
      settings.settings &&
      settings.settings.admin_dashboard &&
      settings.settings.admin_dashboard.default_start_time &&
      settings.settings.admin_dashboard.default_duration
    ) {
      let newTime = moment(
        settings.settings.admin_dashboard.default_start_time,
        "hh:mm a"
      );
      newTime.add(settings.settings.admin_dashboard.default_duration, "hours");
      return newTime;
    } else return moment("11:00 am");
  };

  const handleViewModeChange = (val) => {
    let currentSettings = { ...settings };
    currentSettings.settings.widget_style_settings.ew_events_list_view =
      val.toLowerCase();
    setSettings(currentSettings);
  };

  const handleChangeFluidGrid = (val) => {
    let currentSettings = { ...settings };
    currentSettings.settings.widget_style_settings.ew_events_grid_fluid_mode =
      !currentSettings.settings.widget_style_settings.ew_events_grid_fluid_mode;
    setSettings(currentSettings);
  };

  const selectedView = settings?.settings?.widget_style_settings
    ?.ew_events_list_view
    ? viewModeOptions[
        viewModeOptions
          .map((opt) => opt.value)
          .indexOf(settings.settings.widget_style_settings.ew_events_list_view)
      ].label
    : "List";

  const selectedPageSize = settings?.settings?.widget_style_settings
    ?.ew_events_list_page_size_default
    ? pageSizes[
        pageSizes
          .map((opt) => opt.value)
          .indexOf(
            settings.settings.widget_style_settings
              .ew_events_list_page_size_default
          )
      ].name
    : "10 items";

  const handleDescriptionLengthChange = (view, length) => {
    let currentSettings = { ...settings };
    currentSettings.settings.widget_style_settings[view] =
      Number.parseInt(length);
    setSettings(currentSettings);
  };

  const handlePageSizeChange = (val) => {
    let currentSettings = { ...settings };
    currentSettings.settings.widget_style_settings.ew_events_list_page_size_default =
      Number.parseInt(val.split(" ")[0]);
    setSettings(currentSettings);
  };

  const handleSelectedFilterChange = (filter) => {
    let currentSettings = { ...settings };
    const filterSettings =
      settings.settings.widget_style_settings.ew_widget_desplayed_filter || "";
    let selectedFilters = filterSettings.split(",");
    if (selectedFilters.includes(filter)) {
      selectedFilters = selectedFilters.filter((fil) => fil !== filter);
    } else {
      selectedFilters.push(filter);
    }

    currentSettings.settings.widget_style_settings.ew_widget_desplayed_filter =
      selectedFilters.join(",");

    setSettings(currentSettings);
  };
  const [langForEdit, setLangForEdit] = useState(
    getDefaultWidgetLanguageName()
  );

  const handleSelectLanguageforEdit = (newVal) => {
    setLangForEdit(newVal);
  };
  const renderAvailableFilters = () => {
    const filterSettings =
      settings.settings.widget_style_settings.ew_widget_desplayed_filter || "";

    const selectedFilters = filterSettings.split(",");

    return filters.map((filter) => {
      return (
        <CheckboxControl
          label={filter}
          checked={selectedFilters.includes(filter)}
          onChange={() => handleSelectedFilterChange(filter)}
        />
      );
    });
  };

  const handleAdditionalPropertyChange = (prop) => {
    let currentSettings = { ...settings };
    currentSettings.settings.widget_style_settings[prop] =
      !currentSettings.settings.widget_style_settings[prop];
    setSettings(currentSettings);
  };

  const getLangsSelectOptions = () => {
    const fullList = getLanguagesList();
    const currentLanguagesList = Object.keys(translations);
    return fullList.filter((lang) => currentLanguagesList.includes(lang.value));
  };
  const handleDefaultLanguageChange = (newVal) => {
    let currentSettings = { ...settings };
    const fullList = getLanguagesList();
    const langCode = fullList.filter((lang) => lang.label === newVal)[0].value;

    currentSettings.settings.widget_style_settings.widgets_default_language =
      langCode;
    setSettings(currentSettings);
  };

  const handleTranslationChange = (section, lang, field, newVal) => {
    let currentSettings = { ...settings };

    settings.settings.widget_style_settings.translations[lang][section][field] =
      newVal;
    setSettings(currentSettings);
  };

  const renderTranslations = (section = "globalWidgetsTranslations") => {
    const fullList = getLanguagesList();
    const langCode = fullList.filter((lang) => lang.label === langForEdit)[0]
      .value;

    const translationSection =
      settings.settings.widget_style_settings.translations[langCode][section];

    return Object.keys(translationSection).map((translation) => {
      return (
        <BlockStack gap={1}>
          <span className="font-semibold">
            {capitalize(startCase(translation))}
          </span>
          <InputFieldControl
            value={translationSection[translation]}
            fullWidth={true}
            type="text"
            align="left"
            suffix={langCode}
            onChange={(newVal) =>
              handleTranslationChange(section, langCode, translation, newVal)
            }
          />
        </BlockStack>
      );
    });
    // forEach(
    //   translationsForEdit[this.state.currentLanguageForEdit][
    //     fieldsGroup
    //   ],
    //   (fieldValue, fieldName) => {
    //     const getFieldLabel = () => {
    //       if (fieldsGroup === "customFilters") {
    //         if (fieldName.indexOf("filter_label_") === 0) {
    //           if (fieldName === "filter_label_dates") return "Dates";
    //           else return capitalize(widget_style_settings[fieldName]);
    //         }
    //         const field = startCase(fieldName).replace("Filter Property", "");
    //         return capitalize(field);
    //         // return startCase(fieldName).replace('Filter Property', '');
    //       }
    //       return capitalize(startCase(fieldName));
    //     };

    //     inputsList.push(
    //       <TextField
    //         key={fieldName}
    //         suffix={currentLanguageForEdit}
    //         type="text"
    //         label={<Text as="strong">{getFieldLabel()}</Text>}
    //         onChange={(newVal) =>
    //           this.handlerTranslationFieldChange(fieldsGroup, fieldName, newVal)
    //         }
    //         value={fieldValue}
    //         disabled={isLoading}
    //       />
    //     );
    //   }
    // );

    // return inputsList;
    return null;
  };

  const activateBillingPlan = async (id) => {
    setLoading(true);
    const saveSettingsResponse = await axios({
      method: "POST",
      url: `/wp-json/servv-plugin/v1/shop/paymentplans/${id}`,
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    if (saveSettingsResponse && saveSettingsResponse.status === 200) {
      // toast("Unalbe to activate billing plan.");
      const { client_secret, public_key } = saveSettingsResponse.data;

      const stripe = await loadStripe(public_key);
      const handleComplete = async function () {
        checkout.destroy();
        toast("Your billing plan has been successfully activated.");
        await getBillingPlans();
        setShowPaymentForm(false);
        // const details = await retrievePurchaseDetails();

        // showPurchaseSummary(details);
      };
      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret: client_secret,
        // redirectOnCompletion: "if_required",
        onComplete: handleComplete,
      });

      setShowPaymentForm(true);
      checkout.mount("#servv-payment-element");
    }
    setLoading(false);
  };
  const renderBillingPlans = () => {
    if (!billingPlans) return;
    return billingPlans.map((plan) => {
      // console.log(plan);
      return (
        <BlockStack gap={2} cardsLayout={true} onAction={() => {}}>
          <div className="flex flex-col gap-2 border border-gray-200 bg-white rounded-lg flex flex-row p-lg">
            {/* <div
              className="card-image"
              style={{
                background: `url("${"https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}")`,
              }}
            /> */}
            <h2 className="card-section-heading">{plan.name}</h2>
            {plan.features.map((feature) => {
              return (
                <div className="flex flex-row justify-start align-center gap-2">
                  {feature.value === "true" ? (
                    <CheckCircleIcon className="w-6 fill-success-700" />
                  ) : (
                    <XCircleIcon className="w-6 fill-error-700" />
                  )}
                  <span>{feature.title}</span>
                </div>
              );
            })}
            <button
              disabled={
                settings &&
                (settings.current_plan.id === plan.id ||
                  plan.id < settings.current_plan.id)
              }
              className="rounded-lg border border-brand-300 text-sm text-brand-700 font-semibold px-lg py-md bg-white shadow-combined-brand disabled:border-gray-300 disabled:text-gray-300 disabled:shadow-combined-gray"
              onClick={() => activateBillingPlan(plan.id)}
            >
              {settings.current_plan.id === plan.id ? "Activated" : "Activate"}
            </button>
          </div>
        </BlockStack>
      );
    });
  };
  // console.log(settings);
  // const isBillingPlanRestriction = false;
  const isBillingPlanRestriction =
    settings && settings.current_plan && settings.current_plan.id === 1;
  return (
    <PageWrapper loading={loading}>
      <PageHeader>
        <BlockStack>
          <h1 className="text-display-sm font-semibold mt-6">Settings</h1>
          <p className="page-header-description">
            Set default values for any new events to save time.
          </p>
        </BlockStack>
        <InlineStack gap={2} align="right">
          <PageActionButton
            text="Cancel"
            icon={null}
            type="secondary"
            onAction={getSettingsInfo}
          />
          <PageActionButton
            text="Save"
            icon={null}
            type="primary"
            onAction={() => saveSettings()}
          />
        </InlineStack>
      </PageHeader>
      <PageContent>
        <BlockStack gap={8} cardsLayout={true}>
          <TabsComponent
            tabsList={tabsList}
            selected={selectedTab}
            handleSelectChange={handleSelectChange}
            fullWidth={true}
          />
          {selectedTab === 0 && (
            <BlockStack gap={8} cardsLayout={true}>
              {/* <h1 className="text-lg font-semibold border-b pb-4">
                General settings
              </h1> */}
              <AnnotatedSection
                title="Time zone"
                description="Set a default time zone."
              >
                <BlockStack gap={2}>
                  <SelectControl
                    label=""
                    options={timezoneOptions}
                    selected={
                      settings?.settings?.admin_dashboard?.default_timezone ||
                      null
                    }
                    onSelectChange={handleTimezoneChange}
                  />
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Time format"
                description="Set a default time format."
              >
                <BlockStack gap={4}>
                  <SelectControl
                    label=""
                    options={timeOptions}
                    selected={
                      settings?.settings?.time_format_24_hours
                        ? "24 hours"
                        : "12 hours"
                    }
                    onSelectChange={handleTimeFormatChange}
                  />
                  <CheckboxControl
                    label="Hide timezone abbreviation in email, widget and dashboard."
                    checked={settings?.settings?.hide_time_zone}
                    onChange={handleHideTimezoneChange}
                  />
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Currency format"
                description="Set a default currency."
              >
                <BlockStack gap={2}>
                  <SelectControl
                    label=""
                    options={currencyOptions}
                    selected={
                      settings?.settings?.widget_style_settings
                        ?.currency_format === "sign"
                        ? "Currency sign: $ / 元"
                        : "Alphabets: USD / CAD / CNY"
                    }
                    onSelectChange={handleCurrencyChange}
                  />
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Duration"
                description="Set a default event duration."
              >
                <BlockStack gap={2} cardsLayout={true}>
                  <SelectControl
                    label=""
                    options={durationOptions()}
                    selected={
                      settings &&
                      settings.settings &&
                      settings.settings.admin_dashboard &&
                      settings.settings.admin_dashboard.default_duration
                        ? durationOptions()[
                            settings.settings.admin_dashboard.default_duration -
                              1
                          ]
                        : "1 hour"
                    }
                    onSelectChange={(val) => handleDefaultDurationChange(val)}
                  />
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Start / end time"
                description="Set a default start and end time."
              >
                <BlockStack gap={2} cardsLayout={true}>
                  <div className="flex flex-row gap-5 justify-between">
                    <TimeInputControl
                      label="Start time"
                      time={getDefaultStartTime()}
                      onChange={(val) => handleDefaultStartTimeChange(val)}
                      minValue={0}
                      maxValue={12}
                      timeFormat={
                        settings?.seetings?.admin_dashboard
                          ?.time_format_24_hours
                          ? "HH:mm"
                          : "hh:mm a"
                      }
                    />

                    <TimeInputControl
                      label="End time"
                      time={getDefaultEndTime()}
                      onChange={() => {}}
                      minValue={0}
                      maxValue={60}
                      disabled={true}
                      timeFormat={
                        settings?.seetings?.admin_dashboard
                          ?.time_format_24_hours
                          ? "HH:mm"
                          : "hh:mm a"
                      }
                    />
                  </div>
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Ticket price"
                description="Set a default ticket price."
              >
                <BlockStack gap={2} cardsLayout={true}>
                  <InputFieldControl
                    value={
                      settings &&
                      settings.settings &&
                      settings.settings.admin_dashboard
                        ? settings.settings.admin_dashboard.default_price
                        : 0.0
                    }
                    type="number"
                    align="left"
                    minValue={0}
                    disabled={isBillingPlanRestriction || !stripeAccount}
                    onChange={(newVal) => handleDefaultPriceChange(newVal)}
                    width={"100%"}
                  />
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Location"
                description="Set a default event location."
              >
                <BlockStack gap={2} cardsLayout={true}>
                  <ButtonGroup
                    title=""
                    buttons={eventTypes.map((type) => type.label)}
                    active={
                      settings &&
                      settings.settings &&
                      settings.settings.admin_dashboard &&
                      settings.settings.admin_dashboard.default_event_type
                        ? eventTypes[
                            eventTypes
                              .map((type) => type.value)
                              .indexOf(
                                settings.settings.admin_dashboard
                                  .default_event_type
                              )
                          ].label
                        : "offline"
                    }
                    disabled={isBillingPlanRestriction || !zoomAccount}
                    onChange={(newVal) => handleDefaultTypeChange(newVal)}
                  />
                </BlockStack>
              </AnnotatedSection>
            </BlockStack>
          )}

          {selectedTab === 1 && (
            <BlockStack gap={8}>
              {/* <h1 className="text-lg font-semibold border-b pb-4">
                Reminders settings
              </h1> */}
              <AnnotatedSection
                title="Email notifications"
                description="Enable email notifications"
              >
                <BlockStack gap={2} cardsLayout={true}>
                  <CheckboxControl
                    label="Enable email notifications"
                    checked={settings?.settings?.disable_emails === false}
                    onChange={handleEmailRemindersStateChange}
                    disabled={isBillingPlanRestriction}
                  />
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="First reminder"
                description="Enable first reminder and specify time to first reminder"
              >
                <BlockStack gap={4} cardsLayout={true}>
                  <CheckboxControl
                    label="First reminder"
                    checked={settings?.settings?.first_reminder}
                    onChange={handleFirstReminderStateChange}
                    disabled={isBillingPlanRestriction}
                  />
                  <InputFieldControl
                    value={settings ? settings.first_reminder_hours : 0}
                    fullWidth={true}
                    type="number"
                    align="left"
                    disabled={isBillingPlanRestriction}
                    onChange={(newVal) =>
                      handleFirstReminderHoursChange(newVal)
                    }
                  />
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Second reminder"
                description="Enable second reminder and specify time to second reminder"
              >
                <BlockStack gap={4} cardsLayout={true}>
                  <CheckboxControl
                    label="Second reminder"
                    checked={settings?.settings?.second_reminder}
                    onChange={handleSecondReminderStateChange}
                    disabled={isBillingPlanRestriction}
                  />
                  <InputFieldControl
                    value={settings ? settings.second_reminder_hours : 0}
                    fullWidth={true}
                    type="number"
                    align="left"
                    disabled={isBillingPlanRestriction}
                    onChange={(newVal) =>
                      handleSecondReminderHoursChange(newVal)
                    }
                  />
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Finished reminder"
                description="Send notification after the event has ended"
              >
                <BlockStack gap={4} cardsLayout={true}>
                  <CheckboxControl
                    label="Finished reminder"
                    disabled={isBillingPlanRestriction}
                    checked={settings?.settings?.finished_reminder || 0}
                    onChange={handleFinishedReminderStateChange}
                  />
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Additional Email Notification Settings"
                description="Set up extra email alerts and reminders for your events. You can choose to skip staff notifications or add reminder emails at specific times before the event"
              >
                <BlockStack gap={8}>
                  <BlockStack gap={2} cardsLayout={true}>
                    <div className="input-container-col">
                      <div className="section-description">
                        Additional reminder emails list (comma-separated)
                      </div>
                      <InputFieldControl
                        value={
                          settings ? settings.additional_reminder_emails : ""
                        }
                        disabled={isBillingPlanRestriction}
                        fullWidth={true}
                        type="text"
                        align="left"
                        onChange={(newVal) =>
                          handleNewAdditionalEmailsChange(newVal)
                        }
                      />
                    </div>
                  </BlockStack>
                  <BlockStack gap={2} cardsLayout={true}>
                    <div className="input-container-col">
                      <div className="section-description">
                        Additional reminder hours
                      </div>
                      <InputFieldControl
                        value={settings ? settings.members_reminder_hours : 0}
                        fullWidth={true}
                        type="number"
                        align="left"
                        disabled={isBillingPlanRestriction}
                        onChange={(newVal) =>
                          handleAdditionalRemindersHoursChange(newVal)
                        }
                      />
                    </div>
                  </BlockStack>
                  <BlockStack gap={2} cardsLayout={true}>
                    <CheckboxControl
                      label="Skip Staff Email Notification"
                      disabled={isBillingPlanRestriction}
                      checked={
                        settings?.settings?.skip_members_in_calendar_files || 0
                      }
                      onChange={handleStaffMemberEmailChange}
                    />
                  </BlockStack>
                </BlockStack>
              </AnnotatedSection>

              {/* <h1 className="text-lg font-semibold border-b pb-4">
                Event settings
              </h1> */}
            </BlockStack>
          )}
          {/* 
          {selectedTab === 2 && (
            
          )} */}
          {selectedTab == 3 && settings && settings.current_plan && (
            <BlockStack gap={8}>
              {/* <h1 className="text-lg font-semibold border-b pb-4">
                Event location
              </h1> */}
            </BlockStack>
          )}
          {selectedTab === 4 && (
            <BlockStack gap={8}>
              {/* <h1 className="text-lg font-semibold border-b pb-4">
                Event settings
              </h1> */}
              <AnnotatedSection
                title="Enable Fast Checkout for Free Events"
                description="Activate fast checkout to speed up the booking process for free services"
              >
                <BlockStack gap={2} cardsLayout={true}>
                  <CheckboxControl
                    label="Enable Fast Checkout"
                    checked={settings?.settings?.free_events_skip_checkout || 0}
                    onChange={handleFreeCheckoutChange}
                  />
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Skip Captcha on Fast Checkout"
                description="Activate to bypass captcha verification during fast checkout for free services."
              >
                <BlockStack gap={2} cardsLayout={true}>
                  <CheckboxControl
                    label="Skip Captcha"
                    checked={settings?.settings?.free_events_skip_captcha || 0}
                    onChange={handleSkipCaptchaChange}
                  />
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Marketing Consent Checkbox"
                description="Turn on this option to show a checkbox at free checkout, so customers can sign up for marketing emails and newsletters"
              >
                <BlockStack gap={2} cardsLayout={true}>
                  <CheckboxControl
                    label="Marketing Consent"
                    checked={
                      settings?.settings?.free_checkout_marketing_checkbox || 0
                    }
                    onChange={handleMarketingConsentChange}
                  />
                </BlockStack>
              </AnnotatedSection>
            </BlockStack>
          )}
          {selectedTab === 5 && (
            <BlockStack gap={8}>
              <AnnotatedSection
                title="Display mode options"
                description="These settings let you choose how your widget appears on the page. Each mode offers a unique experience, tailored to your needs."
              >
                <BlockStack gap={8} cardsLayout={true}>
                  <SelectControl
                    label=""
                    options={availableViewMods}
                    selected={selectedView}
                    onSelectChange={handleViewModeChange}
                  />
                  {settings?.settings?.widget_style_settings
                    ?.ew_events_list_view === "grid" && (
                    <CheckboxControl
                      label="Fluid grid"
                      checked={
                        settings?.settings?.widget_style_settings
                          ?.ew_events_grid_fluid_mode || false
                      }
                      onChange={handleChangeFluidGrid}
                    />
                  )}
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Item settings"
                description="Configure the display limits and default page sizes for various items."
              >
                <BlockStack gap={8} cardsLayout={true}>
                  <InlineStack gap={4} cardsLayout={true} align={"left"}>
                    <BlockStack gap={2} cardsLayout={true}>
                      <span className="font-semibold">
                        Grid item description display limit
                      </span>
                      <InputFieldControl
                        value={
                          settings?.settings?.widget_style_settings
                            ?.ew_card_description_display_words_limit ?? ""
                        }
                        fullWidth={true}
                        type="number"
                        align="left"
                        onChange={(newVal) =>
                          handleDescriptionLengthChange(
                            "ew_card_description_display_words_limit",
                            newVal
                          )
                        }
                        suffix="words"
                      />
                    </BlockStack>
                    <BlockStack gap={2} cardsLayout={true}>
                      <span className="font-semibold">
                        List item description display limit
                      </span>
                      <InputFieldControl
                        value={
                          settings?.settings?.widget_style_settings
                            ?.ew_list_item_description_display_words_limit ?? ""
                        }
                        fullWidth={true}
                        type="number"
                        align="left"
                        onChange={(newVal) =>
                          handleDescriptionLengthChange(
                            "ew_list_item_description_display_words_limit",
                            newVal
                          )
                        }
                        suffix="words"
                      />
                    </BlockStack>
                  </InlineStack>
                  <BlockStack gap={1} cardsLayout={true}>
                    <span className="font-semibold">Default page size</span>
                    <SelectControl
                      label=""
                      options={availablePageSizes}
                      selected={selectedPageSize}
                      onSelectChange={handlePageSizeChange}
                    />
                  </BlockStack>
                </BlockStack>
              </AnnotatedSection>
              <AnnotatedSection
                title="Filter settings"
                description="Select the filters to be displayed on the event widget."
              >
                {settings?.settings?.widget_style_settings && (
                  <BlockStack gap={8}>{renderAvailableFilters()}</BlockStack>
                )}
              </AnnotatedSection>
              <AnnotatedSection
                title="Additional widget display settings"
                description="Select which parts of the events widget users can see. Also, adjust the visibility of different components"
              >
                <BlockStack gap={8} cardsLayout={true}>
                  <span className="font-semibold border-b pb-1">
                    Widget elements
                  </span>
                  <CheckboxControl
                    label="Show language selector"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.ew_show_language_selector || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange(
                        "ew_show_language_selector"
                      )
                    }
                  />
                  {/* <CheckboxControl
                    label="Show filters on top"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.ew_show_top_filters || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange("ew_show_top_filters")
                    }
                  /> */}
                  <CheckboxControl
                    label="Show calendar"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.show_calendar || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange("show_calendar")
                    }
                  />
                  <CheckboxControl
                    label="Display calendar permanently"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.permanently_open_calendar || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange(
                        "permanently_open_calendar"
                      )
                    }
                  />
                  <CheckboxControl
                    label="Show widget title"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.show_widget_title || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange("show_widget_title")
                    }
                  />

                  <CheckboxControl
                    label="Show events counter"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.ew_events_counter || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange("ew_events_counter")
                    }
                  />
                  <CheckboxControl
                    label="View mode switch"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.ew_hide_view_mode_switch || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange("ew_hide_view_mode_switch")
                    }
                  />
                  <span className="font-semibold border-b pb-1">
                    Item elements
                  </span>
                  <CheckboxControl
                    label="Show event images"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.show_event_images || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange("show_event_images")
                    }
                  />
                  <CheckboxControl
                    label="Show images as square"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.ew_image_aspect || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange("ew_image_aspect")
                    }
                  />
                  <CheckboxControl
                    label="Show separator badges"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.show_events_list_separator_badge || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange(
                        "show_events_list_separator_badge"
                      )
                    }
                  />
                  <CheckboxControl
                    label="Show quantity"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.ew_show_quantity || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange("ew_show_quantity")
                    }
                  />
                  <CheckboxControl
                    label="Share button"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.ew_show_share_button || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange("ew_show_share_button")
                    }
                  />
                  <CheckboxControl
                    label="Event type badge"
                    checked={
                      settings?.settings?.widget_style_settings
                        ?.ew_show_event_type_badge || false
                    }
                    onChange={() =>
                      handleAdditionalPropertyChange("ew_show_event_type_badge")
                    }
                  />
                </BlockStack>
              </AnnotatedSection>
            </BlockStack>
          )}
          {selectedTab === 6 && (
            <BlockStack gap={8} cardsLayout={true}>
              <AnnotatedSection
                title="Default language for widgets"
                description="Translate text in widgets to any language"
              >
                <SelectControl
                  // label="Languages"
                  label={"Default language"}
                  options={getLangsSelectOptions().map((lang) => lang.label)}
                  onSelectChange={handleDefaultLanguageChange}
                  selected={getDefaultWidgetLanguageName()}
                  // disabled={isLoading}
                />
              </AnnotatedSection>
              <AnnotatedSection
                title="Language for translate"
                description="Before choosing the default language, select one from the
                  list. Then, edit the widget fields and save the changes"
              >
                <SelectControl
                  label="Language"
                  options={getLangsSelectOptions().map((lang) => lang.label)}
                  onSelectChange={handleSelectLanguageforEdit}
                  selected={langForEdit}
                />
              </AnnotatedSection>
              <AnnotatedSection title="Global Widgets Translations">
                {renderTranslations()}
              </AnnotatedSection>
              <AnnotatedSection title="Events Widget Translations">
                {renderTranslations("mainWidget")}
              </AnnotatedSection>
            </BlockStack>
          )}
          {selectedTab === 7 && (
            <BlockStack gap={8}>
              {!showPaymentForm && (
                <InlineStack gap={4} cardsLayout={true}>
                  {renderBillingPlans()}
                </InlineStack>
              )}
              <div id="servv-payment-element"></div>
            </BlockStack>
          )}
        </BlockStack>
      </PageContent>
    </PageWrapper>
  );
};
export default SettingsPage;
