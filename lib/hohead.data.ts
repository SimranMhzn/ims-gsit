'use client';
import {
  Layers,
  LayoutDashboard,
  Split,
  StickyNote,
  UserRound,
} from 'lucide-react';

export const hoheadItems = [
  {
    title: 'Dashboard',
    url: '/hohead',
    icon: LayoutDashboard,
  },
  {
    title: 'Branches',
    url: '/hohead/branches',
    icon: Split,
  },
  {
    title: 'View Purchase Order',
    url: '/hohead/purchase',
    icon: StickyNote,
  },
  {
    title: 'Inventory',
    url: '/hohead/inventory',
    icon: Layers,
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: UserRound,
  },
];
