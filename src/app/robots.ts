import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/testegratis', '/testewhatsapp'],
    },
    sitemap: 'https://advansoftware.com.br/sitemap.xml',
  };
}
