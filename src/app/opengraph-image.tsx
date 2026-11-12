import { ImageResponse } from "next/og";

export const alt = "Mohit Chugh — AI & ML Engineer · Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#07070a",
          padding: "72px 80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              backgroundColor: "#34d399",
            }}
          />
          <span
            style={{
              fontSize: "22px",
              color: "#6ee7b7",
              fontWeight: 600,
            }}
          >
            Available for Internships & AI / SDE Roles · Class of 2028
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Mohit Chugh
          </div>
          <div
            style={{
              fontSize: "34px",
              fontWeight: 600,
              color: "#818cf8",
            }}
          >
            AI & ML Engineer · Full-Stack Developer
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#a1a1aa",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            3rd Year B.Tech CSE (AI & ML Specialization) · Creator of Jarvis,
            Fitness+ Vision & Riya Dresses
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "28px",
            fontSize: "22px",
            color: "#a1a1aa",
          }}
        >
          <span>github.com/mohitchugh5544</span>
          <span>mohitchughmmc@gmail.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
