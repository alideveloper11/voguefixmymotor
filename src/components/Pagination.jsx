"use client";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Pagination({ 
  currentPage, 
  totalPages, 
  totalBlogs,
  onPageChange 
}) {
  // Don't render if only one page
  if (totalPages <= 1) return null;

  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];
    let l;

    // Create range of pages
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // First page
        i === totalPages || // Last page
        (i >= currentPage - delta && i <= currentPage + delta) // Pages around current
      ) {
        range.push(i);
      }
    }

    // Add dots where there are gaps
    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="pagination-wrapper" aria-label="Blog pagination">
      <div className="pagination-container">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn pagination-btn-prev"
          aria-label="Previous page"
        >
          <NavigateBeforeIcon fontSize="small" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="page-numbers">
          {pageNumbers.map((page, index) => {
            if (page === "...") {
              return (
                <span key={`dots-${index}`} className="pagination-dots">
                  …
                </span>
              );
            }

            const isActive = page === currentPage;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`pagination-number ${isActive ? "active" : ""}`}
                aria-label={`Go to page ${page}`}
                aria-current={isActive ? "page" : undefined}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-btn pagination-btn-next"
          aria-label="Next page"
        >
          <span className="hidden sm:inline">Next</span>
          <NavigateNextIcon fontSize="small" />
        </button>
      </div>

      {/* Show total blogs count */}
      {totalBlogs && (
        <div className="pagination-info">
          Showing <span className="font-semibold text-[#046b3f]">
            {Math.min(currentPage * 12 - 11, totalBlogs)}-{Math.min(currentPage * 12, totalBlogs)}
          </span> of <span className="font-semibold text-[#046b3f]">{totalBlogs}</span> blogs
        </div>
      )}

      <style jsx>{`
        .pagination-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 0.5rem 0;
        }

        .pagination-container {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: white;
          padding: 0.6rem 0.8rem;
          border-radius: 14px;
          box-shadow: 0 2px 12px rgba(4, 107, 63, 0.08);
          border: 1px solid rgba(4, 107, 63, 0.08);
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Base Button Styles */
        .pagination-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border: none;
          background: transparent;
          color: #4a5568;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 40px;
          white-space: nowrap;
        }

        .pagination-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
          pointer-events: none;
        }

        .pagination-btn:not(:disabled):hover {
          background: rgba(4, 107, 63, 0.06);
          color: #046b3f;
          transform: translateY(-1px);
        }

        .pagination-btn:not(:disabled):active {
          transform: scale(0.95);
        }

        .pagination-btn-prev {
          padding: 0.5rem 0.8rem;
        }

        .pagination-btn-next {
          padding: 0.5rem 0.8rem;
        }

        /* Page Numbers Container */
        .page-numbers {
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }

        .pagination-number {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 40px;
          height: 40px;
          padding: 0 0.4rem;
          border: none;
          background: transparent;
          color: #4a5568;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pagination-number:hover {
          background: rgba(4, 107, 63, 0.06);
          color: #046b3f;
          transform: translateY(-1px);
        }

        .pagination-number:active {
          transform: scale(0.92);
        }

        .pagination-number.active {
          background: #046b3f;
          color: white;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(4, 107, 63, 0.3);
          transform: scale(1.05);
        }

        .pagination-number.active:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(4, 107, 63, 0.4);
        }

        /* Dots */
        .pagination-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 34px;
          height: 40px;
          color: #a0aec0;
          font-size: 1rem;
          font-weight: 400;
          user-select: none;
          letter-spacing: 1px;
        }

        /* Page Info */
        .pagination-info {
          font-size: 0.85rem;
          color: #718096;
          font-weight: 400;
          background: rgba(255, 255, 255, 0.8);
          padding: 0.3rem 1rem;
          border-radius: 20px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(4, 107, 63, 0.06);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .pagination-container {
            padding: 0.4rem 0.5rem;
            gap: 0.2rem;
            border-radius: 12px;
          }

          .pagination-btn {
            font-size: 0.8rem;
            padding: 0.3rem 0.6rem;
            min-height: 34px;
          }

          .pagination-number {
            min-width: 34px;
            height: 34px;
            font-size: 0.85rem;
            border-radius: 8px;
          }

          .pagination-dots {
            min-width: 28px;
            height: 34px;
            font-size: 0.85rem;
          }

          .pagination-info {
            font-size: 0.75rem;
            padding: 0.2rem 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .pagination-container {
            padding: 0.3rem 0.3rem;
            gap: 0.1rem;
            border-radius: 10px;
          }

          .pagination-btn {
            font-size: 0.7rem;
            padding: 0.2rem 0.4rem;
            min-height: 30px;
            border-radius: 8px;
          }

          .pagination-btn span {
            display: none !important;
          }

          .pagination-number {
            min-width: 30px;
            height: 30px;
            font-size: 0.8rem;
            border-radius: 6px;
          }

          .pagination-dots {
            min-width: 22px;
            height: 30px;
            font-size: 0.75rem;
          }

          .pagination-info {
            font-size: 0.7rem;
            padding: 0.15rem 0.6rem;
          }
        }

        /* Animation for active page */
        .pagination-number.active {
          animation: pop-in 0.3s ease;
        }

        @keyframes pop-in {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.12);
          }
          100% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </nav>
  );
}