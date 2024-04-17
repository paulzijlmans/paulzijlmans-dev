import { PostTitle } from '@/app/_components/post-title';
import CoverImage from './cover-image';
import DateFormatter from './date-formatter';

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <div className='text-center'>
      <PostTitle>{title}</PostTitle>
      <div className='mb-8 md:mb-16'>
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className='max-w-2xl mx-auto'>
        <div className='mb-6 text-lg font-semibold text-accent-1'>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
}
