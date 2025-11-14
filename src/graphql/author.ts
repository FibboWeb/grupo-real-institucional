import { gql } from "@apollo/client";

export const GET_AUTHOR_BY_SLUG = gql`
  query GetAuthorBySlug($slug: ID!) {
    user(id: $slug, idType: SLUG) {
    id
    name
    description
    databaseId
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
  }
}
`;
