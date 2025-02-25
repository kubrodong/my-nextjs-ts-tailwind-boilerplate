'use client';

import React from 'react';
import SideBar from '@/components/SideBar';
import { Box, Toolbar } from '@mui/material';
import AppBar from '@/components/AppBar';
import { useSidebarState } from '@/hooks/useSidebarState';

const sidebarWidth = 240;

interface BasicLayoutProps {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: BasicLayoutProps) {
  const { isOpen, toggleSidebar } = useSidebarState();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar toggleSidebar={toggleSidebar} />
      <SideBar width={sidebarWidth} open={isOpen} />
      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          p: 3,
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: !isOpen ? `-${sidebarWidth}px` : 0,
        })}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
