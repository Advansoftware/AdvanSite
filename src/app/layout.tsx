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
    default: 'AdvanSoftware — Desenvolvimento de Software Sob Medida | Brazópolis MG',
    template: '%s | AdvanSoftware',
  },
  description:
    'Empresa de desenvolvimento de software sob medida em Brazópolis, Minas Gerais. Criamos plataformas SaaS, automação de atendimento com IA, chatbots inteligentes para WhatsApp, sistemas web modernos e ferramentas open source. Atendemos todo o Brasil.',
  keywords: [
    'desenvolvimento de software',
    'software sob medida',
    'empresa de software',
    'empresa de tecnologia',
    'empresa de TI',
    'desenvolvimento web',
    'criar sistema',
    'criar aplicativo',
    'plataforma SaaS',
    'automação WhatsApp',
    'chatbot inteligente',
    'chatbot WhatsApp',
    'automação de atendimento',
    'inteligência artificial',
    'modernização de sistemas',
    'sistema de gestão',
    'conversor de mídia',
    'open source',
    'Next.js',
    'React',
    'Node.js',
    'Laravel',
    'Python',
    'Docker',
    'AdvanSoftware',
    'Brazópolis',
    'Minas Gerais',
    'Sul de Minas',
    'desenvolvimento software Minas Gerais',
    'empresa de software sul de minas',
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
    title: 'AdvanSoftware — Empresa de Desenvolvimento de Software Sob Medida | Brazópolis MG',
    description:
      'Empresa de tecnologia especializada em criar sistemas web, plataformas SaaS, automação de WhatsApp com IA e ferramentas open source. Atendemos todo o Brasil a partir de Brazópolis, MG.',
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
    title: 'AdvanSoftware — Empresa de Desenvolvimento de Software Sob Medida',
    description:
      'Criamos sistemas web, plataformas SaaS, chatbots com IA e ferramentas open source. Brazópolis, MG.',
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
