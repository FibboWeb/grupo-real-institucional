import { gql } from "@apollo/client";

export const GET_MENU_BY_NAME = gql`
  query GET_MENU_BY_NAME($menuName: ID!) {
    menu(id: $menuName, idType: NAME) {
      id
      name
      menuItems {
        edges {
          node {
            id
            label
            url
          }
        }
      }
      databaseId
    }
  }
`;
