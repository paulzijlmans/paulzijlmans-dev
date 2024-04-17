import cn from 'classnames';
import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  fullWidth?: boolean;
};

const CoverImage = ({ title, src, fullWidth }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className='object-cover mx-auto'
      fill
      priority
    />
  );
  return (
    <div
      className={cn('inline-block w-full h-48 md:h-64 lg:h-96 relative', {
        'max-w-2xl': !fullWidth,
      })}
    >
      {image}
    </div>
  );
};

export default CoverImage;
