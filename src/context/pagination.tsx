"use client";
import { getCategoriesNoticias } from "@/lib/getCategoriesNoticias";
import { createContext, ReactNode } from "react";
import { useRouter } from "next/router";

interface PaginationProviderProps {
  children: ReactNode;
}

export const PaginationContext = createContext({} as any);

function FetchSlugPage() {
  const { query } = useRouter();
  const slug = Array.isArray(query.categoria) ? query.categoria[0] : query.categoria;
  const page = query.page as string;

  return { slug, page };
}

export const PaginationProvider = async ({ children }: PaginationProviderProps) => {
  const { slug, page } = FetchSlugPage();
  console.log(slug, page);
  const postsPerPage = 6;
  const currentPage = page ? parseInt(page) : 1;
  const { category, posts, total, hasMore, hasPrevious, startCursor, endCursor } = await getCategoriesNoticias(
    slug,
    postsPerPage,
    currentPage,
  );
  // const [currentPage, setCurrentPage] = useState(1);

  // const [totalPages, setTotalPages] = useState(1);

  return (
    <PaginationContext.Provider
      value={{ category, slug, posts, total, hasMore, hasPrevious, startCursor, endCursor, currentPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

// const updateQuery = (previousResult, { fetchMoreResult }) => {
//   return fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult;
// };

// fetchMore({
//     variables: {
//       first: null,
//       after: null,
//       last: 10,
//       before: posts.pageInfo.startCursor || null
//     },
//     updateQuery
//   });

//   fetchMore({
//     variables: {
//       first: 10,
//       after: posts.pageInfo.endCursor || null,
//       last: null,
//       before: null
//     },
//     updateQuery
//   });
// }}
