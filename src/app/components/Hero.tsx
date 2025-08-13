"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image (no overlay) */}
      <Image
        src="/images/bg.jpg" // 👈 apni high-quality image ka path lagayein
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <div className="max-w-2xl bg-black/50 p-6 rounded-lg md:bg-transparent md:p-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Explore Your <span className="text-red-500">Desires</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md">
            Discover premium bondage gear, seductive lingerie, and toys that push boundaries.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              Shop Now
            </Link>
            <Link
              href={`/collection/{slug}`}
              className="bg-transparent border border-white hover:border-red-500 hover:text-red-500 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              View Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
