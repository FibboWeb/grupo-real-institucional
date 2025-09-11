import { gql } from "@apollo/client";
import { gql as gql_homepet } from "@apollo/client";

export const GET_LAST_POSTS_NOTICIAS = gql`
  query GET_LAST_POSTS_NOTICIAS {
    posts(first: 4, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            slug
          }
        }
        categories(first: 1) {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_LAST_POSTS_NOTICIAS_HOMEOPET = gql_homepet`
query GET_LAST_POSTS_NOTICIAS_HOMEOPET {
  posts(
    first: 4
    where: {orderby: {field: DATE, order: DESC}, categoryName: "Notícias"}
  ) {
    nodes {
      id
      title
      slug
      link
      date
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          name
          slug
        }
      }
      categories(first: 1) {
        nodes {
          name
          slug
        }
      }
    }
  }
}
`

export const GET_POSTS_NOTICIAS_MOST_VIEWED = gql`
  query GET_POSTS_MOST_VIEWED {
    popularPosts(first: 5) {
      nodes {
        slug
        viewCount
        id
        title
        categories(first: 1) {
          nodes {
            name
          }
        }
        categories(first: 1) {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GetPostMostViewedAPI = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}posts?per_page=5&orderby=wpb_post_views_count&_embed=wp:featuredmedia,wp:term,author`, {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await response.json();

  const customData = data.map((post) => {
    return {
      ...post,
      title: post.title.rendered,
      content: post.content.rendered,
      categories: {
        nodes: post._embedded["wp:term"][0],
      },
      featuredImage: {
        node: {
          sourceUrl: post._embedded["wp:featuredmedia"][0].source_url,
          altText: post._embedded["wp:featuredmedia"][0].alt_text,
        }
      },
      author: {
        node: {
          name: 'Comunicação Grupo Real',
          slug: 'realh',
        }
      }
    }
  })

  return customData;
}

export const GET_POSTS_LAST_NOTICIAS_PAGE = gql`
  query GET_LAST_POSTS_NOTICIAS_PAGE {
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            slug
          }
        }
        categories(first: 1) {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_LAST_POSTS_EVENTOS = gql`
  query GET_LAST_POSTS_EVENTOS {
    posts(first: 6, where: { orderby: { field: DATE, order: DESC }, categoryId: 762 }) {
      nodes {
        id
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_ALL_POSTS_SLUG = gql`
  query GET_ALL_POSTS_SLUG($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        categories(first: 1) {
          nodes {
            name
            slug
          }
        }
        slug
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
