import CoverImage from '@/app/_components/cover-image';
import Link from 'next/link';
import DateFormatter from './date-formatter';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function HeroPost({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <section>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <div className='mb-6 text-center'>
            <CoverImage title={title} src={coverImage} fullWidth={true} />
          </div>
          <div className='mb-20 md:mb-28'>
            <div>
              <div className='mb-3 md:mb-0 text-sm font-semibold text-accent-1'>
                <DateFormatter dateString={date} />
              </div>
              <h3 className='mb-3 text-2xl font-semibold lg:text-5xl dark:text-white leading-tight hover:underline'>
                {title}
              </h3>
            </div>
            <div>
              <p className='text-md text-gray dark:text-light-gray leading-relaxed mb-3'>
                {excerpt}
              </p>
            </div>
          </div>
      </Link>
    </section>
  );
}
