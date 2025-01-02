import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,Stack
} from '@mui/material';
import Navigation from '../../components/Navigation';
import {
  Speed,
  CloudQueue,
  Memory,
  Storage,
} from '@mui/icons-material';

const MetricCard = ({ icon: Icon, title, value, progress, color }) => (
  <Card>
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <Box
          sx={{
            backgroundColor: `${color}15`,
            borderRadius: 2,
            p: 1,
            display: 'flex',
          }}
        >
          <Icon sx={{ color: color }} />
        </Box>
        <Typography variant="h6">{title}</Typography>
      </Stack>
      <Typography variant="h4" color={color} gutterBottom fontWeight="bold">
        {value}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: `${color}20`,
          '& .MuiLinearProgress-bar': {
            backgroundColor: color,
          },
        }}
      />
    </CardContent>
  </Card>
);

const ServerDashboard = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navigation isServer />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <MetricCard
              icon={Speed}
              title="Latency"
              value="24ms"
              progress={75}
              color="#FF4B8C"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MetricCard
              icon={CloudQueue}
              title="Uptime"
              value="99.9%"
              progress={95}
              color="#00C6AE"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MetricCard
              icon={Memory}
              title="CPU Usage"
              value="45%"
              progress={45}
              color="#FFB800"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MetricCard
              icon={Storage}
              title="Storage"
              value="67%"
              progress={67}
              color="#FFD100"
            />
          </Grid>

          <Grid item xs={12}>
            <Card
              sx={{
                mt: 4,
                background: 'linear-gradient(45deg, #00C6AE 30%, #FFD100 90%)',
                color: 'white',
              }}
            >
              <CardContent>
                <Grid container alignItems="center" spacing={3}>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
                      Server Performance Insights
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                      Monitor your SMTP server's performance metrics in real-time.
                      Track latency, throughput, and system resources.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box
                      component="img"
                      src="/server-illustration.svg"
                      alt="Server illustration"
                      sx={{
                        width: '100%',
                        maxWidth: 300,
                        display: 'block',
                        margin: 'auto',
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServerDashboard;

