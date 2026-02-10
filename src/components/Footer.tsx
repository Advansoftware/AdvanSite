'use client';

import React from 'react';
import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Portal', href: '/links' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        pt: 8,
        pb: 4,
        borderTop: '1px solid rgba(255,255,255,0.08)',
        background: 'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(98,0,234,0.03) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 6,
          mb: 6,
        }}>
          {/* Coluna 1: Marca */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              AdvanSoftware
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280 }}>
              Transformando ideias em software de alto desempenho. Soluções sob medida para empresas que querem crescer com tecnologia.
            </Typography>
          </Box>

          {/* Coluna 2: Navegação */}
          <Box>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ textTransform: 'uppercase', letterSpacing: 1, color: 'primary.main' }}>
              Navegação
            </Typography>
            <Stack spacing={1}>
              {navLinks.map((link) => (
                <Typography
                  key={link.href}
                  component={Link}
                  href={link.href}
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* Coluna 3: Contato */}
          <Box>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ textTransform: 'uppercase', letterSpacing: 1, color: 'primary.main' }}>
              Contato
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Fale conosco pelo WhatsApp ou e-mail.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton
                href="https://wa.me/5535984216196?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20AdvanSoftware."
                target="_blank"
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: '#25D366' } }}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com/advansoftware"
                target="_blank"
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: '#E1306C' } }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="mailto:contato@advansoftware.com.br"
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                aria-label="E-mail"
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', mb: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} AdvanSoftware. Todos os direitos reservados.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Brazópolis, MG — Brasil
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
