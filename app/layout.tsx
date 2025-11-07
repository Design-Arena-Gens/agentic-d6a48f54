import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admissions AI Agent - Sainik/RMS/Navodaya',
  description: 'Automated sales executive for demo scheduling and lead intake',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
