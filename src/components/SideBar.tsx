'use client';

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import React from 'react';
import { MenuItems } from '../constants/MenuConstant';
import Link from 'next/link';

interface SideBarProps {
  open: boolean;
  width: number;
}

export default function SideBar({ open, width }: SideBarProps) {
  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        width: width,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: width, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        {MenuItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}
