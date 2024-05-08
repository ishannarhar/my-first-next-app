import { Suspense } from "react";
import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts post={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome Back!</h1>
      <p>Here's what you might have missed!</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
