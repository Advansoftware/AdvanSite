import type { MetadataRoute } from 'next';

const BASE_URL = 'https://advansoftware.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: '2026-03-11',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/servicos`,
      lastModified: '2026-03-11',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projetos/allinone-converter`,
      lastModified: '2026-03-11',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/links`,
      lastModified: '2026-03-01',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
