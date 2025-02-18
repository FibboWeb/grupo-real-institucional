import { gql } from '@apollo/client';

export const GET_COMMENTS_FOR_POST = gql`
query GetPostBySlug($id: ID!) {
  post(id: $id, idType: ID) {
    id
    slug
    title
    comments {
      nodes {
        id
        content(format: RENDERED)
        parentId
        approved
        date
        databaseId
        replies {
          nodes {
            content(format: RENDERED)
            databaseId
            author {
              name
              email
            }
            replies {
              nodes {
                author {
                  email
                  name
                }
                content(format: RENDERED)
                databaseId
                id
              }
            }
          }
        }
        author {
          name
        }
      }
    }
  }
}
`;

// Criar a query para enviar o comentário do usuário para o post
export const CREATE_COMMENT = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      success
      comment {
        id
        content
        author {
          node {
            name
            email
          }
        }
      }
    }
  }
`;

