export default function Disclaimer() {
  return (
    <div
      className="disclaimer-box"
      style={{
        maxWidth: "600px",
        padding: "20px 30px",
        background: "rgba(30, 30, 30, 0.6)",
        border: "none",
        backdropFilter: "blur(10px)",
        boxShadow: `
          0 0 0 2px rgba(100, 100, 100, 0.5),
          0 0 0 4px rgba(30, 30, 30, 0.6),
          0 8px 32px rgba(0, 0, 0, 0.6)
        `,
        imageRendering: "pixelated",
      }}
    >
      <p
        className="disclaimer-text"
        style={{
          fontSize: "16px",
          color: "#c0c0c0",
          margin: "0",
          textAlign: "center",
          lineHeight: "1.6",
          letterSpacing: "0.5px",
        }}
      >
        ⚠️ <strong>Disclaimer:</strong> Este site é desenvolvido para{" "}
        <strong>fins educacionais</strong> e serve como um espaço para testar e
        aprimorar meus conhecimentos em desenvolvimento web.
      </p>
    </div>
  );
}
