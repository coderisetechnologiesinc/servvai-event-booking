import React from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// tone: "info" | "success" | "warning" | "critical"
const TONE_CONFIG = {
  info: {
    wrapper: "bg-utility-blue-ligth-50 border-utility-blue-ligth-200",
    icon: InformationCircleIcon,
    iconClass: "text-[#026AA2]",
    titleClass: "text-[#026AA2]",
    bodyClass: "text-[#026AA2]",
    actionClass:
      "text-[#026AA2] border-[#B9E6FE] hover:bg-[#E0F2FE] focus-visible:ring-[#026AA2]",
  },
  success: {
    wrapper: "bg-utility-success-50 border-utility-success-200",
    icon: CheckCircleIcon,
    iconClass: "text-success-700",
    titleClass: "text-success-700",
    bodyClass: "text-success-700",
    actionClass:
      "text-success-700 border-utility-success-200 hover:bg-success-100 focus-visible:ring-success-700",
  },
  warning: {
    wrapper: "bg-utility-warning-50 border-utility-warning-200",
    icon: ExclamationTriangleIcon,
    iconClass: "text-warning-700",
    titleClass: "text-warning-700",
    bodyClass: "text-warning-700",
    actionClass:
      "text-warning-700 border-utility-warning-200 hover:bg-warning-100 focus-visible:ring-warning-700",
  },
  critical: {
    wrapper: "bg-utility-error-50 border-utility-error-200",
    icon: ExclamationCircleIcon,
    iconClass: "text-error-700",
    titleClass: "text-error-700",
    bodyClass: "text-error-700",
    actionClass:
      "text-error-700 border-utility-error-200 hover:bg-error-100 focus-visible:ring-error-700",
  },
};

// action shape: { label: string, onAction: () => void, loading?: bool, disabled?: bool }
const Banner = ({
  tone = "info",
  title,
  children,
  action,
  secondaryAction,
  onDismiss,
  hideIcon = false,
  className = "",
}) => {
  const config = TONE_CONFIG[tone] ?? TONE_CONFIG.info;
  const Icon = config.icon;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex gap-3 rounded-lg border p-4 ${config.wrapper} ${className}`}
    >
      {!hideIcon && (
        <Icon
          className={`mt-0.5 size-5 shrink-0 ${config.iconClass}`}
          aria-hidden="true"
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        {title && (
          <p className={`text-sm font-semibold leading-5 ${config.titleClass}`}>
            {title}
          </p>
        )}

        {children && (
          <div className={`text-sm font-regular leading-5 ${config.bodyClass}`}>
            {children}
          </div>
        )}

        {(action || secondaryAction) && (
          <div className="mt-1 flex flex-wrap gap-2">
            {action && (
              <button
                type="button"
                onClick={action.onAction}
                disabled={action.disabled || action.loading}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${config.actionClass}`}
              >
                {action.loading ? (
                  <span className="inline-block size-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : null}
                {action.label}
              </button>
            )}
            {secondaryAction && (
              <button
                type="button"
                onClick={secondaryAction.onAction}
                disabled={secondaryAction.disabled || secondaryAction.loading}
                className={`inline-flex items-center gap-1.5 rounded-lg border border-transparent px-3 py-1.5 text-sm font-medium underline transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${config.actionClass}`}
              >
                {secondaryAction.label}
              </button>
            )}
          </div>
        )}
      </div>

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className={`ml-auto shrink-0 rounded p-0.5 transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 ${config.iconClass}`}
        >
          <XMarkIcon className="size-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default Banner;
