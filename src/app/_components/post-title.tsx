import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className='text-3xl md:text-4xl font-bold dark:text-white tracking-tighter leading-tight md:leading-none mb-12 text-center'>
      {children}
    </h1>
  );
}
