import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularLoader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", gap: "10px" }}>
      <CircularProgress sx={ {color: "inherit"} } />
    </Box>
  );
}
