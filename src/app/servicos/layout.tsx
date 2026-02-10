import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Conheça todos os serviços da AdvanSoftware: desenvolvimento SaaS, automação com IA, chatbots para WhatsApp, infraestrutura, identidade visual e modernização de sistemas legados.',
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
