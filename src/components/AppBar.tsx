'use client';

import {
  AppBar as MuiAppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

interface AppBarProps {
  toggleSidebar: () => void;
}

export default function AppBar({ toggleSidebar }: AppBarProps) {
  const router = useRouter();

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Boilerplate
        </Typography>
        <Button color="inherit" onClick={() => router.replace('/')}>
          Logout
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
}
