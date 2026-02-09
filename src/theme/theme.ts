'use client';

import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0a',
      paper: '#1e1e1e',
    },
    primary: {
      main: '#9F65FF', // Lighter Purple for better contrast on dark
      light: '#B388FF',
      dark: '#6200EA', // The original deep purple is now 'dark'
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00e676', // Bright Green
      light: '#66ffa6',
      dark: '#00b248',
      contrastText: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          padding: '12px 24px',
          fontWeight: 600,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #6200EA 30%, #9F65FF 90%)', // Use deep to light gradient
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'rgba(30, 30, 30, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlinedPrimary: {
          borderColor: '#9F65FF',
          color: '#9F65FF', // Ensure text is the lighter purple
        }
      }
    }
  },
});

export default theme;
