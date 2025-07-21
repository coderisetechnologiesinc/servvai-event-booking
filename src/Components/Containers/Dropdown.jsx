const Dropdown = (props) => {
  return (
    <div className="dropdown">
      {props.activator && props.activator}
      <div
        className={`dropdown-content ${!props.status ? "hidden" : "inline-flex"
          }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Dropdown;
