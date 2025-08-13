"use client";

import Image from "next/image";
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "SALE", href: "/sale", highlight: true, categories: [] },
  {
    name: "BDSM Toys",
    href: "/bdsm-toys",
    categories: [
      { name: "Leather Gear", href: "/collection/leather-gear" },
      { name: "Ropes & Restraints", href: "/collection/ropes" },
      { name: "Whips & Paddles", href: "/collection/whips" },
    ],
  },
  {
    name: "Bondage Toys",
    href: "/bondage-toys",
    categories: [
      { name: "Handcuffs", href: "/collection/handcuffs" },
      { name: "Gags & Muzzles", href: "/collection/gags" },
      { name: "Blindfolds", href: "/collection/blindfolds" },
    ],
  },
  {
    name: "Sex Toys",
    href: "/sex-toys",
    categories: [
      { name: "Vibrators", href: "/collection/vibrators" },
      { name: "Dildos", href: "/collection/dildos" },
      { name: "Anal Toys", href: "/collection/anal-toys" },
    ],
  },
  {
    name: "Electro Sex Toys",
    href: "/electro-sex-toys",
    highlight: true,
    categories: [
      { name: "Electro Wands", href: "/collection/electro-wands" },
      { name: "Pads & Cuffs", href: "/collection/electro-pads" },
    ],
  },
  {
    name: "Sex Machines",
    href: "/sex-machines",
    categories: [
      { name: "Thrusting Machines", href: "/collection/thrusting" },
      { name: "Sybian Style", href: "/collection/sybian" },
    ],
  },
  { name: "New!", href: "/new", categories: [] },
  { name: "Bestsellers", href: "/bestsellers", categories: [] },
  { name: "Merch", href: "/merch", categories: [] },
  { name: "Inside KINK", href: "/inside-kink", categories: [] },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="w-full border-b border-red-900 bg-black text-white relative z-40">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:flex-row flex-wrap gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0 order-1 md:order-none"
        >
          <Image
            src="/images/logo.png"
            alt="Noir Desire Logo"
            width={80}
            height={80}
            className="w-16 h-auto"
          />
          <span className="text-lg md:text-xl font-bold tracking-wide">
            NOIR DESIRE
          </span>
        </Link>

        {/* Search */}
        <div className="flex items-center bg-white text-black rounded-sm overflow-hidden w-full md:w-80 order-3 md:order-none">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 px-3 py-1 outline-none text-sm"
          />
          <button className="px-2">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Icons + Mobile Menu Button */}
        <div className="flex items-center gap-4 order-2 md:order-none">
          <Link href="/account">
            <User className="w-6 h-6" />
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
              0
            </span>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <div
        className={`${mobileOpen ? "block" : "hidden"} md:block border-t border-red-900`}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center gap-1 md:gap-6 text-sm font-medium py-2">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => !mobileOpen && setHovered(i)}
              onMouseLeave={() => !mobileOpen && setHovered(null)}
            >
              <div className="flex items-center justify-between md:justify-start">
                <Link
                  href={item.href}
                  className={`hover:text-red-500 ${
                    item.highlight ? "text-red-500 font-bold" : ""
                  } flex-1`}
                >
                  {item.name}
                </Link>
                {item.categories.length > 0 && (
                  <button
                    className="md:hidden px-2"
                    onClick={() => toggleDropdown(i)}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Dropdown for Desktop */}
              {item.categories.length > 0 && hovered === i && !mobileOpen && (
                <div className="absolute left-0 top-full mt-1 bg-black border border-red-900 rounded shadow-lg min-w-[200px] z-50">
                  {item.categories.map((cat, idx) => (
                    <Link
                      key={idx}
                      href={cat.href}
                      className="block px-4 py-2 hover:bg-red-900 hover:text-white"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Dropdown for Mobile */}
              {item.categories.length > 0 && openDropdown === i && mobileOpen && (
                <div className="pl-4">
                  {item.categories.map((cat, idx) => (
                    <Link
                      key={idx}
                      href={cat.href}
                      className="block px-4 py-2 hover:bg-red-900 hover:text-white"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
