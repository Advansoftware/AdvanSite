import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços de Desenvolvimento de Software Sob Medida',
  description:
    'Desenvolvimento de sistemas web, plataformas SaaS, automação de atendimento com IA, chatbots inteligentes para WhatsApp, infraestrutura self-hosting e modernização de sistemas legados. Soluções sob medida para empresas de todos os portes.',
  keywords: [
    'desenvolvimento de software sob medida',
    'criar sistema web',
    'plataforma SaaS',
    'automação WhatsApp',
    'chatbot inteligente',
    'chatbot com IA',
    'automação de atendimento',
    'self-hosting',
    'modernização de sistemas',
    'sistema de gestão financeira',
    'identidade visual',
    'infraestrutura VPS',
    'desenvolvimento Next.js',
    'desenvolvimento React',
  ],
  openGraph: {
    title: 'Serviços de Desenvolvimento de Software | AdvanSoftware',
    description:
      'Criamos plataformas SaaS, chatbots com IA, automação de WhatsApp e modernizamos sistemas legados. Soluções sob medida para sua empresa.',
    url: 'https://advansoftware.com.br/servicos',
    type: 'website',
  },
  alternates: {
    canonical: 'https://advansoftware.com.br/servicos',
  },
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
