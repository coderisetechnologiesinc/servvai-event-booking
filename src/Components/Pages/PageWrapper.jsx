import { ToastContainer } from "react-toastify";
import Spinner from "../Menu/Spinner";
const PageWrapper = (props) => {
  return (
    <div className="w-full border-l border-gray-200 relative">
      <div className="absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {props.loading && <Spinner loading={true} />}
      </div>
      <div
        className={`pl-4 pr-4 flex flex-col flex-1 max-w-[1080px] mx-auto h-full ${
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
