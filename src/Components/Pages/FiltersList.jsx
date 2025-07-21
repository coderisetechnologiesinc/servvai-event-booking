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
}) => {
  // const headings = [
  //   { label: "Name", value: "name" },
  //   { label: "Details", value: "details" },
  //   { label: "Operational hours", value: "operational_hours" },
  //   { label: "Priority", value: "priority" },
  // ];
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
  const renderHeadings = () => {
    return (
      <Fragment>
        <th>
          <CheckboxControl
            checked={selected.length === filters.length}
            onChange={() => onSelectAll()}
          />
          {/* <input type="checkbox" onClick={() => onSelectAll()} /> */}
        </th>
        {headings().map((heading) => {
          return <th>{heading.label}</th>;
        })}
        <th></th>
      </Fragment>
    );
  };

  const renderRows = (filters) => {
    return filters.map((row) => {
      return (
        <tr className="table-row">
          <td>
            <CheckboxControl
              checked={selected.includes(row.id)}
              onChange={() => onSelect(row.id)}
            />
            {/* <input
              type="checkbox"
              checked={selected.includes(row.id)}
              onChange={() => onSelect(row.id)}
            /> */}
          </td>
          {headings().map((heading) => {
            return (
              <td>
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
            );
          })}
          <td>
            <div className="flex flex-row gap-4">
              <TrashIcon
                className="button-icon"
                onClick={() => onDelete(title, [row.id])}
              />
              <PencilIcon
                className="button-icon"
                onClick={(e) => onEdit(e, row)}
              />
            </div>
          </td>
        </tr>
      );
    });
  };
  return (
    <Fragment>
      <BlockStack gap={4}>
        <InlineStack>
          <PageActionButton
            text="Delete"
            icon={null}
            type="secondary"
            onAction={() => onDelete(title, selected)}
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
        {/* {(filters.length === 0 || !filters) && (
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
