export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AdvanSoftware',
    url: 'https://advansoftware.com.br',
    logo: 'https://advansoftware.com.br/logo-512.png',
    description: 'Desenvolvimento de software sob medida. Plataformas SaaS, automação com IA, chatbots inteligentes e modernização de sistemas legados.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-35-98421-6196',
      contactType: 'sales',
      availableLanguage: 'Portuguese',
    },
    sameAs: [
      'https://instagram.com/advansoftware',
    ],
    areaServed: 'BR',
    knowsAbout: [
      'Desenvolvimento de Software',
      'SaaS',
      'Automação de WhatsApp',
      'Chatbots com IA',
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AdvanSoftware',
    url: 'https://advansoftware.com.br',
    description: 'Desenvolvimento de software sob medida para empresas.',
    publisher: {
      '@type': 'Organization',
      name: 'AdvanSoftware',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
