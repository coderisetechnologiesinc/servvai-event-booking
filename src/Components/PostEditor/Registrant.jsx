import InlineStack from "../Containers/InlineStack";
import Badge from "../Containers/Badge";
import CheckboxItem from "../Controls/CheckboxItem";

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
  return (
    <div className="registrant group">
      <InlineStack gap={2} align="center">
        <CheckboxItem checked={selected} onChange={() => onSelect(id)} />
        <div className="flex flex-col gap-[6px]">
          <strong className="whitespace-nowrap">
            {firstName} {lastName}
          </strong>

          <span className="text-gray-600 truncate max-w-[220px]">{email}</span>
        </div>

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
          type="button"
          className="servv_button servv_button--danger servv_button--sm ml-auto opacity-0 pointer-events-none transition-opacity duration-150 group-hover:opacity-100 group-hover:pointer-events-auto"
          onClick={() => onStatusChange(id)}
        >
          {!status || status === "create" ? "Delete" : "Revert"}
        </button>
      </InlineStack>
    </div>
  );
};

export default Registrant;
