import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#10101d",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          border: "2px solid #6366f1",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
          <path
            d="M10 25V12L18 20L26 12V25"
            stroke="#818cf8"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="12" r="2.5" fill="#ffffff" />
          <circle
            cx="18"
            cy="20"
            r="2.7"
            fill="#6366f1"
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          <circle cx="26" cy="12" r="2.5" fill="#ffffff" />
          <circle cx="10" cy="25" r="2.2" fill="#818cf8" />
          <circle cx="26" cy="25" r="2.2" fill="#818cf8" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
