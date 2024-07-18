import Image from 'next/image';
import Link from 'next/link';
import logoImg from '/public/logo.svg';

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center px-5 py-2.5'>
      <Link href='/'>
        <div className='w-15 md:w-32'>
          <Image
            src={logoImg}
            alt='Paul Zijlmans Logo'
            className='w-full h-auto'
            sizes='20vw'
            priority
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
