'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useUserData } from '@/context/userDataProvider';
import { useRouter } from 'next/navigation';

import { hoheadItems } from '@/lib/hohead.data';
import { hostaffItems } from '@/lib/hostaff.data';
import { LogOut } from 'lucide-react';
import { boheadItems } from '@/lib/bohead.data';
import { bostaffItems } from '@/lib/bostaff.data';
import { Spinner } from '../ui/spinner';

export default function AppSidebar() {
  const { userRole, logout } = useUserData();
  console.log(userRole);

  const router = useRouter();

  const items =
    userRole === 'HOHead'
      ? hoheadItems
      : userRole === 'HOStaff'
        ? hostaffItems
        : userRole === 'BOHead'
          ? boheadItems
          : userRole === 'BOStaff'
            ? bostaffItems
            : [];

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('userRole');
    logout();
    router.push('/login');
  };

  return !userRole ? (
    <div className="fixed h-screen w-screen bg-white z-999 flex items-center justify-center">
      <Spinner className="h-10 w-10" />
    </div>
  ) : (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-[#242423] text-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="[&>svg]:size-5 py-6 text-[16px]"
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Logout"
                  className="[&>svg]:size-5 py-6 text-[16px]"
                >
                  <button onClick={handleLogout}>
                    <LogOut />
                    <span className="flex gap-1">Logout</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
