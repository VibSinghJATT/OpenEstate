import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PaymentHistory from '@/components/PaymentHistory';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <h1>Your Dashboard</h1>
        <PaymentHistory />
      </main>
      <Footer />
    </div>
  );
}
