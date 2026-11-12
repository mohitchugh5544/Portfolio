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
          fontSize: 15,
          background: "#07070a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          borderRadius: 8,
          border: "2px solid #6366f1",
          fontWeight: 700,
        }}
      >
        MC
      </div>
    ),
    {
      ...size,
    }
  );
}
