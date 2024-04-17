import { HeroPost } from '@/app/_components/hero-post';
import { MoreStories } from '@/app/_components/more-stories';
import { getAllPosts } from '@/lib/api';

export default function About() {
  return (
    <>
      <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">About</h3>
    </>
  );
}
