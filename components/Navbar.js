import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-item",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="flex justify-between items-center px-8 py-4 bg-black bg-opacity-80 fixed w-full z-50"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2 nav-item">
        <Image src="/logo.png" alt="OpenEstate Logo" width={40} height={40} />
        <span className="text-xl font-bold text-white">OpenEstate</span>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center space-x-6">
        <Link href="/about" className="text-gray-300 hover:text-white nav-item">
          About
        </Link>
        <Link
          href="/dashboard"
          className="text-gray-300 hover:text-white nav-item"
        >
          Dashboard
        </Link>
        <Link
          href="/invest"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 nav-item"
        >
          Invest
        </Link>
      </div>
    </nav>
  );
}
