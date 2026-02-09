'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Link from 'next/link';
import AdvanLogo from './AdvanLogo';

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ mr: 1, display: { xs: 'none', md: 'flex' } }}>
            <AdvanLogo size={32} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              flexShrink: 0, // Prevent shrinking
            }}
          >
            AdvanSoftware
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, ml: { xs: 0, md: 4 }, justifyContent: { xs: 'normal', md: 'flex-end' }, gap: { xs: 0, md: 2 } }}>
            <Box sx={{ width: { xs: '25%', md: 'auto' } }}>
              <Button component={Link} href="/" sx={{ color: 'white' }}>
                Portfolio
              </Button>
            </Box>
            <Box sx={{ width: { xs: '41.666%', md: 'auto' }, textAlign: { xs: 'center', md: 'inherit' } }}>
              <Button component={Link} href="/links" sx={{ color: 'white' }}>
                Links/Portal
              </Button>
            </Box>
            <Box sx={{ width: { xs: '33.333%', md: 'auto' }, textAlign: { xs: 'right', md: 'inherit' } }}>
              <Button component={Link} href="https://wa.me/5535984216196" target="_blank" variant="outlined" color="primary" sx={{ borderRadius: 4 }}>
                Contato
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
