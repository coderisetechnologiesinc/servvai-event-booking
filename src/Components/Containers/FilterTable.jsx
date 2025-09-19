import React from "react";

const FilterTable = ({ headings, rows, className = "", tableClassName = "", ...rest }) => {
  return (
    <div className={`table-container w-full ${className}`} {...rest}>
      <table className={`filter-table w-full ${tableClassName}`}>
        <thead>
          <tr className="filter-table-headings">{headings}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
export default FilterTable;
