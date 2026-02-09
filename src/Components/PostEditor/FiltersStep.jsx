import { Filter } from "../../assets/icons";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import NewSelectControl from "../Controls/NewSelectControl";
import NewInputControl from "../Controls/NewInputControl";
import { useServvStore } from "../../store/useServvStore";

const FiltersStep = ({ attributes, setAttributes, changeStep }) => {
  const filtersList = useServvStore((s) => s.filtersList);

  // filters
  const filters = attributes.filters || {};
  const categoryId = filters.category_id || "";
  const languageId = filters.language_id || "";
  const memberIds = filters.members || [];

  // custom fields
  const customFields = attributes.custom_fields || {};
  const { custom_field_2_name = "", custom_field_2_value = "" } = customFields;

  const hasAnyFilters =
    filtersList?.categories?.length > 0 ||
    filtersList?.languages?.length > 0 ||
    filtersList?.members?.length > 0;

  const mapOptions = (list = []) =>
    list.map((i) => ({
      value: String(i.id),
      label: i.name,
    }));

  // update filters
  const updateFilter = (key, value) =>
    setAttributes({
      filters: {
        ...(attributes.filters || {}),
        [key]: Number.parseInt(value),
      },
    });

  // update custom fields
  const updateCustomField = (key, value) => {
    setAttributes({
      custom_fields: {
        [key]: value,
      },
    });
  };

  return (
    <div className="step__wrapper">
      <div className="step__header">
        <Filter className="step__header_icon" />
        <div className="step__heading">
          <h4 className="step__header_title">Additional notes</h4>
          <p className="step__description">
            Set filters and add additional notes
          </p>
        </div>
      </div>

      <div className="step__content">
        <div className="step__content_block">
          {hasAnyFilters && (
            <div className="step__content">
              {/* Category */}
              {filtersList.categories?.length > 0 && (
                <div className="step__content_block">
                  <span className="step__content_title">Category</span>
                  <NewSelectControl
                    helpText="Select category"
                    value={categoryId}
                    options={mapOptions(filtersList.categories)}
                    onChange={(val) => updateFilter("category_id", val)}
                    iconRight={<ChevronDownIcon />}
                    style={{ width: "100%" }}
                  />
                </div>
              )}

              {/* Language */}
              {filtersList.languages?.length > 0 && (
                <div className="step__content_block">
                  <span className="step__content_title">Language</span>
                  <NewSelectControl
                    helpText="Select language"
                    value={languageId}
                    options={mapOptions(filtersList.languages)}
                    onChange={(val) => updateFilter("language_id", val)}
                    iconRight={<ChevronDownIcon />}
                    style={{ width: "100%" }}
                  />
                </div>
              )}

              {/* Members */}
              {filtersList.members?.length > 0 && (
                <div className="step__content_block">
                  <span className="step__content_title">Members</span>
                  <NewSelectControl
                    value={memberIds}
                    options={mapOptions(filtersList.members)}
                    multiple
                    onChange={(vals) => updateFilter("members", vals)}
                    style={{ width: "100%" }}
                  />
                </div>
              )}

              <div className="step__content_delimeter" />
            </div>
          )}

          {/* Custom fields */}
          <div className="step__content">
            {/* <span className="step__content_title">Additional notes</span> */}
            <div className="step__content_block">
              <span className="step__content_title">Title</span>
              <NewInputControl
                // label="Title"
                placeholder="e.g. Parking info, Access instructions, What to bring"
                value={custom_field_2_name}
                onChange={(val) =>
                  updateCustomField("custom_field_2_name", val)
                }
              />
            </div>
            <div className="step__content_block">
              <span className="step__content_title">Message</span>
              <NewInputControl
                // label="Description"
                placeholder="Add details or paste a link (PDF, Google Drive, etc.) for attendees"
                value={custom_field_2_value}
                textarea={true}
                onChange={(val) =>
                  updateCustomField("custom_field_2_value", val)
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="servv_actions mt-auto">
        <button
          type="button"
          className="servv_button servv_button--secondary"
          onClick={() => changeStep("tickets")}
        >
          Previous
        </button>

        <button
          type="button"
          className="servv_button servv_button--primary"
          onClick={() => changeStep("branding")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default FiltersStep;
