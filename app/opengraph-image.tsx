import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Harsh Bhogayata · v2.3.1";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f6f5f0",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        {/* Top — label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontFamily: "monospace", fontSize: "13px", color: "#e85d04", letterSpacing: "0.2em" }}>
            CHANGELOG.MD — V2.3.1
          </span>
        </div>

        {/* Middle — name */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "96px", fontWeight: "400", color: "#1c1917", lineHeight: 0.95, fontStyle: "italic" }}>
            Harsh Bhogayata
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "8px" }}>
            <span style={{ fontFamily: "monospace", fontSize: "14px", color: "#1c1917", fontWeight: "600" }}>
              Software Engineer
            </span>
            <span style={{ color: "#e5e0d8" }}>·</span>
            <span style={{ fontFamily: "monospace", fontSize: "14px", color: "#6b6560" }}>
              Security-aware. Full-stack. Ships with intent.
            </span>
          </div>
        </div>

        {/* Bottom — meta row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ fontFamily: "monospace", fontSize: "13px", color: "#e85d04" }}>v2.3.1</span>
            <span style={{ color: "#e5e0d8" }}>·</span>
            <span style={{ fontFamily: "monospace", fontSize: "13px", color: "#6b6560" }}>stable</span>
            <span style={{ color: "#e5e0d8" }}>·</span>
            <span style={{ fontFamily: "monospace", fontSize: "13px", color: "#6b6560" }}>India</span>
          </div>
          <div
            style={{
              backgroundColor: "#e85d04",
              color: "white",
              fontFamily: "monospace",
              fontSize: "13px",
              padding: "6px 14px",
              letterSpacing: "0.1em",
            }}
          >
            HB
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
