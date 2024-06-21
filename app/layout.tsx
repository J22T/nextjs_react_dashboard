import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';

export const metadata: Metadata= {
  title: {
    template: '%s | Acme Dashboard | @Jordan Taylor',
    default: 'Acme Dashboard by @Jordan Taylor',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  authors: [{name: 'Jordan Taylor', url:'https://github.com/J22T/nextjs_dashboard'}],
  keywords: ['Next.js 14', 'Acme', 'Dashboard', 'nextjs.org/learn', 'Server Actions'],
  openGraph: {
    title: 'Acme Dashboard',
    description: 'The official Next.js Learn Dashboard buiilt with App Router.',
    url: 'https://nextjs-dashboard-xi-six-94.vercel.app/',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`${inter.className} antialiased`}>{children}
      </body>
    </html>
  );
}
