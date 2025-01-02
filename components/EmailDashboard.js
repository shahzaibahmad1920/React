import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Paper,
} from '@mui/material';
import {
  Add as AddIcon,
  Inbox as InboxIcon,
  Send as SendIcon,
  AccessTime as AccessTimeIcon,
  Star as StarIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import MailCard from './MailCard';
import TopBar from './TopBar';

// Mock data for emails
const mockEmails = {
  inbox: [
    { id: 1, from: 'John Doe', subject: 'Meeting tomorrow', preview: 'Hi, just a reminder about our meeting...' },
    { id: 2, from: 'Jane Smith', subject: 'Project update', preview: 'Ive finished the first phase of the project...' },
    { id: 3, from: 'Bob Johnson', subject: 'Question about the report', preview: 'I was looking at the quarterly report and...' },
  ],
  sent: [
    { id: 4, to: 'Alice Brown', subject: 'Re: Proposal', preview: 'Thanks for your proposal. Ive reviewed it and...' },
    { id: 5, to: 'Charlie Davis', subject: 'Weekly update', preview: 'Here\'s a summary of what we accomplished this week...' },
  ],
  starred: [
    { id: 6, from: 'Eva Wilson', subject: 'Important: Client meeting', preview: 'We have a crucial client meeting scheduled for...' },
    { id: 7, from: 'Frank Miller', subject: 'Congratulations!', preview: 'I heard about your recent promotion. Congratulations on...' },
  ],
  pending: [
    { id: 8, to: 'Grace Lee', subject: 'Draft: Quarterly report', preview: 'I\'ve started working on the quarterly report. Here\'s what I have so far...' },
    { id: 9, to: 'Henry Wang', subject: 'Follow-up: Project timeline', preview: 'Regarding our discussion about the project timeline, I think we should...' },
  ],
};

const EmailDashboard = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('inbox');

  const handleComposeClick = () => {
    router.push('/compose');
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleDeleteEmail = (emailId) => {
    // Implement delete functionality here
    console.log(`Delete email with id: ${emailId}`);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <TopBar />
      <Container maxWidth="xl" sx={{ pt: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography
  variant="h5"
  component="h1"
  color="grey"
  
>
  Welcome Client!
</Typography>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            onClick={handleComposeClick}
            
          >
            Compose Email
          </Button>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <MailCard
              icon={<InboxIcon />}
              title="Inbox"
              count={mockEmails.inbox.length}
              color="#F59E0B"
              onClick={() => handleCategoryClick('inbox')}
              selected={selectedCategory === 'inbox'}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MailCard
              icon={<SendIcon />}
              title="Sent"
              count={mockEmails.sent.length}
              color="#38BDF8"
              onClick={() => handleCategoryClick('sent')}
              selected={selectedCategory === 'sent'}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MailCard
              icon={<AccessTimeIcon />}
              title="Pending"
              count={mockEmails.pending.length}
              color="#FCD34D"
              onClick={() => handleCategoryClick('pending')}
              selected={selectedCategory === 'pending'}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <MailCard
              icon={<StarIcon />}
              title="Starred"
              count={mockEmails.starred.length}
              color="#5B21B6"
              onClick={() => handleCategoryClick('starred')}
              selected={selectedCategory === 'starred'}
            />
          </Grid>
        </Grid>
        <Paper 
          elevation={3} 
          sx={{ 
            mt: 4, 
            borderRadius: '16px', 
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 100%)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Card sx={{ bgcolor: 'transparent' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#4A5568' }}>
                {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Messages
              </Typography>
              <List>
                {mockEmails[selectedCategory].map((email, index) => (
                  <React.Fragment key={email.id}>
                    <ListItem 
                      alignItems="flex-start" 
                      sx={{ 
                        '&:hover': { 
                          bgcolor: 'rgba(91, 33, 182, 0.05)',
                          transition: 'background-color 0.3s ease',
                        },
                        borderRadius: '8px',
                        mb: 1,
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" sx={{ color: '#2D3748', fontWeight: 600 }}>
                            {email.subject}
                          </Typography>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline', color: '#4A5568' }}
                              component="span"
                              variant="body2"
                            >
                              {email.from || email.to}
                            </Typography>
                            {` — ${email.preview}`}
                          </React.Fragment>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteEmail(email.id)}>
                          <DeleteIcon sx={{ color: '#718096' }} />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    {index < mockEmails[selectedCategory].length - 1 && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Paper>
      </Container>
    </Box>
  );
};

export default EmailDashboard;

