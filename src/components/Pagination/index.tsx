// components/Pagination.tsx

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  hasPrevious: boolean;
  hasMore: boolean;
  slug: string;
}

const Pagination = ({ currentPage, totalPages, hasPrevious, hasMore, slug }: PaginationProps) => {
  // Lógica para não exibir a paginação caso o total de páginas seja 1
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      {/* Link "Anterior" */}
      <div>
        {hasPrevious ? (
          <Link href={`/noticias/categoria/${slug}?page=${currentPage - 1}`}>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
              Anterior
            </button>
          </Link>
        ) : (
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded cursor-not-allowed opacity-50" disabled>
            Anterior
          </button>
        )}
      </div>

      {/* Números de página */}
      <div className="flex space-x-2">
        {/* Paginações anteriores */}
        {currentPage > 1 && (
          <Link href={`/noticias/categoria/${slug}?page=1`}>
            <button
              className={`px-4 py-2 rounded transition ${
                currentPage === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              1
            </button>
          </Link>
        )}

        {/* Páginas intermediárias */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
          ) {
            return (
              <Link key={pageNumber} href={`/noticias/categoria/${slug}?page=${pageNumber}`}>
                <button
                  className={`px-4 py-2 rounded transition ${
                    currentPage === pageNumber
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {pageNumber}
                </button>
              </Link>
            );
          }
          return null;
        })}
      </div>

      {/* Link "Próximo" */}
      <div>
        {hasMore ? (
          <Link href={`/noticias/categoria/${slug}?page=${currentPage + 1}`}>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
              Próximo
            </button>
          </Link>
        ) : (
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded cursor-not-allowed opacity-50" disabled>
            Próximo
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
