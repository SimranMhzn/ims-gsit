'use client';
import {
  FilePlusCorner,
  Layers,
  LayoutDashboard,
  Settings,
  User,
} from 'lucide-react';

export const bostaffItems = [
  {
    title: 'Inventory',
    url: '/bostaff',
    icon: Layers,
  },
  {
    title: 'Fill requisition order',
    url: '/bostaff/requisition',
    icon: FilePlusCorner,
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: User,
  },
];
