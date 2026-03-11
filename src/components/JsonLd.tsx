export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'Organization'],
    '@id': 'https://advansoftware.com.br/#organization',
    name: 'AdvanSoftware',
    url: 'https://advansoftware.com.br',
    logo: 'https://advansoftware.com.br/logo-512.png',
    image: 'https://advansoftware.com.br/logo-512.png',
    description:
      'Empresa de desenvolvimento de software sob medida em Brazópolis, Minas Gerais. Criamos plataformas SaaS, automação de atendimento com IA, chatbots para WhatsApp, sistemas web e ferramentas open source.',
    telephone: '+55-35-98421-6196',
    priceRange: '$$',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brazópolis',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -22.4742,
      longitude: -45.6136,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Brasil',
      },
      {
        '@type': 'State',
        name: 'Minas Gerais',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-35-98421-6196',
      contactType: 'sales',
      availableLanguage: 'Portuguese',
      areaServed: 'BR',
    },
    sameAs: [
      'https://instagram.com/advansoftware',
      'https://github.com/Advansoftware',
    ],
    knowsAbout: [
      'Desenvolvimento de Software',
      'Plataformas SaaS',
      'Automação de WhatsApp',
      'Chatbots com Inteligência Artificial',
      'Sistemas Web',
      'Microserviços',
      'Self-Hosting',
      'Modernização de Sistemas Legados',
      'Next.js',
      'React',
      'Node.js',
      'Laravel',
      'Python',
      'Docker',
      'MongoDB',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Desenvolvimento',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desenvolvimento de Plataformas SaaS',
            description: 'Criação de sistemas web escaláveis e plataformas SaaS completas com Next.js, React e MongoDB.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automação e Chatbots para WhatsApp',
            description: 'Chatbots inteligentes com IA para atendimento automatizado, gestão de leads e integração com sistemas internos.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Infraestrutura e Self-Hosting',
            description: 'Configuração de servidores VPS próprios para ferramentas internas com segurança e privacidade total.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Modernização de Sistemas Legados',
            description: 'Migração de sistemas antigos (PHP, desktop) para tecnologias web modernas como React e Next.js.',
          },
        },
      ],
    },
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
    description: 'Empresa de desenvolvimento de software sob medida. Plataformas SaaS, automação com IA, chatbots para WhatsApp e ferramentas open source.',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://advansoftware.com.br/#organization',
      name: 'AdvanSoftware',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://advansoftware.com.br/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AllInOne Converter',
    description:
      'Sistema open source de conversão de mídia com microserviços. Converta vídeos, baixe do YouTube, gerencie torrents e faça streaming HLS.',
    url: 'https://advansoftware.com.br/projetos/allinone-converter',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Linux, Docker',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
    },
    author: {
      '@type': 'Organization',
      '@id': 'https://advansoftware.com.br/#organization',
      name: 'AdvanSoftware',
    },
    license: 'https://opensource.org/licenses/MIT',
    screenshot: 'https://advansoftware.com.br/portfolio/allinone-converter/screenshot-dashboard.png',
    softwareVersion: '1.0',
    downloadUrl: 'https://github.com/Advansoftware/allInOne-Converter',
    codeRepository: 'https://github.com/Advansoftware/allInOne-Converter',
    programmingLanguage: ['Python', 'PHP', 'JavaScript', 'TypeScript'],
    runtimePlatform: 'Docker',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
