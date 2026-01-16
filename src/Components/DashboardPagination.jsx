import React, { useMemo } from "react";

const DashboardPagination = ({
  currentPage = 1,
  totalPages,
  totalRecords,
  pageSize = 10,
  maxVisiblePages = 3,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const centerPages = useMemo(() => {
    const pages = [];
    const delta = Math.floor(maxVisiblePages / 2);

    let start = Math.max(2, currentPage - delta);
    let end = Math.min(totalPages - 1, currentPage + delta);

    if (currentPage <= delta + 1) {
      end = Math.min(totalPages - 1, maxVisiblePages + 1);
    }

    if (currentPage >= totalPages - delta) {
      start = Math.max(2, totalPages - maxVisiblePages);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);

  const showLeftEllipsis = centerPages.length > 0 && centerPages[0] > 2;

  const showRightEllipsis =
    centerPages.length > 0 &&
    centerPages[centerPages.length - 1] < totalPages - 1;

  const startRecord = (currentPage - 1) * pageSize + 1;
  const endRecord = Math.min(currentPage * pageSize, totalRecords);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="events-pagination-wrapper">
      <nav
        className="events-pagination"
        role="navigation"
        aria-label="Pagination"
      >
        {/* Prev */}
        <button
          className="events-pagination__btn events-pagination__btn--prev"
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
          aria-label="Previous page"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="events-pagination__numbers">
          {/* First */}
          <button
            className={`events-pagination__number ${
              currentPage === 1 ? "events-pagination__number--active" : ""
            }`}
            onClick={() => goToPage(1)}
          >
            1
          </button>

          {showLeftEllipsis && (
            <span className="events-pagination__ellipsis">…</span>
          )}

          {centerPages.map((page) => (
            <button
              key={page}
              className={`events-pagination__number ${
                page === currentPage ? "events-pagination__number--active" : ""
              }`}
              aria-current={page === currentPage ? "page" : undefined}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}

          {showRightEllipsis && (
            <span className="events-pagination__ellipsis">…</span>
          )}

          {/* Last */}
          {totalPages > 1 && (
            <button
              className={`events-pagination__number ${
                currentPage === totalPages
                  ? "events-pagination__number--active"
                  : ""
              }`}
              onClick={() => goToPage(totalPages)}
            >
              {totalPages}
            </button>
          )}
        </div>

        {/* Next */}
        <button
          className="events-pagination__btn events-pagination__btn--next"
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
          aria-label="Next page"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

      <div className="events-pagination__info">
        Showing {startRecord}-{endRecord} of {totalRecords} events
      </div>
    </div>
  );
};

export default DashboardPagination;
