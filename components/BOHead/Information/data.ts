'use client';
import {
  CircleAlert,
  CircleCheck,
  CircleDollarSign,
  GitBranch,
  Layers,
  List,
  UserRound,
  UserRoundX,
} from 'lucide-react';

export const data = [
  {
    title: 'Monthly Entry',
    description: 'Rs. 55478.00',
    url: '/#',
    icon: CircleDollarSign,
  },
  {
    title: 'Assembly',
    description: '0',
    url: '/#',
    icon: List,
  },
  {
    title: 'Branch',
    description: '2',
    url: '/#',
    icon: GitBranch,
  },
  {
    title: 'Personnel',
    description: '0',
    url: '/#',
    icon: UserRound,
  },
  {
    title: 'Absent',
    description: '0',
    url: '/#',
    icon: UserRoundX,
  },
  {
    title: 'Present',
    description: '0',
    url: '/#',
    icon: CircleCheck,
  },
  {
    title: 'Inventory',
    description: '0',
    url: '/#',
    icon: Layers,
  },
  {
    title: 'Inventory Alert',
    description: '0',
    url: '/#',
    icon: CircleAlert,
  },
];
