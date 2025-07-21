import BadgeImage from "./BadgeImage";
// size : small | medium | large

// type : pill-colour | pill-outline | badge | badge-modern

// color : gray | brand | error | warning | success | gray-blue | blue-light | blue | indigo | purple | pink | orange
const Badge = ({
  text,
  icon = null,
  iconAfter = null,
  image = null,
  color,
  type,
  size,
  align,
  fullWidth = false,
  justify = null,
  onAction = () => { },
}) => {
  const getColor = () => {
    if (color === "gray") {
      return "badge-gray";
    } else if (color === "brand") {
      return "badge-brand";
    } else if (color === "error") {
      return "badge-error";
    } else if (color === "warning") {
      return "badge-warning";
    } else if (color === "success") {
      return "badge-success";
    }
    return "badge-gray";
  };
  const getType = () => {
    if (type === "pill-colour") {
      return "badge-pill-colour";
    } else if (type === "pill-outline") {
      return "badge-pill-outline";
    } else if (type === "badge") {
      return "badge-colour";
    } else if (type === "badge-modern") {
      return "badge-modern";
    }
    return "badge-modern";
  };
  const getSize = () => {
    if (size === "small") {
      return "badge-small";
    } else if (size === "medium") {
      return "badge-medium";
    } else if (size === "large") {
      return "badge-large";
    }
    return "badge-small";
  };
  return (
    <div
      className={`badge ${fullWidth ? "w-max" : ""
        } ${getSize()} ${getType()} ${getColor()} ${align === "center" ? "items-center" : "items-end"
        } ${justify && justify === "start" ? "justify-start" : justify} cursor-pointer
`}
      onClick={onAction}
    >
      {icon && icon}
      {image && <BadgeImage image={image} />}
      {text && <span>{text}</span>}
      {iconAfter && iconAfter}
    </div>
  );
};
export default Badge;
