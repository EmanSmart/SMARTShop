"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "../assets/smartlogo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="SMARTShop Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
}
