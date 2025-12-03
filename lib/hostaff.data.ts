'use client';
import { FilePlusCorner, Layers, Settings, StickyNote } from 'lucide-react';

export const hostaffItems = [
  {
    title: 'Inventory',
    url: '/hostaff',
    icon: Layers,
  },
  {
    title: 'Pending Requisition Form',
    url: '/hostaff/requisition',
    icon: StickyNote,
  },
  {
    title: 'Fill purchase order',
    url: '/hostaff/purchase',
    icon: FilePlusCorner,
  },
  {
    title: 'Settings',
    url: '/hostaff/setting',
    icon: Settings,
  },
];
