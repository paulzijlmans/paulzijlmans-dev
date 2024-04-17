import Link from 'next/link';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <div>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
        <div className='mb-5'>
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <div className='text-sm mb-4 font-semibold text-accent-1'>
          <DateFormatter dateString={date} />
        </div>
        <h3 className='text-2xl mb-3 font-semibold dark:text-white leading-snug hover:underline'>
          {title}
        </h3>
        <p className='text-md text-gray dark:text-light-gray leading-relaxed mb-4'>{excerpt}</p>
      </Link>
    </div>
  );
}
