'use client';

import React from 'react';
import { Box, Container, Typography, Button, Card, CardContent, CardMedia, CardActions, Chip, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VerifiedIcon from '@mui/icons-material/Verified';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Link from 'next/link';
import { FAQJsonLd } from '@/components/JsonLd';
import AdvanLogo from '@/components/AdvanLogo';

const projects = [
  {
    title: 'Gastometria',
    description: 'Plataforma de gestão financeira completa.',
    image: '/portfolio/gastometria.png',
    link: 'https://gastometria.com.br/',
    tags: ['SaaS', 'Gestão', 'Web App'],
  },
  {
    title: 'Respondia',
    description: 'Solução de IA para atendimento automático e suporte.',
    image: '/portfolio/respondia.png',
    link: 'https://respondia.pro/',
    tags: ['IA', 'Chatbot', 'Automação'],
  },
  {
    title: 'Prefeitura de Brazópolis',
    description: 'Portal oficial da prefeitura municipal.',
    image: '/portfolio/brazopolis.png',
    link: 'https://brazopolis.mg.gov.br/',
    tags: ['Governo', 'Portal', 'Institucional'],
  },
];

const stats = [
  { number: '10+', label: 'Projetos Entregues' },
  { number: '5+', label: 'Anos de Experiência' },
  { number: '100%', label: 'Clientes Satisfeitos' },
  { number: '24h', label: 'Tempo de Resposta' },
];

const steps = [
  {
    icon: <SearchIcon fontSize="large" />,
    title: 'Entendimento',
    description: 'Analisamos seu negócio, suas dores e seus objetivos para propor a solução ideal.',
  },
  {
    icon: <CodeIcon fontSize="large" />,
    title: 'Desenvolvimento',
    description: 'Construímos seu produto com tecnologias modernas, seguindo boas práticas e com entregas contínuas.',
  },
  {
    icon: <RocketLaunchIcon fontSize="large" />,
    title: 'Lançamento',
    description: 'Publicamos, treinamos sua equipe e garantimos que tudo funcione perfeitamente desde o primeiro dia.',
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: 'Suporte Contínuo',
    description: 'Acompanhamos seu sistema após o lançamento com manutenção, atualizações e suporte direto.',
  },
];

const faqs = [
  {
    question: 'Quanto tempo leva para desenvolver um sistema?',
    answer: 'Depende da complexidade do projeto. Um MVP (produto mínimo viável) pode ficar pronto em 4 a 8 semanas. Projetos mais completos levam de 3 a 6 meses. Sempre fazemos entregas parciais para você acompanhar a evolução.',
  },
  {
    question: 'Vocês trabalham com quais tecnologias?',
    answer: 'Trabalhamos com Next.js, React, Node.js, NestJS, MongoDB, Docker e integrações com IA (OpenAI, LLMs). Para infraestrutura, usamos VPS Linux com Docker. Escolhemos sempre a melhor stack para cada projeto.',
  },
  {
    question: 'Como funciona o suporte após a entrega?',
    answer: 'Oferecemos planos de manutenção mensal que incluem correções de bugs, atualizações de segurança, pequenas melhorias e suporte via WhatsApp. Você nunca fica sem assistência.',
  },
  {
    question: 'Vocês fazem integração com WhatsApp?',
    answer: 'Sim! É uma das nossas especialidades. Desenvolvemos chatbots inteligentes, automação de atendimento, notificações automáticas e integrações completas com WhatsApp usando IA para atendimento humanizado.',
  },
  {
    question: 'Posso acompanhar o desenvolvimento do meu projeto?',
    answer: 'Claro! Trabalhamos com entregas contínuas e você recebe acesso a um ambiente de teste para validar cada funcionalidade antes de ir ao ar. Mantemos comunicação constante por WhatsApp.',
  },
  {
    question: 'Vocês atendem empresas de qualquer tamanho?',
    answer: 'Sim. Atendemos desde empreendedores individuais até prefeituras e empresas de médio porte. Nosso diferencial é oferecer soluções profissionais com atendimento personalizado, independente do tamanho do cliente.',
  },
];

const testimonials = [
  {
    name: 'Prefeitura de Brazópolis',
    role: 'Portal Institucional',
    text: 'O novo portal trouxe modernidade e acessibilidade para nossa comunicação com os cidadãos. Equipe profissional e atenciosa durante todo o processo.',
  },
  {
    name: 'Gastometria',
    role: 'Plataforma SaaS',
    text: 'Desde a concepção até o deploy, a AdvanSoftware entregou um produto robusto e escalável. A plataforma funciona impecavelmente e nossos usuários adoram.',
  },
];

export default function PortfolioHome() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <FAQJsonLd faqs={faqs} />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          background: 'linear-gradient(180deg, rgba(98, 0, 234, 0.1) 0%, rgba(0,0,0,0) 100%)',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <AdvanLogo size={80} />
          </Box>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="800"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              lineHeight: { xs: 1.2, md: 1.1 }
            }}
          >
            Transformando ideias em software de{' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              alto desempenho
            </Box>
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Somos especialistas em criar soluções digitais que impulsionam negócios. De portais governamentais a sistemas SaaS complexos.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              component={Link}
              href="/servicos"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ borderRadius: 8, px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
              Ver Nossos Serviços
            </Button>
            <Button
              href="https://wa.me/5535984216196?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20tenho%20interesse%20em%20um%20projeto."
              target="_blank"
              variant="outlined"
              size="large"
              startIcon={<WhatsAppIcon />}
              sx={{ borderRadius: 8, px: 4, py: 1.5, fontSize: '1.1rem', borderColor: '#25D366', color: '#25D366', '&:hover': { borderColor: '#25D366', bgcolor: 'rgba(37,211,102,0.08)' } }}
            >
              Falar pelo WhatsApp
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* ═══════════════════ NÚMEROS ═══════════════════ */}
      <Box component="section" sx={{ py: 8, bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Container maxWidth="lg">
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4,
            textAlign: 'center',
          }}>
            {stats.map((stat) => (
              <Box key={stat.label}>
                <Typography variant="h3" fontWeight="800" color="primary.main">
                  {stat.number}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════ PORTFÓLIO ═══════════════════ */}
      <Box component="section" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom sx={{ mb: 2, textAlign: 'center' }}>
            Nossos Projetos
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </Typography>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            width: '100%'
          }}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.5)'
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={`Screenshot do projeto ${project.title}`}
                    sx={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3" fontWeight="bold">
                      {project.title}
                    </Typography>
                    <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" color="primary" />
                      ))}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button size="small" href={project.link} target="_blank" endIcon={<ArrowForwardIcon />}>
                      Visitar Projeto
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════ SOBRE NÓS ═══════════════════ */}
      <Box component="section" sx={{ py: 10, bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <GroupsIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
            Sobre a AdvanSoftware
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Somos uma empresa de tecnologia de Brazópolis, Minas Gerais, focada em entregar software de qualidade para empresas que precisam de soluções sob medida. Nosso trabalho vai desde a concepção da ideia até o deploy e suporte contínuo.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Acreditamos que tecnologia não precisa ser complicada. Por isso, trabalhamos lado a lado com nossos clientes, traduzindo necessidades reais em sistemas intuitivos, rápidos e que realmente funcionam. Já atendemos desde empreendedores individuais até prefeituras municipais.
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 4 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <CheckCircleOutlineIcon sx={{ color: 'secondary.main' }} />
              <Typography variant="body2" color="text.secondary">Atendimento personalizado</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CheckCircleOutlineIcon sx={{ color: 'secondary.main' }} />
              <Typography variant="body2" color="text.secondary">Entregas contínuas</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CheckCircleOutlineIcon sx={{ color: 'secondary.main' }} />
              <Typography variant="body2" color="text.secondary">Suporte direto</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* ═══════════════════ COMO TRABALHAMOS ═══════════════════ */}
      <Box component="section" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
            Como Trabalhamos
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 8, maxWidth: 600, mx: 'auto' }}>
            Nosso processo é transparente do início ao fim. Você acompanha cada etapa.
          </Typography>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4,
          }}>
            {steps.map((step, index) => (
              <Box key={index} sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  bgcolor: 'rgba(159,101,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                  color: 'primary.main',
                  position: 'relative',
                }}>
                  {step.icon}
                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                      bgcolor: 'primary.main',
                      color: 'white',
                      borderRadius: '50%',
                      width: 28,
                      height: 28,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    {index + 1}
                  </Typography>
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══════════════════ DEPOIMENTOS ═══════════════════ */}
      <Box component="section" sx={{ py: 10, bgcolor: 'rgba(255,255,255,0.02)' }}>
        <Container maxWidth="md">
          <VerifiedIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2, display: 'block', mx: 'auto' }} />
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom sx={{ textAlign: 'center', mb: 6 }}>
            O que nossos clientes dizem
          </Typography>

          <Stack spacing={4}>
            {testimonials.map((t, index) => (
              <Card key={index} sx={{ p: 4, position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(180deg, rgba(0,230,118,1) 0%, rgba(0,230,118,0) 100%)' }} />
                <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  &ldquo;{t.text}&rdquo;
                </Typography>
                <Typography variant="subtitle2" fontWeight="bold">
                  {t.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {t.role}
                </Typography>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <Box component="section" sx={{ py: 10 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom sx={{ textAlign: 'center', mb: 2 }}>
            Perguntas Frequentes
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
            Tire suas dúvidas sobre nosso processo e serviços.
          </Typography>

          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                bgcolor: 'rgba(255,255,255,0.03)',
                '&:before': { display: 'none' },
                borderRadius: '8px !important',
                mb: 2,
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="600">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* ═══════════════════ CTA FINAL ═══════════════════ */}
      <Box component="section" sx={{ py: 10 }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Box sx={{ p: 8, borderRadius: 6, bgcolor: 'rgba(159,101,255,0.05)', border: '1px solid rgba(159,101,255,0.15)' }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Pronto para começar?
            </Typography>
            <Typography paragraph color="text.secondary" sx={{ mb: 4 }}>
              Conte-nos sobre seu projeto. Responderemos em até 24 horas.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/5535984216196?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20AdvanSoftware."
              target="_blank"
              sx={{ py: 2, px: 6, fontSize: '1.1rem', borderRadius: 8 }}
            >
              Falar com Especialista
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
