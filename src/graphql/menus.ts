import { gql } from "@apollo/client";

const MENU_ITEM_FIELDS = gql`
  fragment MenuItemFields on MenuItem {
    id
    databaseId
    parentDatabaseId
    order
    label
    url
    target
    childItems(first: 100) {
      edges {
        node {
          id
          databaseId
          parentDatabaseId
          order
          label
          url
          target
        }
      }
    }
  }
`;

export const GET_MENU_BY_NAME = gql`
  ${MENU_ITEM_FIELDS}
  query GET_MENU_BY_NAME($menuName: ID!) {
    menu(id: $menuName, idType: NAME) {
      id
      name
      menuItems(first: 100) {
        edges {
          node {
            ...MenuItemFields
          }
        }
      }
      databaseId
    }
  }
`;
