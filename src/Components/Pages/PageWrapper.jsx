import { ToastContainer } from "react-toastify";
import { Fragment, useEffect } from "react";
import Spinner from "../Menu/Spinner";
import { useLocation } from "react-router-dom";
const PageWrapper = (props) => {
  const location = useLocation();
  useEffect(() => {
    if (window.Intercom) {
      if (location !== "/support") {
        window.Intercom("update", { hide_default_launcher: true });
      } else {
        window.Intercom("update", { hide_default_launcher: true });
      }
    }
  }, []);
  return (
    <Fragment>
      {props.withBackground && <div className="fixed inset-0 bg-[#F5F5F5]" />}

      <div className="w-full relative pl-4 flex flex-col min-h-0">
        {/* centered spinner */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {props.loading && !props.withoutSpinner && <Spinner loading={true} />}
        </div>

        {/* MAIN CONTENT WINDOW */}
        <div
          className={`flex flex-col flex-1 w-full pr-4 max-w-full min-w-0 min-h-0 overflow-visible ${
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
