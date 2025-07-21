import forEach from 'lodash.foreach';
import has from 'lodash.has';

/**
 * Keep this structure because parser logic will work only with it.
 * @type {{blockName: {_label: string, elementName: {_label: string, propertyName: {value: string, _label: string}}}}}
 */
const styleCustomizationFields = {
  appointmentWidget: {
    _label: 'Appointment Widget',
    selectDateTimeBtn: {
      _label: 'Select Date and Time Button',
      textBorderColor: {
        _inputType: 'color',
        _label: 'Text and border color',
        value: '#000000',
      },
      backgroundColor: {
        _inputType: 'color',
        _label: 'Background color',
        value: '#ffffff',
      },
      textBorderColorHover: {
        _inputType: 'color',
        _label: 'Text and border color on hover',
        value: '#bdbdbd',
      },
      backgroundColorHover: {
        _inputType: 'color',
        _label: 'Background color on hover',
        value: '#ffffff',
      },
    },
    widgetPopup: {
      _label: 'Widget Pop-Up',
      backgroundColor: {
        _inputType: 'color',
        _label: 'Background color',
        value: '#ffffff',
      },
    },
    calendar: {
      _label: 'Calendar',
      mainTextColor: {
        _inputType: 'color',
        _label: 'Main text color',
        value: '#080808',
      },
      weekdaysTextColor: {
        _inputType: 'color',
        _label: 'Weekdays text color',
        value: '#080808',
      },
      unavailableDaysTextColor: {
        _inputType: 'color',
        _label: 'Unavailable days text color',
        value: '#d2d2d2',
      },
      datesWithEventsTextColor: {
        _inputType: 'color',
        _label: 'Dates with events text color',
        value: '#080808',
      },
      datesWithEventsBgrColor: {
        _inputType: 'color',
        _label: 'Dates with events background color',
        value: '#ffffff',
      },
      selectedDateTextColor: {
        _inputType: 'color',
        _label: 'Selected date text color',
        value: '#ffffff',
      },
      selectedDateBgrColor: {
        _inputType: 'color',
        _label: 'Selected date background color',
        value: '#080808',
      },
    },
    widgetHeader: {
      _label: 'Widget Header',
      headerTextColor: {
        _inputType: 'color',
        _label: 'Header text color',
        value: '#080808',
      },
      headerBgrColor: {
        _inputType: 'color',
        _label: 'Header background color',
        value: '#ffffff',
      },
    },
    timeSlot: {
      _label: 'Time Slots',
      availableSlotTextColor: {
        _inputType: 'color',
        _label: 'Available slot text color',
        value: '#080808',
      },
      availableSlotBgrColor: {
        _inputType: 'color',
        _label: 'Available slot background color',
        value: '#ffffff',
      },
      unavailableSlotTextColor: {
        _inputType: 'color',
        _label: 'Unavailable slot text color',
        value: '#d4d4d4',
      },
      unavailableSlotBgrColor: {
        _inputType: 'color',
        _label: 'Unavailable slot background color',
        value: '#fafafa',
      },
      selectedSlotTextColor: {
        _inputType: 'color',
        _label: 'Selected slot text color',
        value: '#ffffff',
      },
      selectedSlotBgrColor: {
        _inputType: 'color',
        _label: 'Selected slot background color',
        value: '#080808',
      },
    },
    addToCartBtn: {
      _label: 'Confirm Button',
      enabledBtnTextColor: {
        _inputType: 'color',
        _label: 'Enabled button text color',
        value: '#080808',
      },
      enabledBtnBgrColor: {
        _inputType: 'color',
        _label: 'Enabled button background color',
        value: '#ffffff',
      },
      enabledBtnTextColorHover: {
        _inputType: 'color',
        _label: 'Enabled button text color on hover',
        value: '#ffffff',
      },
      enabledBtnBgrColorHover: {
        _inputType: 'color',
        _label: 'Enabled button background color on hover',
        value: '#080808',
      },
      disabledBtnTextColor: {
        _inputType: 'color',
        _label: 'Disabled button text color',
        value: '#ffffff',
      },
      disabledBtnBgrColor: {
        _inputType: 'color',
        _label: 'Disabled button background color',
        value: '#d4d4d4',
      },
    },
  },
};

const decorateFieldsScope = fieldsScope => {
  const rawValuesScope = {};

  forEach(fieldsScope, (sectionValue, sectionName) => {
    rawValuesScope[sectionName] = {};

    forEach(sectionValue, (elementPropsValue, elementName) => {
      if (elementName === '_label') return;
      rawValuesScope[sectionName][elementName] = {};

      forEach(
        elementPropsValue,
        (elementPropItemValue, elementPropItemName) => {
          if (
            elementPropItemName === '_label' ||
            elementPropItemName === '_inputType'
          )
            return;
          rawValuesScope[sectionName][elementName][elementPropItemName] = {};
          rawValuesScope[sectionName][elementName][elementPropItemName].value =
            elementPropItemValue.value;
        }
      );
    });
  });
  return rawValuesScope;
};

export const getOriginStyleCustomizationFields = (rawValue = false) => {
  if (rawValue) {
    return decorateFieldsScope(styleCustomizationFields);
  }
  return styleCustomizationFields;
};

/**
 * @currentFieldsScope - saved fields of current store;
 * @originalFieldsScopeDecorated - default values scope without service
 * fields (_label and _inputType)
 * @mergedScope - result scope for render and future saving
 *
 * !!! If we change any _label of existing element in default scope, it will
 * be changed in marged scope and user will see and save already updated _label
 *
 */
export const mergeStyleCustomizationFields = currentFieldsScope => {
  if (!currentFieldsScope) return styleCustomizationFields;
  const originalFieldsScopeDecorated = getOriginStyleCustomizationFields(true);
  const mergedScope = {};

  try {
    forEach(
      originalFieldsScopeDecorated,
      (origSectionVal, originSectionName) => {
        if (!has(currentFieldsScope, originSectionName)) {
          mergedScope[originSectionName] =
            styleCustomizationFields[originSectionName];
        } else {
          mergedScope[originSectionName] = {};
          mergedScope[originSectionName]._label =
            styleCustomizationFields[originSectionName]._label;
          forEach(origSectionVal, (originElValue, originElName) => {
            if (!has(currentFieldsScope[originSectionName], originElName)) {
              mergedScope[originSectionName][originElName] =
                styleCustomizationFields[originSectionName][originElName];
            } else {
              mergedScope[originSectionName][originElName] = {};
              mergedScope[originSectionName][originElName]._label =
                styleCustomizationFields[originSectionName][
                  originElName
                ]._label;

              forEach(originElValue, (originElPropValue, originElPropName) => {
                if (
                  !has(
                    currentFieldsScope[originSectionName][originElName],
                    originElPropName
                  )
                ) {
                  mergedScope[originSectionName][originElName][
                    originElPropName
                  ] =
                    styleCustomizationFields[originSectionName][originElName][
                      originElPropName
                    ];
                } else {
                  mergedScope[originSectionName][originElName][
                    originElPropName
                  ] = {
                    ...currentFieldsScope[originSectionName][originElName][
                      originElPropName
                    ],
                    _label:
                      styleCustomizationFields[originSectionName][originElName][
                        originElPropName
                      ]._label,
                  };
                }
              });
            }
          });
        }
      }
    );
    return mergedScope;
  } catch (e) {
    console.log(e);
    return mergedScope;
  }
};

export const getDefaultPropValue = (section, element, propName) => {
  return styleCustomizationFields[section][element][propName].value || '';
};
