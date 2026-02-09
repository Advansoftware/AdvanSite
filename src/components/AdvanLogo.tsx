'use client';

import React from 'react';
import { Box } from '@mui/material';

export default function AdvanLogo({ size = 40 }: { size?: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }} 
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6200ea" />
            <stop offset="100%" stopColor="#00e676" />
          </linearGradient>
        </defs>
        
        {/* Main Shape: A stylish 'A' or arrow pointing up/right */}
        <path
          d="M50 15 L20 85 H35 L50 50 L65 85 H80 L50 15 Z"
          fill="url(#logoGradient)"
          stroke="#fff"
          strokeWidth="2"
        />
        
        {/* Tech nodes */}
        <circle cx="50" cy="15" r="6" fill="#00e676" stroke="#121212" strokeWidth="2" />
        <circle cx="20" cy="85" r="6" fill="#6200ea" stroke="#121212" strokeWidth="2" />
        <circle cx="80" cy="85" r="6" fill="#6200ea" stroke="#121212" strokeWidth="2" />
        
        {/* Connection lines suggesting circuit/flow */}
        <path
          d="M85 85 H95"
          stroke="#00e676"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M15 85 H5"
          stroke="#6200ea"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
}
