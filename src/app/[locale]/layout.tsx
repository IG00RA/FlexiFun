import type { Metadata } from 'next';
import '../../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Fredoka, Inter } from 'next/font/google';
import { Suspense } from 'react';
import { FacebookPixel } from '@/components/FacebookPixel/FacebookPixel';
import { ToastContainer } from 'react-toastify';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Await from '@/components/Await/Await';
import Feedback from '@/components/Feedback/Feedback';
import Footer from '@/components/Footer/Footer';
import HowWorks from '@/components/HowWorks/HowWorks';
import Important from '@/components/Important/Important';
import Included from '@/components/Included/Included';
import Quality from '@/components/Quality/Quality';
import Questions from '@/components/Questions/Questions';
import Reasons from '@/components/Reasons/Reasons';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font_inter',
  adjustFontFallback: false,
});

const fredoka = Fredoka({
  subsets: ['latin', 'hebrew'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font_fredoka',
  adjustFontFallback: false,
});

const localizedMetadata: Record<
  string,
  { title: string; description: string }
> = {
  sk: {
    title: 'FlexiFun - divoká príroda savany',
    description: 'FlexiFun - divoká príroda savany',
  },
  uk: {
    title: 'FlexiFun - Дика природа савани',
    description: 'FlexiFun - Дика природа савани',
  },
};

export async function generateMetadata(locale: string): Promise<Metadata> {
  const localizedData = localizedMetadata[locale] || localizedMetadata['sk'];
  return {
    title: localizedData.title,
    description: localizedData.description,
    icons: {
      icon: [
        { url: '/assets/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/assets/favicon.svg', type: 'image/svg+xml' },
        { url: '/assets/favicon.ico', type: 'image/x-icon' },
        { url: '/assets/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
    manifest: '/assets/site.webmanifest',
    openGraph: {
      title: localizedData.title,
      description: localizedData.description,
      type: 'website',
      images: [
        {
          url: '/assets/web-app-manifest-512x512.png',
          width: 1200,
          height: 630,
          alt: localizedData.title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const metadata = await generateMetadata(locale);

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <title>{String(metadata.title)}</title>
        <meta
          name="description"
          content={metadata.description || 'FlexiFun - divoká príroda savany'}
        />
      </head>
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${inter.variable} ${fredoka.variable} ${
            locale === 'uk' ? 'uk-styles' : ''
          }`}
        >
          <Header lang={locale} />
          {children}
          <main>
            <Hero lang={locale} />
            <Important lang={locale} />
            <Reasons lang={locale} />
            <About lang={locale} />
            <Await lang={locale} />
            <Included lang={locale} />
            <HowWorks lang={locale} />
            <Feedback lang={locale} />
            <Quality lang={locale} />
            <Questions lang={locale} />
          </main>
          <Footer lang={locale} />
          <div id="portal-root"></div>
          <ToastContainer />
          <Suspense fallback={null}>
            <FacebookPixel />
          </Suspense>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
