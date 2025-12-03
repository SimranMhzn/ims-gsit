'use client';
import { Layers, LayoutDashboard, Settings, StickyNote } from 'lucide-react';

export const boheadItems = [
  {
    title: 'Dashboard',
    url: '/bohead',
    icon: LayoutDashboard,
  },
  {
    title: 'View Requisition Form',
    url: '/bohead/requisition',
    icon: StickyNote,
  },
  {
    title: 'Inventory',
    url: '/bohead/inventory',
    icon: Layers,
  },
  {
    title: 'Settings',
    url: '/profile',
    icon: Settings,
  },
];
