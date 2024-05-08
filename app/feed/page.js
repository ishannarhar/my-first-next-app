import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All Posts By All Users</h1>
      <Posts posts={posts} />
    </>
  );
}
