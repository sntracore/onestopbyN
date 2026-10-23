import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Rack from "./Rack";
import "./rack.css";
const Shop = lazy(() => import("./Shop"));
const isRack = location.pathname === "/";
createRoot(document.getElementById("root")).render(
  isRack ? (
    <Rack />
  ) : (
    <Suspense fallback={<div style={{ padding: 40 }}>Loading One Stop By N…</div>}>
      <Shop />
    </Suspense>
  ),
);
