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
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1,
            }}
          >
            AdvanSoftware
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button component={Link} href="/" sx={{ color: 'white' }}>
              Portfolio
            </Button>
            <Button component={Link} href="/links" sx={{ color: 'white' }}>
              Links/Portal
            </Button>
             <Button component={Link} href="https://wa.me/5535984216196" target="_blank" variant="outlined" color="primary" sx={{ borderRadius: 4 }}>
              Contato
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
