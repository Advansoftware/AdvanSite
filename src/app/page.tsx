'use client';

import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, CardMedia, CardActions, Chip, Avatar, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import AdvanLogo from '@/components/AdvanLogo';

export default function PortfolioHome() {
  const projects = [
    {
      title: 'Gastometria',
      description: 'Plataforma de gestão financeira completa.',
      image: '/portfolio/gastometria.png',
      link: 'https://gastometria.com.br/',
      tags: ['SaaS', 'Gestão', 'Web App'],
    },
    {
      title: 'Respondia',
      description: 'Solução de IA para atendimento automático e suporte.',
      image: '/portfolio/respondia.png',
      link: 'https://respondia.pro/',
      tags: ['IA', 'Chatbot', 'Automação'],
    },
    {
      title: 'Prefeitura de Brazópolis',
      description: 'Portal oficial da prefeitura municipal.',
      image: '/portfolio/brazopolis.png',
      link: 'https://brazopolis.mg.gov.br/',
      tags: ['Governo', 'Portal', 'Institucional'],
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(98, 0, 234, 0.1) 0%, rgba(0,0,0,0) 100%)',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <AdvanLogo size={80} />
          </Box>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="800"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              lineHeight: { xs: 1.2, md: 1.1 }
            }}
          >
            Transformando ideias em software de <Box component="span" sx={{ color: 'secondary.main' }}>alto desempenho</Box>
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Somos especialistas em criar soluções digitais que impulsionam negócios. De portais governamentais a sistemas SaaS complexos.
          </Typography>
          <Button
            component={Link}
            href="/servicos"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ borderRadius: 8, px: 4, py: 1.5, fontSize: '1.1rem' }}
          >
            Ver Nossos Serviços
          </Button>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 6, textAlign: 'center' }}>
          Junte-se a quem confia na AdvanSoftware
        </Typography>

        {/* Responsive Grid using CSS Grid */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          width: '100%'
        }}>
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.5)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" color="primary" />
                    ))}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button size="small" href={project.link} target="_blank" endIcon={<ArrowForwardIcon />}>
                    Visitar Projeto
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
