import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

gsap.registerPlugin(ScrollTrigger);

export default function Dashboard() {
  const historyRef = useRef(null);
  const chartsRef = useRef(null);

  // Sample payment history (simulated)
  const payments = [
    {
      date: "2025-09-01",
      property: "Pune 2BHK Apartment",
      amount: "₹10,000",
      method: "Bank (Simulated)",
      status: "Success",
    },
    {
      date: "2025-08-15",
      property: "Bangalore IT Park Fraction",
      amount: "₹25,000",
      method: "PayPal (Simulated)",
      status: "Success",
    },
    {
      date: "2025-08-01",
      property: "Goa Vacation Villa",
      amount: "₹15,000",
      method: "Cashfree (Simulated)",
      status: "Pending",
    },
  ];

  // Sample chart data
  const rentData = [
    { quarter: "Q1", rent: 1200 },
    { quarter: "Q2", rent: 1600 },
    { quarter: "Q3", rent: 1800 },
    { quarter: "Q4", rent: 2200 },
  ];

  const tokensData = [
    { name: "Pune 2BHK", value: 40 },
    { name: "Bangalore IT Park", value: 35 },
    { name: "Goa Villa", value: 25 },
  ];

  const COLORS = ["#8b5cf6", "#06b6d4", "#22c55e"];

  useEffect(() => {
    // Animate payment history
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".payment-row",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: historyRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate charts
      gsap.fromTo(
        ".chart-section",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: chartsRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">Your Dashboard</h1>

      {/* Portfolio Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
        <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
          <h3 className="font-semibold mb-2">Total Investment</h3>
          <p className="text-purple-400 text-xl">₹50,000</p>
        </div>
        <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
          <h3 className="font-semibold mb-2">Tokens Owned</h3>
          <p className="text-purple-400 text-xl">12,500</p>
        </div>
        <div className="p-6 bg-gray-900 rounded-xl shadow-lg">
          <h3 className="font-semibold mb-2">Quarterly Rent Earned</h3>
          <p className="text-purple-400 text-xl">₹4,500</p>
        </div>
      </div>

      {/* Charts Section */}
      <div ref={chartsRef} className="chart-section max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">Investment Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Rent Growth Chart */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold mb-4">Quarterly Rent Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={rentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="quarter" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="rent"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Token Ownership Pie */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="font-semibold mb-4">Token Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tokensData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {tokensData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div ref={historyRef} className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Payment History</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Property</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Method</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr
                  key={index}
                  className="payment-row border-b border-gray-800 hover:bg-gray-900 transition"
                >
                  <td className="py-3 px-4">{payment.date}</td>
                  <td className="py-3 px-4">{payment.property}</td>
                  <td className="py-3 px-4 text-green-400">{payment.amount}</td>
                  <td className="py-3 px-4">{payment.method}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      payment.status === "Success"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        © <a href="https://github.com/VibSinghJATT" className="hover:text-purple-400">OpenEstate</a>
      </div>
    </div>
  );
}
