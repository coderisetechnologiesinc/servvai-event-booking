import React from "react";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const PremiumActivateButton = ({ 
  onActivate, 
  disabled = false, 
  loading = false,
  planName = "Premium",
  className = "" 
}) => {
  return (
    <button
      onClick={onActivate}
      disabled={disabled || loading}
      className={`
        relative overflow-hidden group
        w-full py-4 px-6 rounded-xl
        bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600
        hover:from-purple-700 hover:via-purple-800 hover:to-indigo-700
        active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-300 ease-out
        shadow-lg hover:shadow-xl
        border border-purple-500/20
        ${className}
      `}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Button content */}
      <div className="relative flex items-center justify-center space-x-3">
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span className="text-white font-semibold text-lg">{t("Activating...")}</span>
          </>
        ) : (
          <>
            <SparklesIcon className="w-6 h-6 text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300" />
            <span className="text-white font-bold text-lg tracking-wide">{t("Activate")}{planName}
            </span>
            <ArrowRightIcon className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
          </>
        )}
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-purple-600/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </button>
  );
};

export default PremiumActivateButton;