import './globals.css';
import LayoutShell from '@/components/LayoutShell/LayoutShell';
import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
