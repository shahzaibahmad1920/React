import React from 'react';
import { 
  Card, 
  CardContent,
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Divider 
} from '@mui/material';
import { Speed as SpeedIcon, SignalCellularAlt as SignalIcon, Storage as StorageIcon } from '@mui/icons-material';

const NetworkStats = ({ stats }) => {
  return (
    <Card elevation={0} sx={{ overflow: 'visible' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: '#ffffff' }}>
          Network Statistics
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <SpeedIcon sx={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText 
              primary="Latency" 
              secondary={`${stats.latency} ms`}
              primaryTypographyProps={{ fontWeight: 500, color: '#ffffff' }}
              secondaryTypographyProps={{ color: '#bdc3c7' }}
            />
          </ListItem>
          <Divider variant="inset" component="li" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
          <ListItem>
            <ListItemIcon>
              <SignalIcon sx={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText 
              primary="Packet Loss" 
              secondary={`${stats.packetLoss}%`}
              primaryTypographyProps={{ fontWeight: 500, color: '#ffffff' }}
              secondaryTypographyProps={{ color: '#bdc3c7' }}
            />
          </ListItem>
          <Divider variant="inset" component="li" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
          <ListItem>
            <ListItemIcon>
              <StorageIcon sx={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText 
              primary="Bandwidth" 
              secondary={`${stats.bandwidth} Mbps`}
              primaryTypographyProps={{ fontWeight: 500, color: '#ffffff' }}
              secondaryTypographyProps={{ color: '#bdc3c7' }}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default NetworkStats;

