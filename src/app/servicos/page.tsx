'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Stack } from '@mui/material';
import {
  CloudQueue as SaasIcon,
  SmartToy as BotIcon,
  Storage as InfraIcon,
  Functions as LogicIcon,
  Brush as DesignIcon,
  SystemUpdateAlt as LegacyIcon,
  WhatsApp as WhatsAppIcon,
  Code as CodeIcon,
  Storage as DbIcon
} from '@mui/icons-material';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Plataformas SaaS & Sistemas Web',
      description: 'Transformamos ideias complexas em produtos digitais escaláveis. Especialidade em sistemas de gestão (como financeiro e CRM) utilizando arquitetura moderna e segura.',
      details: 'Desenvolvimento Full Stack com Next.js (Monolítico) e banco de dados MongoDB, garantindo performance e facilidade de manutenção. Experiência real com ciclo de vida completo do produto, do design ao deploy.',
      icon: <SaasIcon fontSize="large" color="primary" />,
      context: 'Experiência: Gastometria e RespondIA',
    },
    {
      title: 'Automação & Chatbots Inteligentes',
      description: 'Automatize o atendimento da sua empresa no WhatsApp. Criamos assistentes virtuais que não apenas respondem, mas gerenciam leads, organizam clientes em funis (Kanban) e integram com seus sistemas internos.',
      details: 'Implementação de Inteligência Artificial (LLMs) para atendimentos humanizados e configuração de fluxos complexos de resposta automática.',
      icon: <BotIcon fontSize="large" color="secondary" />,
      context: 'Experiência: Funcionalidades do RespondIA',
    },
    {
      title: 'Infraestrutura & Self-Hosting',
      description: 'Reduza custos com licenças de software. Configuramos servidores próprios (VPS) para sua empresa rodar ferramentas internas com segurança e privacidade total, sem depender de grandes big techs.',
      details: 'Exemplos: Gestão eletrônica de documentos (Paperless), bloqueadores de anúncios em rede (AdGuard), e servidores de mídia/arquivos privados.',
      icon: <InfraIcon fontSize="large" sx={{ color: '#00e5ff' }} />,
      context: 'Experiência: Home Lab e Servidores VPS',
    },
    {
      title: 'Sistemas de Lógica Complexa',
      description: 'Desenvolvimento de sistemas que exigem cálculos avançados, lógica de probabilidade e gestão de grandes volumes de dados em tempo real.',
      details: 'Ideal para clientes que precisam de sistemas de apostas, leilões ou ferramentas estatísticas personalizadas.',
      icon: <LogicIcon fontSize="large" sx={{ color: '#ff9100' }} />,
      context: 'Experiência: Projeto LotoMind',
    },
    {
      title: 'Identidade Visual & Mascotes',
      description: 'Damos vida à sua marca. Além do código, ajudamos a definir a personalidade do seu produto com a criação e conceituação de mascotes e identidades visuais marcantes que conectam com o usuário.',
      details: 'Direção de arte para definir a identidade (cores, estilo 3D, emoções) que passa autoridade e confiança.',
      icon: <DesignIcon fontSize="large" sx={{ color: '#f50057' }} />,
      context: 'Experiência: Coruja (Gastometria) e Porco (BigCupom)',
    },
    {
      title: 'Modernização de Legados',
      description: 'Sua empresa ainda roda em sistemas antigos e lentos? Migramos sua infraestrutura legada (PHP, sistemas desktop) para tecnologias web modernas, rápidas e acessíveis pelo celular.',
      details: 'Atualização tecnológica para garantir segurança, escalabilidade e uma melhor experiência para o usuário final.',
      icon: <LegacyIcon fontSize="large" sx={{ color: '#76ff03' }} />,
      context: 'Experiência: Migração PHP para React/Next.js',
    },
  ];

  const stack = [
    { category: 'Front-end & Back-end', tools: ['Next.js', 'React', 'Node.js', 'NestJS', 'PHP'], icon: <CodeIcon /> },
    { category: 'Dados & Infraestrutura', tools: ['MongoDB', 'Docker', 'VPS Linux'], icon: <DbIcon /> },
    { category: 'Diferenciais', tools: ['Integração com IA', 'Automação WhatsApp', 'Landing Pages BeeLeads'], icon: <BotIcon /> },
  ];

  return (
    <Box sx={{ pb: 8 }}>
      {/* Hero Section */}
      <Box sx={{
        pt: 15,
        pb: 10,
        textAlign: 'center',
        background: 'radial-gradient(ellipse at top, rgba(159, 101, 255, 0.2) 0%, rgba(10, 10, 10, 0) 70%)',
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" fontWeight="800" gutterBottom>
            Nossas Soluções
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Da concepção ou modernização até a escala. Tecnologia de ponta para resolver problemas reais.
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(180deg, rgba(159,101,255,1) 0%, rgba(159,101,255,0) 100%)'
                }} />
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>{service.icon}</Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Chip
                    label={service.context}
                    size="small"
                    sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.05)', color: 'text.secondary' }}
                  />
                  <Typography variant="body1" paragraph>
                    {service.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Tech Stack Section */}
        <Box sx={{ mt: 15, mb: 10, textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Tecnologias que Dominamos
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
            Ferramentas modernas para performance e estabilidade.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {stack.map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  height: '100%'
                }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>{item.icon}</Box>
                  <Typography variant="h6" gutterBottom>{item.category}</Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} justifyContent="center" sx={{ mt: 2 }}>
                    {item.tools.map((tool) => (
                      <Chip key={tool} label={tool} variant="outlined" />
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Final CTA */}
        <Box sx={{ textAlign: 'center', py: 10, bgcolor: 'rgba(159, 101, 255, 0.05)', borderRadius: 8 }}>
          <Container maxWidth="sm">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Tem um projeto em mente?
            </Typography>
            <Typography paragraph color="text.secondary" sx={{ mb: 4 }}>
              Vamos conversar sobre como podemos ajudar a transformar sua ideia em realidade ou modernizar sua operação.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/5535984216196?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20AdvanSoftware."
              target="_blank"
              sx={{ py: 2, px: 6, fontSize: '1.1rem' }}
            >
              Falar com Especialista
            </Button>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
