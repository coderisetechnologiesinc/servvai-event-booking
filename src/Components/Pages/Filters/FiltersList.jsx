import FilterTable from "../../Containers/FilterTable";
import Card from "../../Containers/Card";
import PageActionButton from "../../Controls/PageActionButton";
import { Fragment, useState } from "react";
import InlineStack from "../../Containers/InlineStack";
import BlockStack from "../../Containers/BlockStack";

import CheckboxControl from "../../Controls/CheckboxControl";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import SpinnerLoader from "../SpinnerLoader";
import ConfirmationModal from "../../Controls/ConfirmationModal";
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
  loading,
}) => {
  const navigate = useNavigate();
  const [confirmModal, setConfirmModal] = useState({
    open: false,
    title: "",
    text: "",
    onAccept: () => {},
  });

  const openConfirm = ({ title, text, onAccept }) => {
    setConfirmModal({ open: true, title, text, onAccept });
  };

  const closeConfirm = () => {
    setConfirmModal((prev) => ({ ...prev, open: false }));
  };

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
      {headings().map((heading) => (
        <th>{heading.label}</th>
      ))}
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
          <td key={heading.value} className="max-w-[150px]">
            {heading.value === "name" ? (
              <div className="truncate w-full">
                <a
                  href="#"
                  className="filter-table-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/filters/new/${title}?id=${row.id}`);
                  }}
                >
                  {row[heading.value]}
                </a>
              </div>
            ) : (
              <div className="truncate w-full">
                <span className="break-all">{row[heading.value]}</span>
              </div>
            )}
          </td>
        ))}

        <td>
          <div className="flex flex-row gap-4">
            <TrashIcon
              className="button-icon"
              onClick={() => {
                openConfirm({
                  title: `Delete ${title.slice(0, -1)}`,
                  text: `Are you sure you want to delete this ${title.slice(0, -1).toLowerCase()}?`,
                  onAccept: () => {
                    onDelete(title, [row.id]);
                    closeConfirm();
                  },
                });
              }}
            />

            <PencilIcon
              className="button-icon"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/filters/new/${title}?id=${row.id}`);
              }}
            />
          </div>
        </td>
      </tr>
    ));

  return (
    <Fragment>
      <ConfirmationModal
        data={{
          ...confirmModal,
          onCancel: closeConfirm,
        }}
      />
      <BlockStack gap={4}>
        <InlineStack>
          <PageActionButton
            text="Delete"
            icon={null}
            type="secondary"
            className={selected.length > 0 ? "" : "invisible"}
            onAction={() => {
              if (selected.length > 0) {
                openConfirm({
                  title: `Delete ${title}`,
                  text: `Are you sure you want to delete the selected ${title.toLowerCase()}?`,
                  onAccept: () => {
                    onDelete(title, selected);
                    closeConfirm();
                  },
                });
              }
            }}
            hidden={selected.length === 0}
          />
        </InlineStack>
        {filters && filters.length > 0 && (
          <Card>
            <SpinnerLoader isLoading={loading}>
              <FilterTable
                headings={renderHeadings()}
                rows={renderRows(filters)}
              />
            </SpinnerLoader>
          </Card>
        )}
      </BlockStack>
    </Fragment>
  );
};
export default FiltersList;
