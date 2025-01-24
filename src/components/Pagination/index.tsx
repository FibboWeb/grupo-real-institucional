import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PaginationProps {
  blogContext: string;
  currentPage: number;
  totalPages: number;
  hasPrevious: boolean;
  hasMore: boolean;
  slug: string;
}

const Pagination = ({ blogContext, currentPage, totalPages, hasPrevious, hasMore, slug }: PaginationProps) => {
  if (totalPages <= 1) return null;
  const getPageNumbers = () => {
    let pages = [];

    if (totalPages <= 5) {
      pages = [...Array(totalPages)].map((_, index) => index + 1);
    } else {
      pages = [1];
      if (currentPage > 2) {
        pages.push(currentPage - 1);
      }

      pages.push(currentPage);

      if (currentPage < totalPages - 1) {
        pages.push(currentPage + 1);
      }
      pages.push(totalPages);
      if (pages[1] > 2) {
        pages = [1, "...", ...pages.slice(1)];
      }
      if (pages[pages.length - 2] < totalPages - 1) {
        pages = [...pages.slice(0, pages.length - 1), "...", totalPages];
      }
    }
    pages = Array.from(new Set(pages));

    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <div>
        {hasPrevious ? (
          <Link href={`${blogContext}/noticias/categoria/${slug}${currentPage > 1 ? `?page=${currentPage - 1}` : ""}`}>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
              <ChevronLeft />
              <span className="sr-only">Anterior</span>
            </button>
          </Link>
        ) : (
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded cursor-not-allowed opacity-50" disabled>
            <ChevronLeft />
            <span className="sr-only">Anterior</span>
          </button>
        )}
      </div>
      <div className="flex space-x-2">
        {getPageNumbers().map((page, index) => {
          if (page === "...") {
            return (
              <span key={index + page} className="px-4 py-2 text-gray-700">
                ...
              </span>
            );
          }
          const pageUrl =
            page === 1
              ? `${blogContext}/noticias/categoria/${slug}`
              : `${blogContext}/noticias/categoria/${slug}?page=${page}`;

          return (
            <Link key={page} href={pageUrl}>
              <button
                className={`px-4 py-2 rounded transition ${
                  currentPage === page ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            </Link>
          );
        })}
      </div>
      <div>
        {hasMore ? (
          <Link href={`${blogContext}/noticias/categoria/${slug}?page=${currentPage + 1}`}>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
              <ChevronRight />
              <span className="sr-only">Próximo</span>
            </button>
          </Link>
        ) : (
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded cursor-not-allowed opacity-50" disabled>
            <ChevronRight />
            <span className="sr-only">Próximo</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
