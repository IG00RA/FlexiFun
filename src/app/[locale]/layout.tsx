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
import { TikTokPixel } from '@/components/TikTokPixel/TikTokPixel';

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
  { title: string; description: string; keywords: string }
> = {
  uk: {
    title: 'FlexiFun – дика природа Савани',
    description:
      'Відкрийте світ природи та героїчних пригод для вашої дитини! FlexiFun – дика природа Савани – це унікальний розвивальний ігровий набір, який перетворює вивчення біології на захопливу подорож. Завдяки інтерактивним завданням і цікавим викликам дитина досліджує світ дикої природи, одночасно розвиваючи мислення, уяву та пізнавальні навички.',
    keywords:
      'FlexiFun, дика природа, Савана, біологія для дітей, навчання через гру, інтерактивні завдання, розвиток мислення, освітні ігри',
  },
  sk: {
    title: 'FlexiFun – divoká príroda savany',
    description:
      'Objavte svet prírody a hrdinských dobrodružstiev pre vaše dieťa! FlexiFun – divoká príroda savany je jedinečná vývojová súprava, ktorá mení učenie biológie na fascinujúcu cestu. Vďaka interaktívnym úlohám a zaujímavým výzvam dieťa skúma svet divokej prírody a zároveň rozvíja myslenie, predstavivosť a kognitívne schopnosti.',
    keywords:
      'FlexiFun, divoká príroda, savana, biológia pre deti, učenie hrou, interaktívne úlohy, rozvoj myslenia, vzdelávacie hry',
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
    twitter: {
      card: 'summary_large_image',
      title: localizedData.title,
      description: localizedData.description,
      images: [
        {
          url: '/assets/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: localizedData.title,
        },
      ],
    },
    openGraph: {
      title: localizedData.title,
      description: localizedData.description,
      type: 'website',
      images: [
        {
          url: '/assets/opengraph-image.jpg',
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
          <div id="__next"></div>
          <div id="portal-root"></div>
          <ToastContainer />
          <Suspense fallback={null}>
            <FacebookPixel />
            <TikTokPixel />
          </Suspense>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
