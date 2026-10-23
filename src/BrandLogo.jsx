import React from "react";
import "./brand.css";

// Display the exact supplied artwork through a circular viewport.
// The original screenshot is retained in public/brand/logo-source.png.
export default function BrandLogo({ className = "", size = 52 }) {
  return (
    <span
      className={`brand-logo ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="One Stop By N"
    >
      <img
        src="/brand/logo-source.png"
        alt=""
        width="736"
        height="534"
        draggable="false"
      />
    </span>
  );
}
