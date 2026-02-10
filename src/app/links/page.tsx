'use client';

import React from 'react';
import { Box, Container, Stack, Typography, Button, Avatar, IconButton } from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import Link from 'next/link';

import AdvanLogo from '@/components/AdvanLogo';

export default function Home() {
  const links = [
    {
      title: 'Teste Grátis',
      subtitle: 'Solicite seu teste agora mesmo',
      icon: <PlayCircleOutlineIcon />,
      href: '/testegratis', // Goes to our internal route which redirects to WA
      color: 'linear-gradient(45deg, #FF3D00 30%, #FF9100 90%)',
    },
    {
      title: 'Suporte WhatsApp',
      subtitle: 'Fale com nosso time',
      icon: <WhatsAppIcon />,
      href: 'https://wa.me/5535984216196',
      color: 'linear-gradient(45deg, #00C853 30%, #69F0AE 90%)',
    },
    {
      title: 'Nosso Site',
      subtitle: 'Conheça nossos serviços',
      icon: <LanguageIcon />,
      href: '/', // Points to the internal portfolio home
      color: 'linear-gradient(45deg, #2979FF 30%, #448AFF 90%)',
    },
  ];

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', py: 6 }}>
      <Stack spacing={4} alignItems="center">
        {/* Header Profile/Logo */}
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Box
            sx={{
              width: 100,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AdvanLogo size={100} />
          </Box>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              AdvanSoftware
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Soluções Digitais
            </Typography>
          </Box>
        </Stack>

        {/* Links Section */}
        <Stack spacing={2} width="100%">
          {links.map((link, index) => (
            <Button
              key={index}
              component={Link}
              href={link.href}
              variant="contained"
              fullWidth
              startIcon={link.icon}
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                py: 2,
                px: 3,
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                },
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: link.color,
                },
              }}
            >
              <Box sx={{ textAlign: 'left', ml: 1 }}>
                <Typography variant="body1" fontWeight="600" lineHeight={1.2}>
                  {link.title}
                </Typography>
                {link.subtitle && (
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                    {link.subtitle}
                  </Typography>
                )}
              </Box>
            </Button>
          ))}
        </Stack>

        {/* Social / Footer */}
        <Stack direction="row" spacing={2} mt={4}>
          <IconButton
            href="https://instagram.com/advansoftware" // Example
            target="_blank"
            sx={{ color: 'white', '&:hover': { color: '#E1306C' } }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            href="https://wa.me/5535984216196"
            target="_blank"
            sx={{ color: 'white', '&:hover': { color: '#25D366' } }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Stack>

        <Typography variant="caption" color="text.secondary" mt={4}>
          © 2026 AdvanSoftware. Todos os direitos reservados.
        </Typography>
      </Stack>
    </Container>
  );
}
