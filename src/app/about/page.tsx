"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-black text-white  px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-red-500">About Us</h1>
        <p className="text-lg text-white mb-8 leading-relaxed">
          At <span className="text-red-400 font-semibold">NOIR DESIRE</span>, we believe in crafting 
          unforgettable experiences through our curated selection of premium products. Our mission 
          is to blend elegance, quality, and passion in every piece we offer.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-white mb-4">
              Founded with a vision to bring sophistication and boldness to your lifestyle, we have 
              grown into a trusted name for high-quality, exclusive collections. Our dedication 
              to craftsmanship and detail is unmatched.
            </p>
            <p className="text-white ">
              Every collection is carefully designed, ensuring it speaks to the unique desires of 
              our customers. We are more than a brand — we are a lifestyle.
            </p>
          </div>
          <Image
            src="/images/bg.jpg"
            alt="About us"
            width={800}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
