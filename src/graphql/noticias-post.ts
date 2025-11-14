import { gql } from "@apollo/client";

export const GET_POST_DETAILS = gql`
  query GET_POST($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      author {
        node {
          id
          name
          avatar {
            default
            extraAttr
            forceDefault
            foundAvatar
            height
            isRestricted
            rating
            scheme
            size
            url
            width
          }
          slug
          description
          databaseId
        }
      }
      categories(first: 1) {
        edges {
          node {
            categoryId
            name
            slug
          }
        }
      }
      content
      date
      databaseId
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      id
      slug
      title
    }
  }
`;
