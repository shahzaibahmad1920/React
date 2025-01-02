import React from 'react';
import { Paper, Typography, Divider, Box } from '@mui/material';

const EmailView = () => {
  const email = {
    from: 'John Doe <john@example.com>',
    to: 'me@example.com',
    subject: 'Meeting Tomorrow',
    date: 'May 15, 2023, 10:30 AM',
    body: 'Hi,\n\nJust a reminder about our meeting tomorrow at 2 PM. Please come prepared with your project updates.\n\nBest regards,\nJohn',
  };

  return (
    <Paper elevation={3} sx={{ p: 3, height: '100%', overflow: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        {email.subject}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        From: {email.from}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        To: {email.to}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        Date: {email.date}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ whiteSpace: 'pre-wrap' }}>
        <Typography variant="body1">{email.body}</Typography>
      </Box>
    </Paper>
  );
};

export default EmailView;

