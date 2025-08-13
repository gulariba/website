"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function HomePage() {
  const categories = [
    { name: "BDSM Toys", img: "/images/bdsm.jpg", slug: "bdsm-toys" },
    { name: "Bondage Toys", img: "/images/bondage.jpg", slug: "bondage-toys" },
    { name: "Sex Toys", img: "/images/sextoys.jpg", slug: "sex-toys" },
    { name: "Electro Sex Toys", img: "/images/electrotoy.jpg", slug: "electro-sex-toys" },
  ];

  const newArrivals = [
    { id: 1, name: "Luxury Leather Handcuffs", price: 99.99 },
    { id: 2, name: "Silicone Whip", price: 79.99 },
    { id: 3, name: "Bondage Rope Set", price: 59.99 },
    { id: 4, name: "Electro Stimulation Kit", price: 149.99 },
  ];

  const bestSellers = [
    { id: 5, name: "Premium Blindfold", price: 29.99 },
    { id: 6, name: "Adjustable Spreader Bar", price: 89.99 },
    { id: 7, name: "Vibrating Wand", price: 129.99 },
    { id: 8, name: "Collar & Leash Set", price: 49.99 },
  ];

  const blogs = [
    { slug: "beginner-bdsm-guide", title: "Beginner's Guide to BDSM", excerpt: "Learn the basics of safe, consensual play..." },
    { slug: "bondage-safety-tips", title: "Bondage Safety Tips", excerpt: "How to enjoy bondage while keeping safety first..." },
    { slug: "exploring-electro-play", title: "Exploring Electro Play", excerpt: "A guide to starting with electro stimulation..." },
  ];

  return (
    <main className="bg-black text-white  overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative w-full h-48">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={false}
                />
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-lg font-semibold">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-red-950 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">New Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="bg-black p-4 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="h-40 bg-gray-800 rounded-md mb-4"></div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-red-400 font-bold">${p.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="relative w-full h-64 my-16">
        <div className="relative w-full h-full">
          <Image
            src="/images/sale.jpg"
            alt="Limited Time Offer"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl font-bold mb-2">Summer Heat Sale</h2>
          <p className="mb-4 text-lg">Up to 50% OFF selected products</p>
          <Link
            href="/categories/sale"
            className="bg-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Shop Sale
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Best Sellers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="bg-black p-4 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="h-40 bg-gray-800 rounded-md mb-4"></div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-red-400 font-bold">${p.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Latest from Our Blog</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((b) => (
            <Link
              key={b.slug}
              href={`/blog/${b.slug}`}
              className="bg-black border border-red-900 rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-40 bg-gray-800"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-400 mb-4">{b.excerpt}</p>
                <span className="text-red-400 hover:underline">Read More</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-red-950 py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6 text-gray-200">Sign up for exclusive offers, new arrivals, and special events.</p>
        <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none text-black outline-none"
          />
          <button className="bg-black px-6 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none font-semibold hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900 py-12 text-gray-400 mt-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">NOIR DESIRE</h2>
            <p className="text-sm leading-relaxed">
              Luxury & passion redefined. Explore our exclusive collection for a truly intimate experience.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/shop" className="hover:text-red-500 transition">Shop</Link></li>
              <li><Link href="/about" className="hover:text-red-500 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-red-500 transition">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition">BDSM</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Bondage</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Sex Toys</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Electro</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Get exclusive offers and updates directly to your inbox.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-900 text-white text-sm border border-gray-700 rounded-l focus:outline-none"
              />
              <button className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-r hover:bg-red-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} NOIR DESIRE. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
