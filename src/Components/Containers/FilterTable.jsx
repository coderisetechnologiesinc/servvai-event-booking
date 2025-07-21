const FilterTable = ({ headings, rows }) => {
  return (
    <table className="filter-table">
      <tr className="filter-table-headings">{headings}</tr>
      {rows}
    </table>
  );
};
export default FilterTable;
