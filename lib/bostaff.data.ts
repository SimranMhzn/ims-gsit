'use client';
import { FilePlusCorner, History, Layers, User } from 'lucide-react';

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
    title: 'Requisition order history',
    url: '/bostaff/history',
    icon: History,
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: User,
  },
];
