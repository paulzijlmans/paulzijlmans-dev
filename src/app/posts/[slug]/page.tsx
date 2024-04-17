import { PostBody } from '@/app/_components/post-body';
import { PostHeader } from '@/app/_components/post-header';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { siteMetadata } from '@/lib/site-metadata';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.excerpt,
    image: post.ogImage.url,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.updatedAt ?? post.publishedAt).toISOString(),
    author: [
      {
        '@type': 'Person',
        name: siteMetadata.author,
        url: siteMetadata.siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className='mb-32'>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.publishedAt}
        />
        <PostBody content={content} />
      </article>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Paul Zijlmans Developer Blog`;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      url: `${siteMetadata.siteUrl}/${params.slug}`,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date(post.publishedAt).toISOString(),
      modifiedTime: new Date(post.updatedAt ?? post.publishedAt).toISOString(),
      images: [post.ogImage.url],
      authors: siteMetadata.author,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
