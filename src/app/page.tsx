"use server";
import { getLastPostsNoticias } from "@/lib/getLastPostsNoticias";
import LastPostsNoticias from "../components/Layout/LastPostsNoticias";

export default async function Home() {
  const queriedLastPostsNoticias = await getLastPostsNoticias();
  const fetchedLastPostsNoticias = queriedLastPostsNoticias.props.nodes;

  return (
    <div className="fb_container my-12">
      <LastPostsNoticias fetchedLastPosts={fetchedLastPostsNoticias} />
    </div>
  );
}
