import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portal de Links',
  description: 'Acesse todos os links da AdvanSoftware: teste grátis, suporte via WhatsApp, redes sociais e nosso site oficial.',
};

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
