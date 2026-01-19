import { ToastContainer } from "react-toastify";
import { Fragment } from "react";
import Spinner from "../Menu/Spinner";

const PageWrapper = (props) => {
  return (
    <Fragment>
      {props.withBackground && <div className="fixed inset-0 bg-[#F5F5F5]" />}

      <div className="w-full relative pl-4 flex flex-col min-h-0">
        {/* centered spinner */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {props.loading && <Spinner loading={true} />}
        </div>

        {/* MAIN CONTENT WINDOW */}
        <div
          className={`flex flex-col flex-1 w-full pr-4 max-w-full min-w-0 min-h-0 overflow-hidden ${
            props.loading ? "loading" : ""
          }`}
        >
          <ToastContainer position="bottom-right" />
          {props.children}
        </div>
      </div>
    </Fragment>
  );
};

export default PageWrapper;
