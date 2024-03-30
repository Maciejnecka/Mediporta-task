import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

const ErrorDialog = ({ error, onClose }) => (
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
      <Button onClick={onClose} color="primary">
        Retry
      </Button>
      <Button
        onClick={() => window.location.reload()}
        color="primary"
        autoFocus
      >
        Refresh
      </Button>
    </DialogActions>
  </Dialog>
);

export default ErrorDialog;
