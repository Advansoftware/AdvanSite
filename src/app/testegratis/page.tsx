'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function TesteGratisPage() {
  const router = useRouter();

  useEffect(() => {
    // Basic redirect for /testegratis
    // User requested: "link que eu vou postar no tiktok sera advansoftware.shop/testewhatsapp?tiktok"
    // But this route is /testegratis.
    // Let's assume this is the direct link.
    const phone = '5535984216196';
    const message = encodeURIComponent('Olá, gostaria de solicitar um teste grátis do serviço de streaming.');
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

    // Small delay to show "Redirecionando..." (Optional, bad UX? maybe, but good for feedback)
    // Actually, improved UX is immediate or with a clear message.
    window.location.href = whatsappUrl;
  }, [router]);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
        color: 'white',
      }}
    >
      <CircularProgress color="secondary" />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Redirecionando para o WhatsApp...
      </Typography>
    </Box>
  );
}
