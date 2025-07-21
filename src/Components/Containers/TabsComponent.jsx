const TabsComponent = ({
  tabsList,
  selected,
  handleSelectChange,
  fullWidth,
}) => {
  const renderTabs = () => {
    return tabsList.map((tab) => {
      return (
        <li className="me-2">
          <button
            onClick={() => handleSelectChange(tab.value)}
            className={`tab-element ${
              selected === tab.value ? "tab-active" : ""
            }`}
          >
            {tab.label}
          </button>
        </li>
      );
    });
  };
  return (
    <div
      className={`tabs-group-container ${
        fullWidth ? "w-full justify-between" : ""
      }`}
    >
      <ul className="flex flex-row">{renderTabs()}</ul>
    </div>
  );
};
export default TabsComponent;
