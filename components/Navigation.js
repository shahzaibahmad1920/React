import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { Mail, Notifications, Settings } from '@mui/icons-material';

const Navigation = ({ isServer = false }) => {
  const theme = useTheme();

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              component="img"
              src="/side_image.svg"
              alt="Logo"
              sx={{ height: 32 }}
            />
            <Typography
              variant="h6"
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              {isServer ? 'SMTP Server' : 'Mail Client'}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            {!isServer && (
              <>
                <IconButton color="primary">
                  <Mail />
                </IconButton>
                <IconButton color="primary">
                  <Notifications />
                </IconButton>
              </>
            )}
            <IconButton color="primary">
              <Settings />
            </IconButton>
            <Button
              variant="contained"
              color="secondary"
              sx={{ ml: 2 }}
            >
              {isServer ? 'Server Status' : 'Compose'}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navigation;

