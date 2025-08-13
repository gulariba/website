"use client";

import Link from "next/link";

export default function AccountPage() {
  // ✅ Future me yaha user data API se fetch karoge
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    joined: "January 2024",
  };

  const orders = [
    { id: "ORD1234", date: "2025-08-10", total: 59.99, status: "Delivered" },
    { id: "ORD5678", date: "2025-07-15", total: 129.5, status: "Processing" },
  ];

  return (
    <main className="bg-black text-white  px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8">My Account</h1>

        {/* Profile Info */}
        <section className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
          <p><span className="font-semibold">Name:</span> {user.name}</p>
          <p><span className="font-semibold">Email:</span> {user.email}</p>
          <p><span className="font-semibold">Member Since:</span> {user.joined}</p>

          <Link
            href="/account/edit"
            className="inline-block mt-4 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
          >
            Edit Profile
          </Link>
        </section>

        {/* Order History */}
        <section className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Order History</h2>
          {orders.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2">Order ID</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Total</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-700">
                    <td className="py-2">{order.id}</td>
                    <td className="py-2">{order.date}</td>
                    <td className="py-2">${order.total.toFixed(2)}</td>
                    <td className="py-2">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>You have no orders yet.</p>
          )}
        </section>
      </div>
    </main>
  );
}
