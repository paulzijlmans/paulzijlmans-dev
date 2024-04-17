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
        
          <div className='mb-8 md:mb-16'>
            <CoverImage title={title} src={coverImage} slug={slug} />
          </div>
          <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
            <div>
              <div className='mb-4 md:mb-0 text-sm font-semibold text-accent-1'>
                <DateFormatter dateString={date} />
              </div>
              <h3 className='mb-4 text-2xl font-semibold lg:text-5xl leading-tight hover:underline'>
                {title}
              </h3>
            </div>
            <div>
              <p className='text-md text-gray leading-relaxed mb-4'>
                {excerpt}
              </p>
            </div>
          </div>
        
      </Link>
    </section>
  );
}
