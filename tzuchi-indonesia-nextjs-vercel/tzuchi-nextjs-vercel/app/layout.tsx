import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Yayasan Buddha Tzu Chi Indonesia | Cinta Kasih untuk Sesama',
  description: 'Mengenal misi kemanusiaan Yayasan Buddha Tzu Chi Indonesia. Amal, kesehatan, pendidikan, budaya humanis, dan aksi nyata bersama relawan serta donatur.',
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="id"><body>{children}</body></html>;
}
