import './globals.css';
import LayoutShell from '@/components/LayoutShell/LayoutShell';
import { Toaster } from 'sonner';
import { UserDataProvider } from '@/context/userDataProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <UserDataProvider>
          <LayoutShell>{children}</LayoutShell>
        </UserDataProvider>
      </body>
    </html>
  );
}
