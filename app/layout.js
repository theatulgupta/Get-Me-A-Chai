import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Get Me A Chai - Fund your projects with Chai',
  descriptions: 'Get Me A Chai is a web application that helps creators fund their projects.',
  keywords: "funding, funding platform, web developer funding, chai, creator's funding App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
