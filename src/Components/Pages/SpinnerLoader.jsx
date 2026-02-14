import React from "react";
import Spinner from "../Menu/Spinner";

const SpinnerLoader = ({ isLoading, children, customStyling }) => {
  return (
    <div className="relative">
      <div className={isLoading ? "blur-sm pointer-events-none" : ""}>
        {children}
      </div>
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center ${customStyling}`}
        >
          <Spinner loading={true} />
        </div>
      )}
    </div>
  );
};

export default SpinnerLoader;
