'use client';
import {
  FilePlusCorner,
  Layers,
  LayoutDashboard,
  Settings,
} from 'lucide-react';

export const bostaffItems = [
  {
    title: 'Dashboard',
    url: '/bostaff',
    icon: LayoutDashboard,
  },
  {
    title: 'Fill requisition order',
    url: '/bostaff/requisition',
    icon: FilePlusCorner,
  },
  {
    title: 'Inventory',
    url: '/bostaff/inventory',
    icon: Layers,
  },
  {
    title: 'Settings',
    url: '/bostaff/setting',
    icon: Settings,
  },
];
