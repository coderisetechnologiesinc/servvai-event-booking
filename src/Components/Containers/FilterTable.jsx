import React from "react";

const FilterTable = ({
  headings,
  rows,
  loading = false,
  className = "",
  tableClassName = "",
  ...rest
}) => {
  return (
    <div className={`table-container w-full ${className}`} {...rest}>
      <table className={`filter-table w-full ${tableClassName}`}>
        <thead>
          <tr className="filter-table-headings">{headings}</tr>
        </thead>
        {loading ? (
          <tbody>
            <div
              className={
                loading
                  ? "flex flex-col flex-1 h-full w-full pl-4 md:pl-6 lg:pl-8 pr-4 max-w-full min-w-0 overflow-visible loading"
                  : ""
              }
            >
              {rows}
            </div>
          </tbody>
        ) : (
          <tbody>{rows}</tbody>
        )}
      </table>
    </div>
  );
};
export default FilterTable;
