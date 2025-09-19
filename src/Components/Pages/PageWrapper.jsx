import { ToastContainer } from "react-toastify";
import Spinner from "../Menu/Spinner";
const PageWrapper = (props) => {
  return (
    <div className="w-full relative">
      <div className="absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {props.loading && <Spinner loading={true} />}
      </div>
      <div
        className={`flex flex-col flex-1 h-full w-full pl-4 md:pl-6 lg:pl-8 pr-4 max-w-full min-w-0 overflow-visible ${
          props.loading ? "loading" : ""
        }`}
      >
        <ToastContainer position="bottom-right" />
        {props.children}
      </div>
    </div>
  );
};
export default PageWrapper;
