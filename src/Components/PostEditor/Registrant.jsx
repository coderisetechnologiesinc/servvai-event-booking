import InlineStack from "../Containers/InlineStack";
import Badge from "../Containers/Badge";
import CheckboxControl from "../Controls/CheckboxControl";
const Registrant = ({
  id,
  firstName,
  lastName,
  email,
  status,
  onStatusChange,
  onSelect,
  selected,
}) => {
  console.log(id, selected);
  return (
    <div className="registrant group">
      <InlineStack gap={2} align="left">
        <CheckboxControl onChange={() => onSelect(id)} checked={selected} />
        <strong>{firstName + " " + lastName}</strong>
        <span>{email}</span>
        {/* {!status && (
          <Badge
            text="Draft"
            size="medium"
            color="success"
            type="pill-colour"
          />
        )} */}
        {status === "create" && (
          <Badge
            text="Draft"
            size="medium"
            color="success"
            type="pill-colour"
          />
        )}
        {status === "delete" && (
          <Badge text="Delete" size="medium" color="error" type="pill-colour" />
        )}
        <button
          className="flex-row items-center px-2 rounded-lg border-solid border border-error-700 bg-error-600 text-gray-50 text-sm ml-auto hidden group-hover:flex"
          onClick={() => onStatusChange(id)}
        >
          {!status || status === "create" ? "Delete" : "Revert"}
        </button>
      </InlineStack>
    </div>
  );
};
export default Registrant;
