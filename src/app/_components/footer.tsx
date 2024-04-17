export function Footer() {
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200'>
      <div className='py-28 flex flex-col lg:flex-row items-center'>
        <h3 className='text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
          Footer
        </h3>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
          More text...
        </div>
      </div>
    </footer>
  );
}

export default Footer;
