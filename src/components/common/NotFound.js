import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Paper, Typography, Box } from '@mui/material';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/page/1');
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Page is not found
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        The page you're looking for does not exist or another error occurred. Go
        back, or head over to the homepage to choose a new direction.
      </Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Go to Home
        </Button>
      </Box>
    </Paper>
  );
};

export default NotFound;
