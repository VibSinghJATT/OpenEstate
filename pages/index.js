import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Hero animations
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-item",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.3, ease: "power3.out" }
      );

      // Property cards animation on scroll
      gsap.fromTo(
        ".property-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center h-screen text-center px-6"
      >
        <h1 className="hero-item text-4xl md:text-6xl font-bold mb-4">
          Own real estate like buying shares.
        </h1>
        <p className="hero-item text-lg md:text-xl text-gray-400 mb-6">
          Fractional, transparent, and compliant (demo).
        </p>
        <Link
          href="/invest"
          className="hero-item px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
        >
          Buy Tokens (Simulate)
        </Link>
      </section>

      {/* Featured Properties */}
      <section ref={cardsRef} className="px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="property-card p-6 bg-gray-900 rounded-xl shadow-lg">
            <h3 className="font-semibold mb-2">Pune 2BHK Apartment</h3>
            <p>Price: ₹18,000,000</p>
            <p>Tokens: 100,000</p>
            <p>Rent/mo: ₹45,000</p>
            <Link
              href="#"
              className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300"
            >
              View
            </Link>
          </div>

          <div className="property-card p-6 bg-gray-900 rounded-xl shadow-lg">
            <h3 className="font-semibold mb-2">Bangalore IT Park Fraction</h3>
            <p>Price: ₹50,000,000</p>
            <p>Tokens: 500,000</p>
            <p>Rent/mo: ₹300,000</p>
            <Link
              href="#"
              className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300"
            >
              View
            </Link>
          </div>

          <div className="property-card p-6 bg-gray-900 rounded-xl shadow-lg">
            <h3 className="font-semibold mb-2">Goa Vacation Villa</h3>
            <p>Price: ₹22,000,000</p>
            <p>Tokens: 150,000</p>
            <p>Rent/mo: ₹80,000</p>
            <Link
              href="#"
              className="mt-3 inline-block text-sm text-purple-400 hover:text-purple-300"
            >
              View
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
