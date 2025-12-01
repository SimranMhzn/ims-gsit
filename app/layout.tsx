import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import './globals.css';
import { AppSidebar } from '@/components/SideBar/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SidebarProvider>
        <AppSidebar />
        <body className="flex min-h-screen w-full">
          <SidebarTrigger className="px-5" />
          <main className="flex-1">{children}</main>
        </body>
      </SidebarProvider>
    </html>
  );
}
