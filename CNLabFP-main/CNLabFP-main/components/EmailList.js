import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Divider } from '@mui/material';

const EmailList = () => {
  const emails = [
    { id: 1, from: 'John Doe', subject: 'Meeting Tomorrow', preview: 'Hi, just a reminder about our meeting...' },
    { id: 2, from: 'Jane Smith', subject: 'Project Update', preview: 'I have finished the first phase of the project...' },
    { id: 3, from: 'Bob Johnson', subject: 'Lunch Next Week?', preview: 'Are you free for lunch next Tuesday?' },
  ];

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {emails.map((email, index) => (
        <React.Fragment key={email.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={email.from} src={`/static/images/avatar/${index + 1}.jpg`} />
            </ListItemAvatar>
            <ListItemText
              primary={email.subject}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {email.from}
                  </Typography>
                  {` — ${email.preview}`}
                </React.Fragment>
              }
            />
          </ListItem>
          {index < emails.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default EmailList;

