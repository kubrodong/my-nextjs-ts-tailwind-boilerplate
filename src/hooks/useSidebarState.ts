'use client';

import { useState, useEffect } from 'react';

const SIDEBAR_STORAGE_KEY = 'sidebar_open';

export function useSidebarState(defaultOpen = true) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  useEffect(() => {
    localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(isOpen));
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return { isOpen, toggleSidebar, openSidebar, closeSidebar };
}
