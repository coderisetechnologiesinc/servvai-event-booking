const TabsComponent = ({
  tabsList,
  selected,
  handleSelectChange,
  fullWidth,
}) => {
  const renderTabs = () => {
    return tabsList.map((tab) => (
      <li
        key={tab.value}
        style={{
          flex: "0 0 auto",
          minWidth: 120,
        }}
      >
        <button
          onClick={() => handleSelectChange(tab.value)}
          className={`tab-element ${
            selected === tab.value ? "tab-active" : ""
          }`}
          style={{
            minWidth: 120,
            whiteSpace: "nowrap",
            flex: "0 0 auto",
          }}
        >
          {tab.label}
        </button>
      </li>
    ));
  };

  // Responsive scroll for mobile
  return (
    <div
      className="tabs-group-container"
      style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        width: "100%",
        marginBottom: 16,
      }}
    >
      <ul
        className="flex flex-row servv-tabs"
        style={{
          flexWrap: "nowrap",
          minWidth: "100%",
          width: "max-content",
          marginBottom: 0,
        }}
      >
        {renderTabs()}
      </ul>
    </div>
  );
};
export default TabsComponent;
