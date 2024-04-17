import { HeroPost } from '@/app/_components/hero-post';
import { MoreStories } from '@/app/_components/more-stories';
import { getAllPosts } from '@/lib/api';

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <>
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
      />
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </>
  );
}
