import { Pixelify_Sans } from "next/font/google";
import Logo from "../components/Logo";
import Disclaimer from "../components/Disclaimer";
import GitHubButton from "../components/GitHubButton";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";
import { SITE_CONFIG } from "../config/site";

const pixelifySans = Pixelify_Sans({ subsets: ["latin"] });

export const metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function Home() {
  return (
    <div
      style={{
        fontFamily: pixelifySans.style.fontFamily,
        width: "100vw",
        height: "100vh",
        background: `
          linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0d0d0d 100%)
        `,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        margin: 0,
        border: "none",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      <AnimatedBackground />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Logo />

        <h1
          className="main-title"
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#e8e8e8",
            margin: "0 0 30px 0",
            textAlign: "center",
            letterSpacing: "4px",
            textShadow:
              "0 8px 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(80, 80, 80, 0.2)",
            lineHeight: "1.2",
          }}
        >
          EM CONSTRUÇÃO
        </h1>

        <p
          className="domain-text"
          style={{
            fontSize: "20px",
            color: "#a0a0a0",
            margin: "0 0 40px 0",
            textAlign: "center",
            textShadow: "0 4px 15px rgba(0, 0, 0, 0.6)",
            letterSpacing: "1px",
            fontWeight: "300",
          }}
        >
          {SITE_CONFIG.domain}
        </p>

        <Disclaimer />
        <GitHubButton />
      </div>

      <Footer />
    </div>
  );
}
