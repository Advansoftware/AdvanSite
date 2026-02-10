import type { Metadata } from 'next';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd';
import './globals.css';

const BASE_URL = 'https://advansoftware.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AdvanSoftware — Desenvolvimento de Software Sob Medida',
    template: '%s | AdvanSoftware',
  },
  description:
    'Desenvolvimento de software sob medida para empresas. Plataformas SaaS, automação com IA, chatbots inteligentes para WhatsApp e modernização de sistemas legados. Brazópolis, MG.',
  keywords: [
    'desenvolvimento software',
    'software sob medida',
    'SaaS',
    'automação WhatsApp',
    'chatbot inteligente',
    'Next.js',
    'React',
    'AdvanSoftware',
    'Brazópolis',
    'Minas Gerais',
    'desenvolvimento web',
    'modernização de sistemas',
  ],
  authors: [{ name: 'AdvanSoftware' }],
  creator: 'AdvanSoftware',
  publisher: 'AdvanSoftware',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'AdvanSoftware',
    title: 'AdvanSoftware — Desenvolvimento de Software Sob Medida',
    description:
      'Transformando ideias em software de alto desempenho. SaaS, automação, chatbots e modernização de sistemas.',
    images: [
      {
        url: '/logo-512.png',
        width: 512,
        height: 512,
        alt: 'Logo AdvanSoftware',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'AdvanSoftware — Desenvolvimento de Software Sob Medida',
    description:
      'Transformando ideias em software de alto desempenho. SaaS, automação, chatbots e modernização de sistemas.',
    images: ['/logo-512.png'],
  },
  icons: {
    icon: '/logo.svg',
    apple: '/logo-512.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
