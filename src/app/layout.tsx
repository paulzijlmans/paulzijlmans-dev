import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';

import { siteMetadata } from '@/lib/site-metadata';
import cn from 'classnames';
import Container from './_components/container';
import Header from './_components/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          inter.className,
          'container mx-auto bg-light dark:bg-dark box-border'
        )}
      >
        <Header />
        <Container>
          <main className='min-h-screen'>{children}</main>
        </Container>
        {/* <Footer /> */}
      </body>
      <GoogleAnalytics gaId='G-STT7FP2FPK' />
    </html>
  );
}
