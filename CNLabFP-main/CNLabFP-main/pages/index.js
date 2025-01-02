import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import {
  Mail,
  Send,
  NetworkCheck,
  Speed,
  CloudQueue,
  ArrowForward,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
// Decorative background component
const BackgroundDecoration = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: 0,
      opacity: 0.5,
      pointerEvents: 'none',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '20rem',
        height: '20rem',
        background: 'linear-gradient(45deg, #FCD34D, transparent)',
        borderRadius: '50%',
        filter: 'blur(100px)',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '20rem',
        height: '20rem',
        background: 'linear-gradient(45deg, #5B21B6, transparent)',
        borderRadius: '50%',
        filter: 'blur(100px)',
      }}
    />
  </Box>
);

// Feature card component
const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
  <Card
    sx={{
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-5px)',
        transition: 'transform 0.3s ease',
      },
    }}
  >
    <CardContent>
      <Box
        sx={{
          background: gradient,
          width: 60,
          height: 60,
          borderRadius: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <Icon sx={{ fontSize: 30, color: '#FFFFFF' }} />
      </Box>
      <Typography variant="h5" gutterBottom sx={{ color: '#1F2937' }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: '#4B5563' }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default function Home() {
  const theme = useTheme();
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('/auth'); // Navigate to the Sign-In/Sign-Up page
  };
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <BackgroundDecoration />
      
      <Container maxWidth="lg" sx={{ position: 'relative', py: 8 }}>
        {/* Hero Section */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 12 }}>
          <Grid item xs={12} md={7}>
            <Typography variant="h1" gutterBottom>
              One Platform, Unlimited Possibilities
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 4, color: '#4B5563' }}
            >
              Experience the next generation of SMTP server with real-time insights
              and seamless communication.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => handleGetStartedClick()}
              >
                Get Started
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                
              >
                View Demo
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src="/side_image.svg"
              alt="Hero illustration"
              sx={{
                width: '100%',
                height: 'auto',
                animation: 'float 6s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-20px)' },
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Features Section */}
        <Typography variant="h2" sx={{ mb: 6, textAlign: 'center', color: '#1F2937' }}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={Mail}
              title="Client Interface"
              description="Beautiful and intuitive email client interface with modern design and smooth interactions."
              gradient="linear-gradient(45deg, #5B21B6, #7C3AED)"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={NetworkCheck}
              title="Server Monitoring"
              description="Real-time server monitoring with detailed insights and performance metrics."
              gradient="linear-gradient(45deg, #38BDF8, #0EA5E9)"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard
              icon={Speed}
              title="Network Insights"
              description="Comprehensive network statistics and latency monitoring for optimal performance."
              gradient="linear-gradient(45deg, #FCD34D, #F59E0B)"
            />
          </Grid>
        </Grid>

        {/* Stats Section */}
        <Card sx={{ mt: 12, position: 'relative', overflow: 'hidden' }}>
          <CardContent sx={{ p: 6 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom sx={{ color: '#1F2937' }}>
                  Powerful Performance Metrics
                </Typography>
                <Typography variant="body1" sx={{ color: '#4B5563', mb: 4 }}>
                  Monitor your SMTP server's performance in real-time with detailed analytics
                  and insights.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForward />}
                >
                  View Dashboard
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  {[
                    { label: 'Uptime', value: '99.9%' },
                    { label: 'Avg. Latency', value: '24ms' },
                    { label: 'Success Rate', value: '99.8%' },
                    { label: 'Active Users', value: '1,000+' },
                  ].map((stat, index) => (
                    <Grid item xs={6} key={index}>
                      <Card sx={{ bgcolor: 'background.paper' }}>
                        <CardContent>
                          <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
                            {stat.value}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#4B5563' }}>
                            {stat.label}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

