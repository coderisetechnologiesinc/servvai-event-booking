import BlockStack from "../../Containers/BlockStack";
import AnnotatedSection from "../../Containers/AnnotatedSection";
import SelectControl from "../../Controls/SelectControl";
import CheckboxControl from "../../Controls/CheckboxControl";
import InputFieldControl from "../../Controls/InputFieldControl";
import TimeInputControl from "../../Controls/TimeInputControl";
import ButtonGroup from "../../Controls/ButtonGroup";
import NewTimeInputControl from "../../Controls/NewTimeInputControl";
const GeneralSettings = ({
  settings,
  timezones,
  timeOptions,
  currencyOptions,
  durationOptions,
  eventTypes,
  responsiveBlockStack,
  responsiveInput,
  isBillingPlanRestriction,
  stripeConnected,
  zoomAccount,
  handleTimezoneChange,
  handleTimeFormatChange,
  handleHideTimezoneChange,
  handleCurrencyChange,
  handleDefaultDurationChange,
  handleDefaultStartTimeChange,
  getDefaultStartTime,
  getDefaultEndTime,
  handleDefaultPriceChange,
  handleDefaultQuantityChange,
  handleDefaultTypeChange,
  handleDefaultEndTimeChange,
  getDurationOptions,
  formatDuration,
}) => {
  return (
    <BlockStack gap={8} cardsLayout={true} className={responsiveBlockStack}>
      <AnnotatedSection
        title="Time zone"
        description="Set a default time zone."
        className={responsiveBlockStack}
      >
        <BlockStack gap={2} className={responsiveBlockStack}>
          <SelectControl
            label=""
            options={timezones.map((t) => t.name)}
            selected={
              settings?.settings?.admin_dashboard?.default_timezone &&
              timezones.findIndex(
                (t) =>
                  t.id ===
                  settings?.settings?.admin_dashboard?.default_timezone,
              ) >= 0
                ? timezones[
                    timezones.findIndex(
                      (t) =>
                        t.id ===
                        settings?.settings?.admin_dashboard?.default_timezone,
                    )
                  ].name
                : null
            }
            onSelectChange={handleTimezoneChange}
            className={responsiveInput}
          />
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        title="Time format"
        description="Set a default time format."
        className={responsiveBlockStack}
      >
        <BlockStack gap={4} className={responsiveBlockStack}>
          <SelectControl
            label=""
            options={timeOptions}
            selected={
              settings?.settings?.time_format_24_hours ? "24 hours" : "12 hours"
            }
            onSelectChange={handleTimeFormatChange}
            className={responsiveInput}
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
        className={responsiveBlockStack}
      >
        <BlockStack gap={2} className={responsiveBlockStack}>
          <SelectControl
            label=""
            options={currencyOptions}
            selected={
              settings?.settings?.widget_style_settings?.currency_format ===
              "sign"
                ? "Currency sign: $ / 元"
                : "Alphabets: USD / CAD / CNY"
            }
            onSelectChange={handleCurrencyChange}
            className={responsiveInput}
          />
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        title="Duration"
        description="Set a default event duration."
        className={responsiveBlockStack}
      >
        <BlockStack gap={2} cardsLayout={true} className={responsiveBlockStack}>
          <SelectControl
            label=""
            options={getDurationOptions()}
            selected={
              settings?.settings?.admin_dashboard?.default_duration
                ? Number.isInteger(
                    settings.settings.admin_dashboard.default_duration,
                  ) && settings.settings.admin_dashboard.default_duration <= 12
                  ? durationOptions()[
                      settings.settings.admin_dashboard.default_duration - 1
                    ]
                  : formatDuration(
                      settings.settings.admin_dashboard.default_duration,
                    )
                : "1 hour"
            }
            onSelectChange={(val) => handleDefaultDurationChange(val)}
            className={responsiveInput}
          />
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        title="Start / end time"
        description="Set a default start and end time."
        className={responsiveBlockStack}
      >
        <BlockStack gap={2} cardsLayout={true} className={responsiveBlockStack}>
          <div className="step__time_control">
            <NewTimeInputControl
              label="Start time"
              time={getDefaultStartTime()}
              onChange={(val) => handleDefaultStartTimeChange(val)}
              timeFormat={
                settings?.settings?.time_format_24_hours ? "HH:mm" : "hh:mm a"
              }
            />
            <NewTimeInputControl
              label="End time"
              time={getDefaultEndTime()}
              onChange={(val) => handleDefaultEndTimeChange(val)}
              timeFormat={
                settings?.settings?.time_format_24_hours ? "HH:mm" : "hh:mm a"
              }
            />
          </div>
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        title="Ticket price"
        description="Set a default ticket price."
        className={responsiveBlockStack}
      >
        <BlockStack gap={2} cardsLayout={true} className={responsiveBlockStack}>
          <InputFieldControl
            value={
              settings && settings.settings && settings.settings.admin_dashboard
                ? settings.settings.admin_dashboard.default_price
                : 0.0
            }
            type="number"
            align="left"
            minValue={0}
            // disabled={isBillingPlanRestriction || !stripeConnected}
            onChange={(newVal) => handleDefaultPriceChange(newVal)}
            className={responsiveInput}
          />
        </BlockStack>
      </AnnotatedSection>

      <AnnotatedSection
        title="Ticket quantity"
        description={`Set a default ticket quantity. The maximum number of tickets for your plan is ${
          settings?.free_registrants_limit || 15
        }`}
        className={responsiveBlockStack}
      >
        <BlockStack gap={2} cardsLayout={true} className={responsiveBlockStack}>
          <InputFieldControl
            value={
              settings && settings.settings && settings.settings.admin_dashboard
                ? settings.settings.admin_dashboard.default_quantity
                : 0.0
            }
            type="number"
            align="left"
            minValue={0}
            disabled={isBillingPlanRestriction ? 15 : null}
            onChange={(newVal) => handleDefaultQuantityChange(newVal)}
            className={responsiveInput}
          />
        </BlockStack>
      </AnnotatedSection>

      {zoomAccount && (
        <AnnotatedSection
          title="Location"
          description="Set a default event location."
          className={responsiveBlockStack}
        >
          <BlockStack
            gap={2}
            cardsLayout={true}
            className={responsiveBlockStack}
          >
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
                          settings.settings.admin_dashboard.default_event_type,
                        )
                    ].label
                  : "offline"
              }
              disabled={isBillingPlanRestriction || !zoomAccount}
              onChange={(newVal) => handleDefaultTypeChange(newVal)}
            />
          </BlockStack>
        </AnnotatedSection>
      )}
    </BlockStack>
  );
};

export default GeneralSettings;
