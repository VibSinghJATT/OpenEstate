import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    gsap.from(".about-card", {
      scrollTrigger: {
        trigger: ".about-card",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">About OpenEstate</h1>
      <p className="text-lg mb-4">
        OpenEstate is a next-generation platform making{" "}
        <strong>fractional real estate</strong> investing as simple as buying
        shares. Using blockchain-backed simulation, we ensure{" "}
        <span className="text-purple-400"> transparency, compliance, and security</span>.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="about-card bg-gray-900 rounded-xl p-6 shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">🚀 Our Mission</h3>
          <p>
            Democratize real estate by lowering entry barriers. Anyone can start
            investing with as little as ₹5,000.
          </p>
        </div>
        <div className="about-card bg-gray-900 rounded-xl p-6 shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">🔗 How It Works</h3>
          <p>
            Properties are tokenized into small digital units. Investors buy
            tokens, earn simulated rental income, and can resell in a marketplace.
          </p>
        </div>
        <div className="about-card bg-gray-900 rounded-xl p-6 shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">🛡️ Why OpenEstate</h3>
          <p>
            Transparent processes, verified property docs, simulated escrow, and
            blockchain logs give you full confidence in every step.
          </p>
        </div>
      </div>

      <p className="mt-12 text-gray-400">
        This is a demo version with simulated payments and blockchain logs. For
        real deployment, SEBI/RERA compliance and licensed custodians will be
        integrated.
      </p>

      <footer className="mt-12 text-gray-500">
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
