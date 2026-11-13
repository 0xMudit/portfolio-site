import { ImageResponse } from "next/og";

export const alt = "Muditya Raghav — Backend Developer (Python, Go, FastAPI)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Static social card, generated at build time. Matches the site's light palette. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf9f6",
          padding: "76px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#9a492d",
            }}
          >
            Backend Developer · Python · Go · FastAPI
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 82,
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: "#101013",
            }}
          >
            Muditya Raghav
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 26,
              maxWidth: 900,
              fontSize: 34,
              lineHeight: 1.35,
              color: "#52525b",
            }}
          >
            Backend engineering. Built with a testing mindset.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #e6e6e9",
            paddingTop: 26,
            fontSize: 24,
            color: "#6b6b75",
          }}
        >
          Python · Go · FastAPI · PostgreSQL · Redis · Docker
        </div>
      </div>
    ),
    size,
  );
}
