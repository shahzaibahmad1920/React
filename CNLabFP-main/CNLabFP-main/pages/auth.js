// pages/auth.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
export default function SignInSignUp() {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between SignUp and SignIn
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignUp ? '/api/auth/signup' : '/api/auth/signin';  
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      if(!isSignUp){
        router.push('/client/dashboard')
      }
    } else {
      setError(data.error);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        my: 4,
        padding: 4,
        border: '1px solid #ddd',
        borderRadius: 2,
        backgroundColor: 'background.paper', // Theme background
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </Typography>
      {error && <Typography color="error">{error}</Typography>}

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
      </form>

      <Button
        onClick={() => setIsSignUp(!isSignUp)}
        sx={{ mt: 2 }}
      >
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </Button>
    </Box>
  );
}
