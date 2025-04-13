import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}: PaginationProps) {
  // Function to handle page change
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    let pages: number[] = [];

    // Always show first page
    pages.push(1);

    // Current page and surrounding pages
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    // Always show last page
    if (totalPages > 1) pages.push(totalPages);

    // Add ellipsis indicators
    let result: (number | 'ellipsis')[] = [];
    let prevPage = 0;

    pages.forEach((page) => {
      if (page - prevPage > 1) {
        result.push('ellipsis');
      }
      result.push(page);
      prevPage = page;
    });

    return result;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-1 py-4">
      {/* First Page */}
      <button
        onClick={() => handlePageChange(1)}
        className="flex items-center justify-center px-3 py-1 text-sm text-gray-500 hover:text-gray-700 rounded bg-white"
        aria-label="First Page"
      >
        <ChevronsLeft size={16} />
        <span className="ml-1">First</span>
      </button>

      {/* Previous Page */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="flex items-center justify-center px-3 py-1 text-sm text-gray-500 hover:text-gray-700 rounded bg-white"
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        <ChevronLeft size={16} />
        <span className="ml-1">Back</span>
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) =>
        page === 'ellipsis' ? (
          <span key={`ellipsis-${index}`} className="px-3 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-md text-sm ${
              currentPage === page
                ? 'bg-purple-600 text-white font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        )
      )}

      {/* Next Page */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="flex items-center justify-center px-3 py-1 text-sm text-gray-500 hover:text-gray-700 rounded bg-white"
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        <span className="mr-1">Next</span>
        <ChevronRight size={16} />
      </button>

      {/* Last Page */}
      <button
        onClick={() => handlePageChange(totalPages)}
        className="flex items-center justify-center px-3 py-1 text-sm text-gray-500 hover:text-gray-700 rounded bg-white"
        aria-label="Last Page"
      >
        <span className="mr-1">Last</span>
        <ChevronsRight size={16} />
      </button>
    </div>
  );
}
