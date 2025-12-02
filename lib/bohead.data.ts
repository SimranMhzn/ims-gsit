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
    url: '/bohead/purchase',
    icon: StickyNote,
  },
  {
    title: 'Inventory',
    url: '/bohead/inventory',
    icon: Layers,
  },
  {
    title: 'Settings',
    url: '/bohead/setting',
    icon: Settings,
  },
];
