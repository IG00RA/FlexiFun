import type { Metadata } from 'next';
import '../styles/globals.css';
import { Fredoka, Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font_inter',
  adjustFontFallback: false,
});

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font_fredoka',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'FlexiFun - divoká príroda savany',
  description: 'FlexiFun - divoká príroda savany',
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
    title: 'FlexiFun - divoká príroda savany',
    description: 'FlexiFun - divoká príroda savany',
    type: 'website',
    images: [
      {
        url: '/assets/web-app-manifest-512x512.png',
        width: 1200,
        height: 630,
        alt: 'FlexiFun - divoká príroda savany',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body className={`${inter.variable} ${fredoka.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
