import { gql } from "@apollo/client";

export const GET_LAST_POSTS = gql`
query GET_LAST_POSTS {
  posts(first: 6,  where: {orderby: {field: DATE, order: DESC}}) {
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
