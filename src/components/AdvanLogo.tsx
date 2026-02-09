'use client';

import React from 'react';
import { Box } from '@mui/material';

export default function AdvanLogo({ size = 40 }: { size?: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src="/logo.svg"
        alt="AdvanSoftware Logo"
        width={size}
        height={size}
        style={{ display: 'block', overflow: 'visible' }}
      />
    </Box>
  );
}
