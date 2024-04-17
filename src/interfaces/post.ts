export type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
