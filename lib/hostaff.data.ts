'use client';
import {
  FilePlusCorner,
  Layers,
  LayoutDashboard,
  Settings,
  StickyNote,
} from 'lucide-react';

export const hostaffItems = [
  {
    title: 'Dashboard',
    url: '/hostaff',
    icon: LayoutDashboard,
  },
  {
    title: 'View Requisition Form',
    url: '/hostaff/requisition',
    icon: StickyNote,
  },
  {
    title: 'Fill purchase order',
    url: '/hostaff/requisition',
    icon: FilePlusCorner,
  },
  {
    title: 'Inventory',
    url: '/hostaff/inventory',
    icon: Layers,
  },
  {
    title: 'Settings',
    url: '/hostaff/setting',
    icon: Settings,
  },
];
