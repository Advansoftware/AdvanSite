'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Dialog,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import type { Metadata } from 'next';

const screenshots = [
  { src: '/portfolio/allinone-converter/screenshot-dashboard.png', label: 'Dashboard Principal' },
  { src: '/portfolio/allinone-converter/screenshot-upload.png', label: 'Upload de Arquivos' },
  { src: '/portfolio/allinone-converter/screenshot-torrents.png', label: 'Gerenciamento de Torrents' },
  { src: '/portfolio/allinone-converter/screenshot-torrent-detail.png', label: 'Detalhes do Torrent' },
  { src: '/portfolio/allinone-converter/screenshot-torrent-expanded.png', label: 'Torrent Expandido' },
  { src: '/portfolio/allinone-converter/screenshot-job-details.png', label: 'Detalhes do Job' },
  { src: '/portfolio/allinone-converter/screenshot-preview.png', label: 'Preview de Streaming HLS' },
];

const techStack = [
  { name: 'React 18', color: '#61dafb' },
  { name: 'Laravel 10', color: '#FF2D20' },
  { name: 'Python 3.11', color: '#FFD43B' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'FFmpeg', color: '#007808' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'yt-dlp', color: '#FF0000' },
  { name: 'libtorrent', color: '#8BC34A' },
  { name: 'Nginx', color: '#009639' },
];

const features = [
  {
    emoji: '🎥',
    title: 'Conversão de Vídeos',
    description: 'Converta entre diversos formatos como MP4, WebM, AVI, MKV e muito mais com perfis pré-configurados.',
  },
  {
    emoji: '📥',
    title: 'Download de URLs',
    description: 'Baixe vídeos do YouTube, Vimeo, TikTok e mais de 1000 sites usando yt-dlp.',
  },
  {
    emoji: '🧲',
    title: 'Download de Torrents',
    description: 'Suporte a magnet links e arquivos .torrent com seleção de arquivos e estatísticas em tempo real.',
  },
  {
    emoji: '📺',
    title: 'Streaming HLS',
    description: 'Preview de arquivos em tempo real com transcodificação on-demand e múltiplas qualidades.',
  },
  {
    emoji: '⏳',
    title: 'Fila Assíncrona',
    description: 'Processamento em background com acompanhamento de status em tempo real via Redis.',
  },
  {
    emoji: '🏗️',
    title: 'Microserviços',
    description: 'Arquitetura modular com serviços independentes orquestrados via Docker Compose.',
  },
];

export default function AllInOneConverterPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <Box
        component="section"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 4, md: 6 },
          background: 'linear-gradient(180deg, rgba(98, 0, 234, 0.12) 0%, rgba(0,0,0,0) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Button
            component={Link}
            href="/"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 4, color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
          >
            Voltar ao Portfólio
          </Button>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
            <Box
              component="img"
              src="/portfolio/allinone-converter/logo.png"
              alt="AllInOne Converter Logo"
              sx={{
                width: { xs: 80, md: 100 },
                height: { xs: 80, md: 100 },
                borderRadius: 3,
                border: '2px solid rgba(255,255,255,0.1)',
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <Chip
                  label="Open Source"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(0, 230, 118, 0.12)',
                    color: '#00e676',
                    fontWeight: 600,
                    border: '1px solid rgba(0, 230, 118, 0.3)',
                  }}
                />
                <Chip
                  label="MIT License"
                  size="small"
                  variant="outlined"
                  sx={{ borderColor: 'rgba(255,255,255,0.2)', color: 'text.secondary' }}
                />
              </Stack>
              <Typography
                variant="h2"
                component="h1"
                fontWeight="800"
                sx={{ fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}
              >
                AllInOne{' '}
                <Box component="span" sx={{ color: 'secondary.main' }}>
                  Converter
                </Box>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mt: 1, maxWidth: 700, lineHeight: 1.6 }}>
                Sistema open source de conversão de mídia com arquitetura de microserviços,
                suporte a torrents, downloads de URLs e streaming HLS.
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/Advansoftware/allInOne-Converter"
                  target="_blank"
                  sx={{ borderRadius: 8, px: 4 }}
                >
                  Ver no GitHub
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* ═══════════════════ SCREENSHOTS ═══════════════════ */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
            Screenshots
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
            Veja o sistema em ação — clique em qualquer imagem para ampliar.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {screenshots.map((shot, index) => (
              <Box
                key={index}
                onClick={() => openLightbox(index)}
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(98, 0, 234, 0.2)',
                    borderColor: 'rgba(159, 101, 255, 0.3)',
                    '& .screenshot-overlay': {
                      opacity: 1,
                    },
                  },
                  // Make first screenshot span 2 columns on md+
                  ...(index === 0 && {
                    gridColumn: { md: 'span 2' },
                  }),
                }}
              >
                <Box
                  component="img"
                  src={shot.src}
                  alt={shot.label}
                  sx={{
                    width: '100%',
                    height: index === 0 ? { xs: 200, md: 320 } : { xs: 180, md: 220 },
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                  }}
                />
                <Box
                  className="screenshot-overlay"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 2,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <Typography variant="body2" fontWeight="600">
                    {shot.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════ LIGHTBOX ═══════════════════ */}
      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        maxWidth={false}
        PaperProps={{
          sx: {
            bgcolor: 'rgba(10,10,10,0.95)',
            backdropFilter: 'blur(20px)',
            maxWidth: '95vw',
            maxHeight: '95vh',
            borderRadius: 3,
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'hidden',
          },
        }}
      >
        <IconButton
          onClick={() => setLightboxOpen(false)}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 10,
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          }}
        >
          <CloseIcon />
        </IconButton>

        <IconButton
          onClick={prevImage}
          sx={{
            position: 'absolute',
            left: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={nextImage}
          sx={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            component="img"
            src={screenshots[activeIndex]?.src}
            alt={screenshots[activeIndex]?.label}
            sx={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: 2,
            }}
          />
          <Typography variant="body1" fontWeight="600" sx={{ mt: 2 }}>
            {screenshots[activeIndex]?.label}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {activeIndex + 1} de {screenshots.length}
          </Typography>
        </Box>
      </Dialog>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
            Funcionalidades
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
            Tudo o que você precisa para converter, baixar e transmitir mídia.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: 'rgba(30, 30, 30, 0.6)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(159, 101, 255, 0.3)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Typography variant="h4" sx={{ mb: 1.5 }}>
                  {feature.emoji}
                </Typography>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════ ARQUITETURA ═══════════════════ */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
            Arquitetura
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
            Sistema distribuído com microserviços independentes e comunicação via API Gateway.
          </Typography>

          <Box
            sx={{
              p: { xs: 2, md: 4 },
              borderRadius: 4,
              bgcolor: 'rgba(30, 30, 30, 0.4)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontFamily: 'monospace',
              fontSize: { xs: '0.65rem', md: '0.8rem' },
              overflowX: 'auto',
              whiteSpace: 'pre',
              lineHeight: 1.6,
              color: 'text.secondary',
            }}
          >
            {`┌─────────────────────────────────────────────────────────────────────┐
│                        FRONTEND (React 18)                          │
│                         http://localhost:3000                        │
└─────────────────────────────┬───────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      API GATEWAY (Laravel 10)                       │
│                    Nginx + PHP-FPM + Supervisor                     │
└───────┬───────────────┬───────────────┬───────────────┬─────────────┘
        │               │               │               │
        ▼               ▼               ▼               ▼
┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│   CONVERTER   │ │  DOWNLOADER   │ │    TORRENT    │ │   STREAMER    │
│   (Python)    │ │   (Python)    │ │   (Python)    │ │   (Python)    │
│   FFmpeg      │ │    yt-dlp     │ │  libtorrent   │ │     HLS       │
└───────┬───────┘ └───────┬───────┘ └───────┬───────┘ └───────┬───────┘
        │               │               │               │
        └───────────────┴───────────────┴───────────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
                ▼                           ▼
      ┌─────────────────┐         ┌─────────────────┐
      │      REDIS      │         │     MYSQL        │
      │    (Queue)      │         │   (Database)     │
      └─────────────────┘         └─────────────────┘`}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════ TECH STACK ═══════════════════ */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ mb: 1 }}>
            Stack Tecnológica
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
            Construído com tecnologias modernas e robustas.
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={2}>
            {techStack.map((tech) => (
              <Chip
                key={tech.name}
                label={tech.name}
                sx={{
                  px: 1,
                  py: 2.5,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  bgcolor: `${tech.color}15`,
                  color: tech.color,
                  border: `1px solid ${tech.color}30`,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: `${tech.color}25`,
                    transform: 'scale(1.05)',
                  },
                }}
              />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              p: { xs: 5, md: 8 },
              borderRadius: 6,
              bgcolor: 'rgba(159,101,255,0.05)',
              border: '1px solid rgba(159,101,255,0.15)',
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Contribua com o projeto
            </Typography>
            <Typography paragraph color="text.secondary" sx={{ mb: 4 }}>
              O AllInOne Converter é 100% open source. Fork, contribua ou use como quiser!
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                startIcon={<GitHubIcon />}
                href="https://github.com/Advansoftware/allInOne-Converter"
                target="_blank"
                sx={{ py: 2, px: 4, fontSize: '1rem', borderRadius: 8 }}
              >
                Ver no GitHub
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/"
                sx={{ py: 2, px: 4, fontSize: '1rem', borderRadius: 8 }}
              >
                Ver Outros Projetos
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
