"use server";
import { client } from "@/lib/apollo-client";
<<<<<<<< HEAD:src/lib/getLastPostsNoticias.ts
import { GET_LAST_POSTS_NOTICIAS } from "@/graphql/posts";

export async function getLastPostsNoticias() {
  try {
    const fetchedPosts = await client.query({
      query: GET_LAST_POSTS_NOTICIAS,
========
import { GET_LAST_POSTS_EVENTOS } from "@/graphql/posts";

export async function getLastPostsEventos() {
  try {
    const fetchedPosts = await client.query({
      query: GET_LAST_POSTS_EVENTOS,
>>>>>>>> 70526ee2113a092bf2b75330eaa43244956e2023:src/lib/getLastPostsEventos.ts
    });

    return {
      props: fetchedPosts.data.posts,
    };
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
