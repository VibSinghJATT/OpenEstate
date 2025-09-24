import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".about-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".about-text",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.3 },
          "-=0.5"
        )
        .fromTo(
          ".about-card",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.25,
          },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20" ref={aboutRef}>
      {/* Heading */}
      <h1 className="about-heading text-4xl font-bold mb-6 text-center">
        About OpenEstate
      </h1>

      {/* Intro */}
      <p className="about-text text-center text-gray-400 max-w-2xl mx-auto mb-12">
        We make real estate investing accessible, transparent, and fractional.  
        This demo uses simulated payments and a faux blockchain log to show  
        how fractional real estate can work for everyone.
      </p>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="about-card p-6 bg-gray-900 rounded-xl shadow-lg">
          <h3 className="font-semibold mb-2">🚀 Vision</h3>
          <p className="text-gray-400 text-sm">
            Real estate ownership made as easy as buying shares — safe, compliant,
            and transparent.
          </p>
        </div>

        <div className="about-card p-6 bg-gray-900 rounded-xl shadow-lg">
          <h3 className="font-semibold mb-2">🔒 Security</h3>
          <p className="text-gray-400 text-sm">
            Blockchain-backed ledger ensures ownership is immutable, while  
            secure KYC keeps compliance intact.
          </p>
        </div>

        <div className="about-card p-6 bg-gray-900 rounded-xl shadow-lg">
          <h3 className="font-semibold mb-2">💡 Simulated Demo</h3>
          <p className="text-gray-400 text-sm">
            Payments and rental income are simulated, giving a preview of how  
            real-world adoption will look.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        © <a href="https://github.com/VibSinghJATT" className="hover:text-purple-400">OpenEstate</a>
      </div>
    </div>
  );
}
