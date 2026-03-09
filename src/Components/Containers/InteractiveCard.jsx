import { CheckMark } from "../../assets/icons";

const InteractiveCard = ({
  isPremium = false,
  background,
  onClick,
  subtitle,
  title,
  text,
  action,
  footer,
  children,
  style,
  className = "",
  selected = false,
}) => {
  const computedBg = background ?? (isPremium ? "#462986" : "#FFFFFF");
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 flex-1 ${className}${
        onClick ? " cursor-pointer" : ""
      }`}
      style={{
        background: computedBg,
        border: selected ? "2px solid #7A5AF8" : "1px solid #E6EBE7",
        boxShadow:
          "0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03)",
        ...style,
      }}
      onClick={onClick}
    >
      {selected && (
        <div className="absolute top-3 right-3">
          <CheckMark />
        </div>
      )}

      {(subtitle || title || text) && (
        <div className="flex flex-col items-center gap-2 text-center">
          {subtitle && <div>{subtitle}</div>}
          {title && <div>{title}</div>}
          {text && <div>{text}</div>}
        </div>
      )}

      {children}

      {action && <div className="mt-auto pt-6">{action}</div>}

      {footer && <div className="mt-3 text-center">{footer}</div>}
    </div>
  );
};
export default InteractiveCard;
