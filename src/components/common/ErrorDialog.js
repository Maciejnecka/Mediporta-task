import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

const ErrorDialog = ({ error, onClose }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/page/1');
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <Dialog
      open={Boolean(error)}
      onClose={onClose}
      aria-labelledby="error-dialog-title"
      aria-describedby="error-dialog-description"
    >
      <DialogTitle id="error-dialog-title">{'An Error Occurred'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="error-dialog-description">
          Unfortunately, an error has occurred: {error.message} Please try
          refreshing the page or contact support if the issue persists.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => window.location.reload()}
          color="primary"
          autoFocus
        >
          Refresh
        </Button>
        <Button onClick={handleGoHome} color="primary">
          Go to Home
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
