import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const numParticles = 40;

    // Particle object
    function Particle(x, y, radius, speedX, speedY, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.speedX = speedX;
      this.speedY = speedY;
      this.color = color;

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      };

      this.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.speedY = -this.speedY;
        }

        this.draw();
      };
    }

    // Generate particles
    for (let i = 0; i < numParticles; i++) {
      let radius = Math.random() * 4 + 2;
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let speedX = (Math.random() - 0.5) * 1.5;
      let speedY = (Math.random() - 0.5) * 1.5;
      let colors = ["#8b5cf6", "#06b6d4", "#22c55e", "#9333ea"];
      let color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(new Particle(x, y, radius, speedX, speedY, color));
    }

    // Gradient background
    function drawGradient() {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#0f0c29");
      gradient.addColorStop(0.5, "#302b63");
      gradient.addColorStop(1, "#24243e");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Animate
    function animate() {
      requestAnimationFrame(animate);
      drawGradient();
      particles.forEach((p) => p.update());
    }

    animate();

    // Resize handler
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
