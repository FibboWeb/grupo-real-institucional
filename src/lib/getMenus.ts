"use server";
import { client } from "@/lib/apollo-client";
import { GET_MENU_BY_NAME } from "@/graphql/menus";

export async function getMenus(menuName) {
  try {
    const fetchedMenus = await client.query({
      query: GET_MENU_BY_NAME,
      variables: { menuName },
    });

    return {
      props: fetchedMenus.data.menu,
    };
  } catch (error) {
    console.error("Erro ao buscar menus:", error);
    return {
      props: {
        footerMenus: [],
      },
    };
  }
}
