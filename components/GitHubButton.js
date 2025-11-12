import { GitHubIcon } from "./icons/GitHubIcon";
import { SITE_CONFIG } from "../config/site";

export default function GitHubButton() {
  return (
    <a
      href={SITE_CONFIG.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="github-button"
      style={{
        marginTop: "30px",
        padding: "12px 24px",
        background: "rgba(40, 40, 40, 0.8)",
        border: "none",
        boxShadow: `
          0 0 0 2px #606060,
          0 0 0 4px rgba(40, 40, 40, 0.8),
          0 4px 16px rgba(0, 0, 0, 0.6),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `,
        imageRendering: "pixelated",
        color: "#e0e0e0",
        fontSize: "16px",
        fontWeight: "bold",
        textDecoration: "none",
        letterSpacing: "1px",
        textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(60, 60, 60, 0.9)";
        e.currentTarget.style.boxShadow = `
          0 0 0 2px #808080,
          0 0 0 4px rgba(60, 60, 60, 0.9),
          0 6px 24px rgba(0, 0, 0, 0.8),
          inset 0 1px 0 rgba(255, 255, 255, 0.2)
        `;
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(40, 40, 40, 0.8)";
        e.currentTarget.style.boxShadow = `
          0 0 0 2px #606060,
          0 0 0 4px rgba(40, 40, 40, 0.8),
          0 4px 16px rgba(0, 0, 0, 0.6),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `;
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <GitHubIcon />[ GITHUB ]
    </a>
  );
}
