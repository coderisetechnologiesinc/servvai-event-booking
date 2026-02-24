import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
const ListPagination = ({
  hasNext,
  hasPrev,
  onNext = () => {},
  onPrev = () => {},
  onSelect = () => {},
  pageNumber,
  pageCount,
  totalItems = null,
  showingItems = null,
}) => {
  const renderPaginationPages = () => {
    return (
      <>
        {totalItems && showingItems && (
          <span className="pagination-control-text self-center">{`${showingItems} of ${totalItems}`}</span>
        )}
      </>
    );
  };
  return (
    <div className="pagination-container">
      <button
        className="pagination-control"
        disabled={!hasPrev}
        onClick={() => onPrev()}
      >
        <ArrowLeftIcon className="pagination-control-icon" />
        <span className="pagination-control-text">{t("Previous")}</span>
      </button>
      {renderPaginationPages()}
      <button
        className="pagination-control"
        disabled={!hasNext}
        onClick={() => onNext()}
      >
        <ArrowRightIcon className="pagination-control-icon" />
        <span className="pagination-control-text">{t("Next")}</span>
      </button>
    </div>
  );
};
export default ListPagination;
