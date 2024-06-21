import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';
import NavBar from '@components/components/Nav';

const inter = Inter({ subsets: ['latin'] });

const dmSans = DM_Sans({
  weight: [
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
  ],
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Object Detention Application',
  description:
    'A client side object detention created with tensor flow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/logo.svg"
        />
      </head>
      <body className={dmSans.className}>
        <NavBar />
        {children}

        <div className="flex gap-1 items-center mt-24 mb-8 md:mb-0 px-5 md:px-10 lg:px-[5vw]">
          <p className="text-sm text-[#8C8CA1]">
            POWERED BY{' '}
          </p>
          <p className="font-medium text-lg text-[#0E0E2C]">
            Getlinked.AI
          </p>
        </div>
      </body>
    </html>
  );
}
