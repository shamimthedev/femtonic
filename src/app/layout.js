import '../styles/globals.css';
import AnnouncementBar from '../components/AnnouncementBar';
import Header from '../components/Header';
import { Figtree, Urbanist } from 'next/font/google';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});
const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${urbanist.variable}`}>
      <body className="bg-black font-figtree">
        <AnnouncementBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
