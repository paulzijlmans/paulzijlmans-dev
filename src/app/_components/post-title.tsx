import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className='text-2xl md:text-3xl font-semibold dark:text-white tracking-tighter leading-tight md:leading-none mb-6'>
      {children}
    </h1>
  );
}
