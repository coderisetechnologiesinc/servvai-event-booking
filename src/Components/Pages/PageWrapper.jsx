import { ToastContainer } from "react-toastify";
import { Fragment } from "react";
import Spinner from "../Menu/Spinner";
const PageWrapper = (props) => {
  return (
    <Fragment>
      {props.withBackground && <div className="fixed inset-0 bg-[#F5F5F5]" />}
      <div className="w-full relative pl-4">
        <div className="absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {props.loading && <Spinner loading={true} />}
        </div>
        <div
          className={`flex flex-col flex-1 h-full w-full pr-4 max-w-full min-w-0 overflow-visible ${
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
