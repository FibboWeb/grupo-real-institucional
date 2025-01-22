"use server"
import { getLastPosts } from "@/lib/getLastPosts";
import LastPosts from "../components/Layout/LastPosts";

export default async function Home() {
  const queriedLastPosts = await getLastPosts();
  const fetchedLastPosts = queriedLastPosts.props.nodes;

  return (
    <div className="fb_container overflow-hidden">
      <LastPosts fetchedLastPosts={fetchedLastPosts} />
    </div>
  );
}
