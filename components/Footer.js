import { SITE_CONFIG } from "../config/site";

export default function Footer() {
  return (
    <div
      className="footer-text"
      style={{
        position: "absolute",
        bottom: "20px",
        width: "100%",
        textAlign: "center",
        color: "#707070",
        fontSize: "12px",
        letterSpacing: "0.5px",
        zIndex: 2,
        padding: "0 20px",
      }}
    >
      <p style={{ margin: "0 0 5px 0" }}>
        © {SITE_CONFIG.year} {SITE_CONFIG.author}
      </p>
      <p style={{ margin: "0", opacity: "0.8" }}>
        Licenciado sob{" "}
        <a
          href={SITE_CONFIG.license.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#909090",
            textDecoration: "none",
            borderBottom: "1px solid #707070",
          }}
        >
          {SITE_CONFIG.license.name}
        </a>
      </p>
    </div>
  );
}
