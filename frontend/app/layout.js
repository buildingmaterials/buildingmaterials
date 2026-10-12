import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export const metadata = {
  title: 'Kanak Building and Materials | Quality Materials in Rajasthan',
  description: 'Trusted building materials supplier and retailer in Salumber, Rajasthan.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}