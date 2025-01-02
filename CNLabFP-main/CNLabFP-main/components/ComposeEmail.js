import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Paper, Input } from '@mui/material';
import { Send as SendIcon, AttachFile as AttachFileIcon } from '@mui/icons-material';
import TopBar from '../components/TopBar';

const ComposeEmail = () => {
  const [formData, setFormData] = useState({
    recipient: '',
    subject: '',
    message: '',
    file: null, // For storing the uploaded file metadata
  });
  const [loading, setLoading] = useState(false);

  // Create a ref to handle file input click
  const fileInputRef = React.createRef();

  // Function to handle form data change
  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  // Function to handle file upload (simulate upload and measure time)
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const startTime = performance.now();
      // Simulating file processing (e.g., reading it locally)
      await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve();
        reader.readAsArrayBuffer(file);
      });
      const uploadTime = performance.now() - startTime;

      setFormData({
        ...formData,
        file: { name: file.name, size: file.size, uploadTime },
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      // Collect network stats using performance API
      const timing = performance.getEntriesByType('navigation')[0];
      const dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
      const connectTime = timing.connectEnd - timing.connectStart;
      const sslHandshakeTime = timing.connectEnd - timing.secureConnectionStart;
      const ttfb = timing.responseStart - timing.requestStart;
      // Collect network stats using performance API
      const networkType = navigator.connection?.type || "Wifi";
      console.log("Network Type:", networkType);
      const ipAddress = await fetchIpAddress();
      const latency = Date.now();
      const fileStats = formData.file ? { ...formData.file } : null;
      console.log(latency);
      // Network stats to send
      const networkStats = {
        dnsTime,
        connectTime,
        sslHandshakeTime,
        ttfb,
        networkType,
        ipAddress,
        latency,
        uploadTime: fileStats?.uploadTime || null, // Include uploadTime
      };
  
      // Send the data to the backend
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient: formData.recipient,
          subject: formData.subject,
          message: formData.message,
          networkStats,
          fileMetadata: fileStats, // Include file metadata but not the file itself
        }),
      });
  
      const result = await response.json();
  
      if (!response.ok) throw new Error(result.message);
  
      alert('Email sent and stored successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch IP address (similar to previous code)
  const fetchIpAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
      return 'Unavailable';
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <TopBar />
      <Container maxWidth="md" sx={{ pt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom className="gradient-text">
          Compose Email
        </Typography>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 100%)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="To"
              margin="normal"
              variant="outlined"
              required
              value={formData.recipient}
              onChange={handleChange('recipient')}
              sx={{ bgcolor: 'rgba(255,255,255,0.7)' }}
            />
            <TextField
              fullWidth
              label="Subject"
              margin="normal"
              variant="outlined"
              required
              value={formData.subject}
              onChange={handleChange('subject')}
              sx={{ bgcolor: 'rgba(255,255,255,0.7)' }}
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              variant="outlined"
              multiline
              rows={6}
              required
              value={formData.message}
              onChange={handleChange('message')}
              sx={{ bgcolor: 'rgba(255,255,255,0.7)' }}
            />

            {/* Flex container for aligning the buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              {/* File input button aligned to the left */}
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => fileInputRef.current.click()}
                startIcon={<AttachFileIcon />}
              >
                {formData.file ? formData.file.name : 'Choose a file'}
              </Button>
              {/* Hidden file input element */}
              <Input
                type="file"
                inputRef={fileInputRef}
                onChange={handleFileChange}
                sx={{ display: 'none' }}
              />

              {/* Send Email button aligned to the right */}
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                startIcon={<SendIcon />}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Email'}
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default ComposeEmail;
