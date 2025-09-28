import "../styles/globals.css";
import AnimatedBackground from "../components/AnimatedBackground";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Futuristic background everywhere */}
      <AnimatedBackground />  

      {/* Foreground content */}
      <div className="relative z-10">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
