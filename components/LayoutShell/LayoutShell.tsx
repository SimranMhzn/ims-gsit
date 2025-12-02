'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/SideBar/Sidebar';
import { UserDataProvider } from '@/context/userDataProvider';

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const hideSidebar = pathname === '/login' || pathname === '/register';
  useEffect(() => {
    try {
      const storedEmail = localStorage.getItem('userEmail') || '';
      const isAuth = Boolean(storedEmail);
      if (isAuth && pathname === '/login') {
        router.push('/');
      }
      if (!hideSidebar && !isAuth) {
        router.push('/login');
      }
    } catch (err) {
      if (!hideSidebar) router.push('/login');
    }
  }, [hideSidebar, pathname, router]);

  return (
    <SidebarProvider>
      <UserDataProvider>
        {!hideSidebar && <AppSidebar />}
        <div className="flex min-h-screen w-full">
          {!hideSidebar && <SidebarTrigger className="px-5" />}
          <main className="flex-1">{children}</main>
        </div>
      </UserDataProvider>
    </SidebarProvider>
  );
}
