import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, slug, blogContext }) {
  const generatePaginationLinks = () => {
    const paginationLinks = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      paginationLinks.push(
        <Link key={1} href={`${blogContext}/${slug}`} className="px-3 py-2 border rounded hover:bg-gray-200">
          1
        </Link>,
      );
      if (startPage > 2) {
        paginationLinks.push(
          <span key="ellipsis1" className="px-2 py-2 hidden md:block">
            ...
          </span>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationLinks.push(
        <Link
          key={i}
          href={i === 1 ? `${blogContext}/${slug}` : `${blogContext}/${slug}?page=${i}`}
          className={`px-3 py-2 border rounded ${i === currentPage ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
        >
          {i}
        </Link>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationLinks.push(
          <span key="ellipsis2" className="px-2 py-2 hidden md:block">
            ...
          </span>,
        );
      }
      paginationLinks.push(
        <Link
          key={totalPages}
          href={`${blogContext}/${slug}?page=${totalPages}`}
          className="px-3 py-2 border rounded hover:bg-gray-200"
        >
          {totalPages}
        </Link>,
      );
    }

    return paginationLinks;
  };

  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
      {totalPages > 1 && (
        <>
          {currentPage > 1 && (
            <Link
              href={currentPage === 2 ? `${blogContext}/${slug}` : `${blogContext}/${slug}?page=${currentPage - 1}`}
              className="px-2 py-2 border rounded hover:bg-gray-200 hidden md:block"
            >
              <ChevronLeft />
            </Link>
          )}
          {generatePaginationLinks()}
          {currentPage < totalPages && (
            <Link
              href={`${blogContext}/${slug}?page=${currentPage + 1}`}
              className="px-2 py-2 border rounded hover:bg-gray-200 hidden md:block"
            >
              <ChevronRight />
            </Link>
          )}
        </>
      )}
    </div>
  );
}
