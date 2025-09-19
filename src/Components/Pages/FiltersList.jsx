import FilterTable from "../Containers/FilterTable";
import Card from "../Containers/Card";
import PageActionButton from "../Controls/PageActionButton";
import { Fragment } from "react";
import InlineStack from "../Containers/InlineStack";
import BlockStack from "../Containers/BlockStack";
import PageContentPlaceholder from "../Containers/PageContentPlaceholder";
import CheckboxControl from "../Controls/CheckboxControl";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import { toast } from "react-toastify";
const FiltersList = ({
  title,
  filters,
  selected,
  onSelect,
  onEdit,
  onDelete,
  onSelectAll,
  handleSingleDelete,
  setLoading,
}) => {
  // Improved headings logic for all filter types
  const headings = () => {
    if (title === "Languages") {
      return [
        { label: "Name", value: "name" },
        { label: "Order", value: "priority" },
        { label: "", value: "action1" },
      ];
    }
    if (title === "Locations") {
      return [
        { label: "Name", value: "name" },
        { label: "Details", value: "details" },
        { label: "Operational hours", value: "operational_hours" },
        { label: "Order", value: "priority" },
        { label: "", value: "action" },
      ];
    }
    if (title === "Members") {
      return [
        { label: "Name", value: "name" },
        { label: "Email", value: "email" },
        { label: "Phone", value: "phone" },
        { label: "Description", value: "description" },
        { label: "Order", value: "priority" },
        { label: "", value: "action" },
      ];
    }
    if (title === "Categories") {
      return [
        { label: "Name", value: "name" },
        { label: "Description", value: "details" },
        { label: "Order", value: "priority" },
        { label: "", value: "action" },
      ];
    }
    return [
      { label: "Name", value: "name" },
      { label: "Order", value: "priority" },
      { label: "", value: "action" },
    ];
  };
  const renderHeadings = () => (
    <Fragment>
      <th>
        <CheckboxControl
          checked={selected.length === filters.length}
          onChange={() => onSelectAll()}
        />
      </th>
      {headings().map((heading) => <th>{heading.label}</th>)}
      <th></th>
    </Fragment>
  );

  const renderRows = (filters) =>
    filters.map((row) => (
      <tr className="table-row" key={row.id}>
        <td>
          <CheckboxControl
            checked={selected.includes(row.id)}
            onChange={() => onSelect(row.id)}
          />
        </td>
        {headings().map((heading) => (
          <td key={heading.value}>
            {heading.value === "name" ? (
              <a
                href="#"
                className="filter-table-link"
                onClick={(e) => onEdit(e, row)}
              >
                {row[heading.value]}
              </a>
            ) : (
              <span>{row[heading.value]}</span>
            )}
          </td>
        ))}
        <td>
          <div className="flex flex-row gap-4">
            {/* Single row delete with confirm */}
            <TrashIcon
              className="button-icon"
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure you want to delete this ${title.slice(0, -1).toLowerCase()}?`
                  )
                ) {
                  onDelete(title, [row.id]);
                }
              }}
            />
            <PencilIcon
              className="button-icon"
              onClick={(e) => onEdit(e, row)}
            />
          </div>
        </td>
      </tr>
    ));
  return (
    <Fragment>
      <BlockStack gap={4}>
        <InlineStack>
          {/* Bulk delete with confirm */}
          <PageActionButton
            text="Delete"
            icon={null}
            type="secondary"
            onAction={() => {
              if (
                selected.length > 0 &&
                window.confirm(
                  `Are you sure you want to delete the selected ${title.toLowerCase()}?`
                )
              ) {
                onDelete(title, selected);
              }
            }}
            hidden={selected.length === 0}
          />
        </InlineStack>
        {filters && filters.length > 0 && (
          <Card>
            <FilterTable
              headings={renderHeadings()}
              rows={renderRows(filters)}
            />
          </Card>
        )}
        {/* Uncomment for placeholder if needed:
        {(filters.length === 0 || !filters) && (
          <PageContentPlaceholder
            icon={<MagnifyingGlassIcon className="placeholder-icon" />}
            title="No filters found"
            description="Filters allow your attendees to better search for and find events that apply to them."
          >
            <PageActionButton text="See examples" type="secondary" />
            <PageActionButton
              text="Create"
              icon={<PlusIcon className="button-icon" />}
              type="primary"
              onAction={() => { }}
            />
          </PageContentPlaceholder>
        )} */}
      </BlockStack>
    </Fragment>
  );
};
export default FiltersList;
