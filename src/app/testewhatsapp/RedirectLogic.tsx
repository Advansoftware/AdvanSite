'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function RedirectLogic() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const phone = '5535984216196';
    let messageText = 'Olá, gostaria de saber mais sobre a AdvanSoftware.';

    // Check query params for source
    if (searchParams.has('tiktok')) {
      messageText = 'Olá, vim pelo TikTok e quero um teste grátis';
    } else if (searchParams.has('instagram')) {
      messageText = 'Olá, vim pelo Instagram e quero saber mais';
    } else if (searchParams.get('source')) {
      const source = searchParams.get('source');
      messageText = `Olá, vim pelo ${source} e gostaria de um atendimento.`;
    }

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.location.href = whatsappUrl;
  }, [searchParams]);

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
      <CircularProgress color="primary" />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Abrindo WhatsApp...
      </Typography>
    </Box>
  );
}
