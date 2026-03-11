import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AllInOne Converter — Conversor de Mídia Open Source com Microserviços',
  description:
    'Sistema open source de conversão de mídia com arquitetura de microserviços. Converta vídeos, baixe do YouTube, gerencie torrents e faça streaming HLS. Feito com React, Laravel, Python, Docker e FFmpeg.',
  keywords: [
    'conversor de mídia',
    'conversor de vídeo',
    'converter vídeo online',
    'download YouTube',
    'download torrent',
    'streaming HLS',
    'open source',
    'microserviços',
    'FFmpeg',
    'yt-dlp',
    'Docker',
    'React',
    'Laravel',
    'Python',
    'AllInOne Converter',
    'AdvanSoftware',
  ],
  openGraph: {
    title: 'AllInOne Converter — Conversor de Mídia Open Source',
    description:
      'Converta vídeos, baixe do YouTube, gerencie torrents e faça streaming HLS. Sistema open source com microserviços.',
    url: 'https://advansoftware.com.br/projetos/allinone-converter',
    type: 'website',
    images: [
      {
        url: '/portfolio/allinone-converter/screenshot-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'AllInOne Converter Dashboard',
      },
    ],
  },
  alternates: {
    canonical: 'https://advansoftware.com.br/projetos/allinone-converter',
  },
};

export default function AllInOneConverterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
