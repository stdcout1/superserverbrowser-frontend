import React from 'react'
import {Box, Alert, Button } from '@mui/joy'
import PlaylistAddCheckCircleRounded from "@mui/icons-material/PlaylistAddCheckRounded"

const Alerts= () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
      <Alert
        variant="soft"
        color="success"
        startDecorator={<PlaylistAddCheckCircleRounded />}
        endDecorator={
          <Button
            size="sm"
            variant="outlined"
            color="success"
            sx={{
              textTransform: 'uppercase',
              fontSize: 'xs',
              fontWeight: 'xl',
            }}
          >
            Close
          </Button>
        }
      >
        Your message was sent successfully.
      </Alert>
    </Box>
  )
}

export default Alerts