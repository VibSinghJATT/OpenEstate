import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Hero fade-in
    gsap.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Parallax background effect
    gsap.to(".hero-bg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        scrub: true,
      },
    });

    // Featured Properties animation
    gsap.from(".property-card", {
      scrollTrigger: {
        trigger: ".property-card",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section relative h-[70vh] flex items-center justify-center overflow-hidden bg-black text-center">
        <div className="hero-bg absolute inset-0 bg-[url('/bg-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h1 className="hero-title text-5xl font-bold text-white mb-4">
            Own real estate like buying shares.
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Fractional, transparent, and compliant (demo).
          </p>
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Buy Tokens (Simulate)
          </Link>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Featured Properties
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="property-card bg-gray-900 rounded-xl p-6 shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Pune 2BHK Apartment</h3>
            <p>Price: ₹18,000,000</p>
            <p>Tokens: 100,000</p>
            <p>Rent/mo: ₹45,000</p>
            <Link href="/property/1" className="text-purple-400 hover:underline">
              View
            </Link>
          </div>
          <div className="property-card bg-gray-900 rounded-xl p-6 shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">
              Bangalore IT Park Fraction
            </h3>
            <p>Price: ₹50,000,000</p>
            <p>Tokens: 500,000</p>
            <p>Rent/mo: ₹300,000</p>
            <Link href="/property/2" className="text-purple-400 hover:underline">
              View
            </Link>
          </div>
          <div className="property-card bg-gray-900 rounded-xl p-6 shadow hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Goa Vacation Villa</h3>
            <p>Price: ₹22,000,000</p>
            <p>Tokens: 150,000</p>
            <p>Rent/mo: ₹80,000</p>
            <Link href="/property/3" className="text-purple-400 hover:underline">
              View
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500">
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
