export default function AnimatedBackground() {
  return (
    <div
      style={{
        position: "absolute",
        top: "-50%",
        left: "-50%",
        width: "200%",
        height: "200%",
        background: `
          radial-gradient(ellipse 1000px 800px at 50% 30%, rgba(80, 80, 80, 0.12) 0%, transparent 40%),
          radial-gradient(ellipse 900px 900px at 20% 70%, rgba(60, 60, 60, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse 800px 600px at 80% 60%, rgba(50, 50, 50, 0.06) 0%, transparent 50%)
        `,
        pointerEvents: "none",
        animation: "glow 8s ease-in-out infinite",
      }}
    />
  );
}
