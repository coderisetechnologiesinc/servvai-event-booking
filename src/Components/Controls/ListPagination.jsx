import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
const ListPagination = ({
  hasNext,
  hasPrev,
  onNext = () => {},
  onPrev = () => {},
  onSelect = () => {},
  pageNumber,
  pageCount,
}) => {
  const renderPaginationPages = () => {};
  return (
    <div className="pagination-container">
      <button
        className="pagination-control"
        disabled={!hasPrev}
        onClick={() => onPrev()}
      >
        <ArrowLeftIcon className="pagination-control-icon" />
        <span className="pagination-control-text">Previous</span>
      </button>
      {/* {renderPaginationPages()} */}
      <button
        className="pagination-control"
        disabled={!hasNext}
        onClick={() => onNext()}
      >
        <ArrowRightIcon className="pagination-control-icon" />
        <span className="pagination-control-text">Next</span>
      </button>
    </div>
  );
};
export default ListPagination;
