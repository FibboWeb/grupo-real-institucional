import { gql } from "@apollo/client";

export const GET_AUTHOR_BY_SLUG = gql`
  query GetAuthorBySlug($slug: ID!) {
    user(id: $slug, idType: SLUG) {
    id
    name
    description
    databaseId
  }
}
`;
