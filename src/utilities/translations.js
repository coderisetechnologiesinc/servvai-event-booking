import forEach from "lodash.foreach";

export const translationsKeysTpl = {
  customFilters: {
    filter_label_dates: "Dates",
    filter_label_locations: "Location",
    filter_label_languages: "Language",
    filter_label_categories: "Category",
    filter_label_members: "Member",
    filter_label_teams: "Team",
    filterPropertyDetailsLabel: "Details",
    filterPropertyEmailLabel: "Email",
    filterPropertyPhoneLabel: "Phone",
    filterPropertyOperationalHoursLabel: "Operational hours",
  },
  globalWidgetsTranslations: {
    priceLabel: "Price",
    filtersLabel: "Filters",
    calendarLabel: "Calendar",
    priceFreeLabel: "Free",
    dayLabelPlural: "d",
    dayLabelSingular: "d",
    hourLabelPlural: "h",
    hourLabelSingular: "h",
    minuteLabelPlural: "m",
    minuteLabelSingular: "m",
  },
  mainWidget: {
    openDialogButton: "Book event",
    eventsListTitle: "Events list",
    widgetEventsListSwitchLabel: "Events",
    eventAddToCartButtonLabel: "Add to Cart",
    liveShoppingJoinButtonLabel: "Join",
    liveShoppingStartCountdown: "in",
    searchEventPlaceholder: "Search",
    itemsCounterLabel: "items",
    clearFiltersLabel: "clear",
    bookButtonLabel: "Book now",
    eventDetailsButtonLabel: "Details",
    eventDescriptionFieldLabel: "Description",
    todaySeparatorLabel: "Today",
    tomorrowSeparatorLabel: "Tomorrow",
    filtersStepLabel: "Filters",
    resultStypeLabel: "Result",
    goToFiltersResultButton: "Next: Result",
    labelForMonthWithoutEvents: "There are no events scheduled for this month",
    nextMonthButton: "Next",
  },
  onProductWidget: {
    selectTimeButton: "Select the Date and Time",
    selectDateAndTimeButton: "Select the Date and Time",
    addToCartButton: "Add To Cart",
    registerInWaitingList: "Join the Waiting List",
    eventSoldOut: "Sold out",
    appointmentSoldOut: "Sold out",
    remainingBookingsLabel: "Hurry! Only ### left in stock!",
    addToCartLabel: "Confirm",
    questionsFormTitle: "Questions Form",
    additionalMembersFormTitle: "Multi Booking",
    memberFormDescription: "Add Email Addresses for Additional Recipients",
    freeCheckoutNewslettersAgreement:
      "Click here to receive marketing emails and newsletters",
    freeCheckoutCloseRegistrationButton: "Close",
    freeCheckoutInvalidEmailMessage: "Please enter a valid email address",
    freeCheckoutMandatoryRequiermentsMessageHeader:
      "Please fill in the form below with your email and name to complete your registration",
    freeRegistrationFormTitle: "Registration",
    freeRegistrationFormDescription:
      "Please fill in the form below with your email and name to complete your registration",
    fastRegistration: "Checkout",
    memberFormMember: "Additional Registrant",
    memberFormEmail: "Email",
    memberFormFirstName: "First Name",
    memberFormLastName: "Last Name",
    eventQuestionsFormTitle: "Event Questions Form",
    submitQuestionsForm: "Submit",
    mandatoryRequiermentsMessageHeader: "This field is mandatory",
    mandatoryRequiermentsMessage: "Please fill in this field",
    invalidEmailMessage: "Please enter a valid email address.",
    noAvailableSlots: "No appointment slots available at the moment",
    registrationCompletedMessageTitle: "Registration completed!",
    registrationCompletedMessageDescription:
      "You have successfully registered. A confirmation email has been sent to the provided email address. Please check your inbox.",
  },
};

export const defaultTranslationLanguages = [
  "zh-cn",
  "nl",
  "en",
  "fr",
  "de",
  "hi",
  "it",
  "ja",
  "ko",
  "no",
  "ru",
  "es",
  "sv",
];

export const languagesCodeName = {
  "zh-cn": "zh-CN",
  nl: "nl",
  en: "en-US",
  fr: "fr",
  de: "de",
  hi: "hi",
  it: "it",
  ja: "ja",
  ko: "ko",
  no: "no",
  ru: "ru",
  es: "es",
  sv: "sv",
};

export const getTranslationsTpl = () => {
  const tpl = {};

  forEach(defaultTranslationLanguages, (langCode) => {
    tpl[langCode] = translationsKeysTpl;
  });

  return tpl;
};

export const mergeTranslations = (
  recipientTranslations = {},
  injectedTranslations = {}
) => {
  const languagesForProcessing = Object.keys(recipientTranslations);

  const mergedTranslations = {};

  forEach(languagesForProcessing, (langCode) => {
    if (injectedTranslations[langCode] === undefined) {
      mergedTranslations[langCode] = translationsKeysTpl;
    } else {
      const langData = {};

      forEach(recipientTranslations[langCode], (sectionValue, sectionName) => {
        if (injectedTranslations[langCode][sectionName] === undefined) {
          langData[sectionName] = recipientTranslations[langCode][sectionName];
        } else {
          if (!langData[sectionName]) langData[sectionName] = {};
          const fieldsForProcessing = Object.keys(
            recipientTranslations[langCode][sectionName]
          );

          forEach(
            {
              ...recipientTranslations[langCode][sectionName],
              ...injectedTranslations[langCode][sectionName],
            },
            (fieldValue, fieldName) => {
              if (fieldsForProcessing.includes(fieldName)) {
                langData[sectionName][fieldName] = fieldValue;
              }
            }
          );
        }
      });
      mergedTranslations[langCode] = langData;
    }
  });

  return mergedTranslations;
};
