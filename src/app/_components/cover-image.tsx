import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className='object-cover mx-auto'
      fill
      priority
    />
  );
  return <div className='inline-block w-full  h-56 md:h-64 lg:h-96 relative'>{image}</div>;
};

export default CoverImage;
