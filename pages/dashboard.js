export default function Dashboard() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Investor Dashboard</h1>

      {/* Portfolio Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Your Portfolio</h2>
        <div className="bg-gray-900 rounded-lg p-6 shadow">
          <p>Total Properties Owned: 3</p>
          <p>Total Tokens: 12,450</p>
          <p>Estimated Monthly Rent: ₹74,500</p>
        </div>
      </section>

      {/* Payment History Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Payment History</h2>
        <div className="bg-gray-900 rounded-lg p-4 shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">Date</th>
                <th className="p-2">Property</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Method</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="p-2">01 Sep 2025</td>
                <td>Pune 2BHK Apartment</td>
                <td>₹19,000</td>
                <td>Bank (Simulated)</td>
                <td className="text-green-400">Completed</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-2">15 Aug 2025</td>
                <td>Goa Vacation Villa</td>
                <td>₹9,500</td>
                <td>PayPal (Simulated)</td>
                <td className="text-green-400">Completed</td>
              </tr>
              <tr>
                <td className="p-2">10 Aug 2025</td>
                <td>Bangalore IT Park Fraction</td>
                <td>₹25,000</td>
                <td>UPI (Simulated)</td>
                <td className="text-yellow-400">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="mt-12 text-gray-500 text-center">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/VibSinghJATT/OpenEstate"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline"
        >
          OpenEstate
        </a>
      </footer>
    </div>
  );
}
