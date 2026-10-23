// Interactive rack reconstructed from the public reference.
// Garment measurements preserve hook positions, physical swing, and dye transitions.
import * as r from "react/jsx-runtime";
import BrandLogo from "./BrandLogo";
import * as s from "react";
import {
  motion as motion,
  useMotionValue as useMotionValue,
  useMotionTemplate as useMotionTemplate,
  useReducedMotion as useReducedMotion,
  useTransform as useTransform,
  useSpring as useSpring,
  animate as animate,
} from "motion/react";
const localImageComponents = {
  Image: function LocalImage({ preload, ...props }) {
    if (props.src === "/snug-wrld-logo.png")
      return r.jsx(BrandLogo, { className: props.className, size: 52 });
    return r.jsx("img", {
      ...props,
      decoding: "async",
      loading: preload ? "eager" : props.loading,
    });
  },
};
const imageHelpers = {
  getImageProps: ({ src, width, height, alt }) => ({
    props: { src, width, height, alt },
  }),
};
let navTextClass =
    "text-[12px] font-medium uppercase tracking-[0.08em] text-ink",
  fadeClass = "transition-opacity duration-300";
function RackHeader({ focus: t = !1, onClose: e }) {
  let i = t ? "pointer-events-none opacity-0" : "opacity-100";
  return (0, r.jsxs)("header", {
    className:
      "absolute inset-x-0 top-0 z-50 grid h-[10.4vh] min-h-[64px] grid-cols-[1fr_auto_1fr] items-center px-[2.2vw]",
    children: [
      (0, r.jsx)("a", {
        href: "/pages/about",
        className: `${navTextClass} ${fadeClass} ${i} justify-self-start`,
        tabIndex: t ? -1 : void 0,
        children: "About",
      }),
      (0, r.jsx)(localImageComponents.Image, {
        src: "/snug-wrld-logo.png",
        width: 134,
        height: 72,
        alt: "One Stop By N",
        preload: !0,
        className: `${fadeClass} ${i}`,
        style: { height: 36, width: "auto" },
      }),
      (0, r.jsxs)("div", {
        className: "relative justify-self-end",
        children: [
          (0, r.jsx)("a", {
            href: "/pages/contact",
            className: `${navTextClass} ${fadeClass} ${i} block`,
            tabIndex: t ? -1 : void 0,
            children: "Contact",
          }),
          (0, r.jsxs)("button", {
            type: "button",
            onClick: e,
            className: `${navTextClass} ${fadeClass} absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-[10px] whitespace-nowrap ${t ? "opacity-100" : "pointer-events-none opacity-0"}`,
            tabIndex: t ? void 0 : -1,
            "aria-hidden": !t,
            "aria-label": "Close detail view",
            style: { minHeight: 48, minWidth: 48, justifyContent: "flex-end" },
            children: [
              "Close ",
              (0, r.jsx)("span", {
                "aria-hidden": "true",
                className: "text-[13px] font-semibold",
                children: "✕",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Marquee() {
  let t = "IT'S US, NEVER THEM  •  NEW DROPS  •  LAGOS  •  ".repeat(8);
  return (0, r.jsx)("div", {
    className:
      "absolute inset-x-0 bottom-0 z-30 flex h-[4.3vh] min-h-[32px] items-center overflow-hidden bg-brand text-[14px] font-bold uppercase italic tracking-[0.06em] text-brand-ink",
    "aria-label": "It's us, never them. New drops. Lagos.",
    children: (0, r.jsxs)("div", {
      className: "marquee-track",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("span", { children: t }),
        (0, r.jsx)("span", { children: t }),
      ],
    }),
  });
}
function ShopLink({ hidden: t = !1 }) {
  return (0, r.jsx)("a", {
    href: "/shop",
    target: "_self",
    rel: "noopener",
    tabIndex: t ? -1 : void 0,
    className: `absolute left-1/2 top-[90%] z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink px-[19px] py-[5px] text-[12px] font-medium uppercase tracking-[0.04em] text-ink transition-opacity duration-300 ${t ? "pointer-events-none opacity-0" : "opacity-100"}`,
    children: "See Availability",
  });
}
function Rail({ className: t, style: e }) {
  return (0, r.jsxs)("div", {
    className: `rail ${t ?? ""}`,
    style: e,
    "aria-hidden": "true",
    children: [
      (0, r.jsx)("div", { className: "rail-tube" }),
      (0, r.jsxs)("div", {
        className: "rail-end l",
        children: [
          (0, r.jsx)("div", { className: "rail-plate" }),
          (0, r.jsx)("div", { className: "rail-cap" }),
        ],
      }),
      (0, r.jsxs)("div", {
        className: "rail-end r",
        children: [
          (0, r.jsx)("div", { className: "rail-plate" }),
          (0, r.jsx)("div", { className: "rail-cap" }),
        ],
      }),
    ],
  });
}
let garmentMeasurements = {
    "/products/crimson-memory-back.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 540,
      hookApexY: 18,
      loopTopY: 18,
      loopCenterX: 542,
      loopInnerTopY: 24,
      loopInnerBottomY: 53,
      neckY: 116,
      garmentTopY: 18,
      garmentBottomY: 1359,
      shoulderY: 548,
      shoulderX0: 162,
      shoulderX1: 909,
      garmentX0: 45,
      garmentX1: 1040,
    },
    "/products/crimson-memory-front.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 538,
      hookApexY: 17,
      loopTopY: 17,
      loopCenterX: 535,
      loopInnerTopY: 24,
      loopInnerBottomY: 51,
      neckY: 115,
      garmentTopY: 17,
      garmentBottomY: 1317,
      shoulderY: 535,
      shoulderX0: 187,
      shoulderX1: 890,
      garmentX0: 107,
      garmentX1: 969,
    },
    "/products/crimson-memory-side.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 532,
      hookApexY: 15,
      loopTopY: 15,
      loopCenterX: 531,
      loopInnerTopY: 22,
      loopInnerBottomY: 50,
      neckY: 107,
      garmentTopY: 15,
      garmentBottomY: 1345,
      shoulderY: 539,
      shoulderX0: 424,
      shoulderX1: 657,
      garmentX0: 388,
      garmentX1: 694,
    },
    "/products/distressed-logo-t-back.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 552,
      hookApexY: 35,
      loopTopY: 35,
      loopCenterX: 556,
      loopInnerTopY: 41,
      loopInnerBottomY: 79,
      neckY: 153,
      garmentTopY: 35,
      garmentBottomY: 1328,
      shoulderY: 563,
      shoulderX0: 92,
      shoulderX1: 994,
      garmentX0: 45,
      garmentX1: 1041,
    },
    "/products/distressed-logo-t-front.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 541,
      hookApexY: 29,
      loopTopY: 29,
      loopCenterX: 536,
      loopInnerTopY: 38,
      loopInnerBottomY: 75,
      neckY: 146,
      garmentTopY: 29,
      garmentBottomY: 1317,
      shoulderY: 554,
      shoulderX0: 106,
      shoulderX1: 978,
      garmentX0: 60,
      garmentX1: 1024,
    },
    "/products/distressed-logo-t-side.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 532,
      hookApexY: 26,
      loopTopY: 26,
      loopCenterX: 529,
      loopInnerTopY: 35,
      loopInnerBottomY: 66,
      neckY: 131,
      garmentTopY: 26,
      garmentBottomY: 1333,
      shoulderY: 551,
      shoulderX0: 447,
      shoulderX1: 648,
      garmentX0: 405,
      garmentX1: 687,
    },
    "/products/its-us-tee-black-back.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 542,
      hookApexY: 25,
      loopTopY: 25,
      loopCenterX: 544,
      loopInnerTopY: 30,
      loopInnerBottomY: 66,
      neckY: 150,
      garmentTopY: 25,
      garmentBottomY: 1328,
      shoulderY: 562,
      shoulderX0: 120,
      shoulderX1: 961,
      garmentX0: 51,
      garmentX1: 1033,
    },
    "/products/its-us-tee-black-front.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 542,
      hookApexY: 23,
      loopTopY: 23,
      loopCenterX: 539,
      loopInnerTopY: 31,
      loopInnerBottomY: 66,
      neckY: 150,
      garmentTopY: 23,
      garmentBottomY: 1332,
      shoulderY: 562,
      shoulderX0: 123,
      shoulderX1: 956,
      garmentX0: 55,
      garmentX1: 1029,
    },
    "/products/its-us-tee-black-side.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 543,
      hookApexY: 27,
      loopTopY: 27,
      loopCenterX: 541,
      loopInnerTopY: 33,
      loopInnerBottomY: 68,
      neckY: 141,
      garmentTopY: 27,
      garmentBottomY: 1376,
      shoulderY: 567,
      shoulderX0: 443,
      shoulderX1: 659,
      garmentX0: 383,
      garmentX1: 726,
    },
    "/products/its-us-tee-bubblegum-back.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 540,
      hookApexY: 0,
      loopTopY: 0,
      loopCenterX: 537,
      loopInnerTopY: 23,
      loopInnerBottomY: 55,
      neckY: 133,
      garmentTopY: 0,
      garmentBottomY: 1344,
      shoulderY: 555,
      shoulderX0: 97,
      shoulderX1: 989,
      garmentX0: 67,
      garmentX1: 1019,
    },
    "/products/its-us-tee-bubblegum-front.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 539,
      hookApexY: 0,
      loopTopY: 0,
      loopCenterX: 537,
      loopInnerTopY: 24,
      loopInnerBottomY: 55,
      neckY: 132,
      garmentTopY: 0,
      garmentBottomY: 1346,
      shoulderY: 556,
      shoulderX0: 99,
      shoulderX1: 986,
      garmentX0: 68,
      garmentX1: 1018,
    },
    "/products/its-us-tee-bubblegum-side.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 537,
      hookApexY: 10,
      loopTopY: 10,
      loopCenterX: 535,
      loopInnerTopY: 24,
      loopInnerBottomY: 54,
      neckY: 127,
      garmentTopY: 10,
      garmentBottomY: 1369,
      shoulderY: 555,
      shoulderX0: 445,
      shoulderX1: 645,
      garmentX0: 405,
      garmentX1: 684,
    },
    "/products/its-us-tee-yellow-back.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 537,
      hookApexY: 24,
      loopTopY: 24,
      loopCenterX: 542,
      loopInnerTopY: 31,
      loopInnerBottomY: 72,
      neckY: 145,
      garmentTopY: 24,
      garmentBottomY: 1328,
      shoulderY: 559,
      shoulderX0: 112,
      shoulderX1: 974,
      garmentX0: 59,
      garmentX1: 1026,
    },
    "/products/its-us-tee-yellow-front.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 540,
      hookApexY: 23,
      loopTopY: 23,
      loopCenterX: 537,
      loopInnerTopY: 30,
      loopInnerBottomY: 64,
      neckY: 140,
      garmentTopY: 23,
      garmentBottomY: 1331,
      shoulderY: 556,
      shoulderX0: 112,
      shoulderX1: 975,
      garmentX0: 61,
      garmentX1: 1027,
    },
    "/products/its-us-tee-yellow-side.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 538,
      hookApexY: 28,
      loopTopY: 28,
      loopCenterX: 536,
      loopInnerTopY: 34,
      loopInnerBottomY: 66,
      neckY: 139,
      garmentTopY: 28,
      garmentBottomY: 1367,
      shoulderY: 565,
      shoulderX0: 449,
      shoulderX1: 643,
      garmentX0: 407,
      garmentX1: 685,
    },
    "/products/jersey-blue-back.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 538,
      hookApexY: 18,
      loopTopY: 18,
      loopCenterX: 536,
      loopInnerTopY: 25,
      loopInnerBottomY: 62,
      neckY: 143,
      garmentTopY: 18,
      garmentBottomY: 1368,
      shoulderY: 571,
      shoulderX0: 129,
      shoulderX1: 959,
      garmentX0: 67,
      garmentX1: 1023,
    },
    "/products/jersey-blue-front.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 539,
      hookApexY: 17,
      loopTopY: 17,
      loopCenterX: 537,
      loopInnerTopY: 25,
      loopInnerBottomY: 58,
      neckY: 140,
      garmentTopY: 17,
      garmentBottomY: 1367,
      shoulderY: 568,
      shoulderX0: 148,
      shoulderX1: 941,
      garmentX0: 87,
      garmentX1: 1002,
    },
    "/products/jersey-blue-side.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 538,
      hookApexY: 16,
      loopTopY: 16,
      loopCenterX: 535,
      loopInnerTopY: 25,
      loopInnerBottomY: 53,
      neckY: 130,
      garmentTopY: 16,
      garmentBottomY: 1388,
      shoulderY: 562,
      shoulderX0: 413,
      shoulderX1: 658,
      garmentX0: 376,
      garmentX1: 701,
    },
    "/products/jersey-yellow-back.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 539,
      hookApexY: 36,
      loopTopY: 36,
      loopCenterX: 538,
      loopInnerTopY: 41,
      loopInnerBottomY: 71,
      neckY: 148,
      garmentTopY: 36,
      garmentBottomY: 1328,
      shoulderY: 560,
      shoulderX0: 135,
      shoulderX1: 947,
      garmentX0: 92,
      garmentX1: 991,
    },
    "/products/jersey-yellow-front.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 539,
      hookApexY: 36,
      loopTopY: 36,
      loopCenterX: 538,
      loopInnerTopY: 44,
      loopInnerBottomY: 73,
      neckY: 150,
      garmentTopY: 36,
      garmentBottomY: 1326,
      shoulderY: 560,
      shoulderX0: 137,
      shoulderX1: 947,
      garmentX0: 94,
      garmentX1: 991,
    },
    "/products/jersey-yellow-side.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 528,
      hookApexY: 38,
      loopTopY: 38,
      loopCenterX: 528,
      loopInnerTopY: 46,
      loopInnerBottomY: 73,
      neckY: 142,
      garmentTopY: 38,
      garmentBottomY: 1332,
      shoulderY: 550,
      shoulderX0: 442,
      shoulderX1: 653,
      garmentX0: 397,
      garmentX1: 699,
    },
    "/products/silicone-tee-back.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 541,
      hookApexY: 30,
      loopTopY: 30,
      loopCenterX: 536,
      loopInnerTopY: 35,
      loopInnerBottomY: 70,
      neckY: 132,
      garmentTopY: 30,
      garmentBottomY: 1348,
      shoulderY: 556,
      shoulderX0: 130,
      shoulderX1: 956,
      garmentX0: 79,
      garmentX1: 1006,
    },
    "/products/silicone-tee-front.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 541,
      hookApexY: 34,
      loopTopY: 34,
      loopCenterX: 536,
      loopInnerTopY: 40,
      loopInnerBottomY: 74,
      neckY: 132,
      garmentTopY: 34,
      garmentBottomY: 1346,
      shoulderY: 556,
      shoulderX0: 130,
      shoulderX1: 954,
      garmentX0: 80,
      garmentX1: 1004,
    },
    "/products/silicone-tee-side.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 545,
      hookApexY: 33,
      loopTopY: 33,
      loopCenterX: 539,
      loopInnerTopY: 41,
      loopInnerBottomY: 74,
      neckY: 127,
      garmentTopY: 33,
      garmentBottomY: 1356,
      shoulderY: 531,
      shoulderX0: 423,
      shoulderX1: 654,
      garmentX0: 383,
      garmentX1: 705,
    },
    "/products/tank-black-back.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 545,
      hookApexY: 15,
      loopTopY: 15,
      loopCenterX: 545,
      loopInnerTopY: 22,
      loopInnerBottomY: 62,
      neckY: 130,
      garmentTopY: 15,
      garmentBottomY: 1347,
      shoulderY: 354,
      shoulderX0: 179,
      shoulderX1: 910,
      garmentX0: 147,
      garmentX1: 946,
    },
    "/products/tank-black-front.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 543,
      hookApexY: 18,
      loopTopY: 18,
      loopCenterX: 540,
      loopInnerTopY: 27,
      loopInnerBottomY: 71,
      neckY: 131,
      garmentTopY: 18,
      garmentBottomY: 1355,
      shoulderY: 355,
      shoulderX0: 179,
      shoulderX1: 906,
      garmentX0: 153,
      garmentX1: 934,
    },
    "/products/tank-black-side.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 552,
      hookApexY: 18,
      loopTopY: 18,
      loopCenterX: 552,
      loopInnerTopY: 27,
      loopInnerBottomY: 67,
      neckY: 116,
      garmentTopY: 18,
      garmentBottomY: 1402,
      shoulderY: 564,
      shoulderX0: 435,
      shoulderX1: 643,
      garmentX0: 383,
      garmentX1: 691,
    },
    "/products/tank-sand-back.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 539,
      hookApexY: 19,
      loopTopY: 19,
      loopCenterX: 535,
      loopInnerTopY: 26,
      loopInnerBottomY: 58,
      neckY: 134,
      garmentTopY: 19,
      garmentBottomY: 1375,
      shoulderY: 358,
      shoulderX0: 180,
      shoulderX1: 904,
      garmentX0: 172,
      garmentX1: 914,
    },
    "/products/tank-sand-front.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 540,
      hookApexY: 16,
      loopTopY: 16,
      loopCenterX: 536,
      loopInnerTopY: 28,
      loopInnerBottomY: 61,
      neckY: 136,
      garmentTopY: 16,
      garmentBottomY: 1374,
      shoulderY: 356,
      shoulderX0: 181,
      shoulderX1: 904,
      garmentX0: 178,
      garmentX1: 908,
    },
    "/products/tank-sand-side.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 539,
      hookApexY: 22,
      loopTopY: 22,
      loopCenterX: 536,
      loopInnerTopY: 30,
      loopInnerBottomY: 59,
      neckY: 130,
      garmentTopY: 22,
      garmentBottomY: 1382,
      shoulderY: 562,
      shoulderX0: 447,
      shoulderX1: 642,
      garmentX0: 403,
      garmentX1: 684,
    },
    "/products/varsity-back.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 540,
      hookApexY: 50,
      loopTopY: 50,
      loopCenterX: 538,
      loopInnerTopY: 57,
      loopInnerBottomY: 91,
      neckY: 163,
      garmentTopY: 50,
      garmentBottomY: 1336,
      shoulderY: 571,
      shoulderX0: 140,
      shoulderX1: 944,
      garmentX0: 49,
      garmentX1: 1042,
    },
    "/products/varsity-front.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 540,
      hookApexY: 49,
      loopTopY: 49,
      loopCenterX: 538,
      loopInnerTopY: 59,
      loopInnerBottomY: 89,
      neckY: 153,
      garmentTopY: 49,
      garmentBottomY: 1284,
      shoulderY: 547,
      shoulderX0: 165,
      shoulderX1: 919,
      garmentX0: 82,
      garmentX1: 1009,
    },
    "/products/varsity-side.webp": {
      width: 1086,
      height: 1448,
      hookApexX: 535,
      hookApexY: 27,
      loopTopY: 27,
      loopCenterX: 534,
      loopInnerTopY: 36,
      loopInnerBottomY: 62,
      neckY: 122,
      garmentTopY: 27,
      garmentBottomY: 1339,
      shoulderY: 546,
      shoulderX0: 406,
      shoulderX1: 695,
      garmentX0: 377,
      garmentX1: 719,
    },
  },
  garmentScales = {},
  garmentHeight = (t) =>
    garmentMeasurements[t].garmentBottomY - garmentMeasurements[t].garmentTopY;
function productViews(t) {
  let e = `/products/${t}-back.webp`,
    i = {
      side: `/products/${t}-side.webp`,
      front: `/products/${t}-front.webp`,
      back: e in garmentMeasurements ? e : void 0,
    };
  for (let t of [i.side, i.front, i.back])
    t && (garmentScales[t] = garmentHeight(i.side) / garmentHeight(t));
  return i;
}
let productRoute = "/products/",
  singleColourProduct = (t, e, i, n) => ({
    slug: t,
    name: e,
    colour: i,
    ...productViews(t),
    url: n,
  });
function multiColourProduct(t, e, i, n) {
  let r = n.map(([t, e, i]) => ({ label: t, hex: e, ...productViews(i) }));
  var s = r;
  for (let t of ["front", "back"]) {
    let e = s[0][t];
    if (!e) continue;
    let i = garmentMeasurements[e];
    for (let n of s.slice(1)) {
      let r = n[t];
      if (!r) continue;
      let s = garmentMeasurements[r];
      viewAlignments[r] = {
        ref: e,
        sx: (i.shoulderX1 - i.shoulderX0) / (s.shoulderX1 - s.shoulderX0),
        sy:
          (i.garmentBottomY - hookCenterY(i)) /
          (s.garmentBottomY - hookCenterY(s)),
      };
    }
  }
  let { side: o, front: a, back: l } = r[0];
  return {
    slug: t,
    name: e,
    side: o,
    front: a,
    back: l,
    colourways: r,
    url: i,
  };
}
let viewAlignments = {},
  hookCenterY = (t) => (t.loopInnerTopY + t.loopInnerBottomY) / 2,
  rackProducts = [
    singleColourProduct(
      "crimson-memory",
      "Crimson Memory LS Shirt",
      "White",
      `${productRoute}crimson-memory-shirt`,
    ),
    multiColourProduct(
      "its-us-tee",
      "It's Us Never Them Tee",
      `${productRoute}its-us-never-them-tee-pink`,
      [
        ["Black", "#1e1e1e", "its-us-tee-black"],
        ["Pink", "#f6b1b4", "its-us-tee-bubblegum"],
        ["Yellow", "#f8dd2f", "its-us-tee-yellow"],
      ],
    ),
    multiColourProduct(
      "tank",
      "Distressed Painted Logo Tank Top",
      `${productRoute}distressed-sleeveless-vintage-light-beige`,
      [
        ["Black", "#2d2d2c", "tank-black"],
        ["Sand", "#b29e8b", "tank-sand"],
      ],
    ),
    singleColourProduct(
      "varsity",
      "Snug Wrld Logo Varsity Jacket",
      "Black",
      `${productRoute}snug-wrld-varsity-jackets`,
    ),
    singleColourProduct(
      "distressed-logo-t",
      "Distressed Logo Print T-Shirt",
      "Blue",
      `${productRoute}distressed-logo-print-t-shirt`,
    ),
    multiColourProduct(
      "jersey",
      "Snug Football Jersey",
      `${productRoute}snug-jersey-blue`,
      [
        ["Yellow", "#e3ca1e", "jersey-yellow"],
        ["Blue", "#0842a9", "jersey-blue"],
      ],
    ),
    singleColourProduct(
      "silicone-tee",
      "Silicone Logo Print T-Shirt",
      "White",
      `${productRoute}silicone-logo-tee`,
    ),
  ],
  imageWidthCSS = (t) => `(var(--iw) * ${garmentScales[t] ?? 1})`,
  imageLengthCSS = (t, e, i) => `${imageWidthCSS(t)} * ${i / e.width}`;
function Garment({
  layers: t,
  turn: e,
  swing: i,
  bodyScale: n,
  part: s = "hanger",
}) {
  return (0, r.jsx)(motion.div, {
    className: "garment",
    style: { rotateZ: i },
    children: (0, r.jsx)(motion.div, {
      className: "garment-card",
      style: { rotateY: e },
      children: t.map(({ src: t, opacity: e, sizes: i, preload: o }) => {
        let a = garmentMeasurements[t],
          l = (a.loopInnerTopY + a.loopInnerBottomY) / 2,
          u = {
            left: `calc(-1 * ${imageWidthCSS(t)} * ${a.loopCenterX / a.width})`,
            top: `calc(var(--rod) / 2 - ${imageLengthCSS(t, a, l)})`,
            width: `calc(${imageWidthCSS(t)})`,
            aspectRatio: `${a.width} / ${a.height}`,
          },
          h = (0, r.jsx)(localImageComponents.Image, {
            src: t,
            width: a.width,
            height: a.height,
            sizes: i,
            alt: "",
            preload: o,
            loading: o ? void 0 : "eager",
            draggable: !1,
          });
        if ("crest" === s) {
          let i = `calc(${imageLengthCSS(t, a, l)} - var(--rod) / 2)`;
          return (0, r.jsx)(
            motion.div,
            {
              className: "garment-layer",
              style: {
                ...u,
                opacity: e,
                clipPath: `inset(0 0 calc(100% - ${i}) 0)`,
              },
              children: h,
            },
            t,
          );
        }
        let d = `${((a.neckY / a.height) * 100).toFixed(3)}%`;
        return (0, r.jsxs)(
          motion.div,
          {
            className: "garment-layer",
            style: { ...u, opacity: e },
            children: [
              (0, r.jsx)("div", {
                className: "garment-piece",
                style: { clipPath: `inset(0 0 calc(100% - ${d}) 0)` },
                children: h,
              }),
              (0, r.jsx)(motion.div, {
                className: "garment-piece",
                style: {
                  clipPath: `inset(${d} 0 0 0)`,
                  scale: n,
                  originX: a.loopCenterX / a.width,
                  originY: a.neckY / a.height,
                },
                children: h,
              }),
            ],
          },
          t,
        );
      }),
    }),
  });
}
function useGarmentPhysics(t, e, i) {
  let n = (0, s.useRef)(0),
    r = (0, s.useRef)(0),
    o = (0, s.useRef)(0),
    a = (0, s.useCallback)(() => {
      (cancelAnimationFrame(n.current), r.current++, (o.current = 0));
    }, []),
    l = (0, s.useCallback)(
      (s, { kick: a = 0, eps: l = 0, swingRest: u = 0, onDone: h } = {}) => {
        cancelAnimationFrame(n.current);
        let d = ++r.current;
        if (i) {
          (t.set(s), e.set(u), (o.current = 0), h?.());
          return;
        }
        let c = t.get(),
          p = e.get(),
          m = o.current,
          f = a,
          g = performance.now(),
          y = h,
          v = (i) => {
            let a = Math.min(0.032, (i - g) / 1e3);
            if (
              ((g = i),
              (m += ((s - c) * 120 - 14 * m) * a),
              (c += m * a),
              (f += ((u - p) * 90 - 5 * f + 0.02 * m) * a),
              (p += f * a),
              (o.current = m),
              t.set(c),
              e.set(p),
              l && y && Math.abs(s - c) < l)
            ) {
              let t = y;
              if (((y = void 0), t(), r.current !== d)) return;
            }
            if (
              0.05 > Math.abs(s - c) &&
              0.5 > Math.abs(m) &&
              0.03 > Math.abs(p - u) &&
              0.05 > Math.abs(f)
            ) {
              (t.set(s), e.set(u), (o.current = 0), y?.());
              return;
            }
            n.current = requestAnimationFrame(v);
          };
        n.current = requestAnimationFrame(v);
      },
      [t, e, i],
    );
  return (
    (0, s.useEffect)(() => () => cancelAnimationFrame(n.current), []),
    { springTo: l, stop: a }
  );
}
function RackItem({
  product: t,
  index: e,
  count: i,
  hovered: n,
  shift: o,
  zIndex: a,
  pushDir: l,
  hidden: u,
}) {
  let h = useReducedMotion(),
    d = useMotionValue(0),
    c = useMotionValue(0),
    { springTo: p } = useGarmentPhysics(d, c, h),
    m = useTransform(d, (t) => (t <= 90 ? t : t - 180)),
    f = useTransform(d, (t) => +(t <= 90)),
    g = useTransform(d, (t) => (t <= 90 ? 0 : 1)),
    y = useSpring(1, { stiffness: 210, damping: 20 }),
    v = useSpring(0, { stiffness: 170, damping: 22 }),
    x = useMotionTemplate`calc(var(--iw) * ${v}) 0`,
    w = (0, s.useRef)(!0);
  ((0, s.useEffect)(() => {
    if (w.current) {
      w.current = !1;
      return;
    }
    let t = -(l.current ?? 1) * (n ? 26 : 16);
    (p(180 * !!n, { kick: t }), h ? y.jump(n ? 1.12 : 1) : y.set(n ? 1.12 : 1));
  }, [n, h, p, y, l]),
    (0, s.useEffect)(() => {
      h ? v.jump(o) : v.set(o);
    }, [o, h, v]));
  let b = [
    { src: t.side, opacity: f, sizes: "36vh", preload: !0 },
    { src: t.front, opacity: g, sizes: "41vh" },
  ];
  return (0, r.jsxs)("div", {
    className: "rack-item",
    style: { "--i": e - (i - 1) / 2, visibility: u ? "hidden" : void 0 },
    "aria-label": t.name,
    children: [
      (0, r.jsx)(motion.div, {
        className: "rack-layer rack-garment",
        style: { translate: x, zIndex: 3 + a },
        children: (0, r.jsx)(Garment, {
          turn: m,
          swing: c,
          bodyScale: y,
          layers: b,
        }),
      }),
      (0, r.jsx)(motion.div, {
        className: "rack-layer",
        style: { translate: x, zIndex: 205 },
        children: (0, r.jsx)("div", { className: "hook-contact-line" }),
      }),
      (0, r.jsx)(motion.div, {
        className: "rack-layer",
        style: { translate: x, zIndex: 210 },
        children: (0, r.jsx)(Garment, {
          turn: m,
          swing: c,
          layers: b,
          part: "crest",
        }),
      }),
    ],
  });
}
let rackHem = Math.max(
  ...rackProducts.flatMap((t) =>
    [t.side, t.front].map((e) => {
      let i = garmentMeasurements[e],
        n = (garmentScales[e] ?? 1) / i.width,
        r = (i.loopInnerTopY + i.loopInnerBottomY) / 2,
        s = e === t.front ? 1.12 : 1;
      return (i.neckY - r + (i.garmentBottomY - i.neckY) * s) * n;
    }),
  ),
);
function getRackOrigin(t, e = !1) {
  let i = document.querySelector(".rack"),
    n = i?.querySelectorAll(".rack-item")[t];
  if (!i || !n) return null;
  let r = n.getBoundingClientRect(),
    s = getComputedStyle(i),
    o = parseFloat(getComputedStyle(i.querySelector(".rack-rail")).height) || 0;
  return {
    x: r.left,
    y: r.top,
    iw: parseFloat(s.getPropertyValue("--iw-px")) || 0,
    rod: o,
    hovered: e,
  };
}
function ClothingRack({ onSelect: t, hiddenIndex: e = null, paused: i = !1 }) {
  let n = rackProducts.length,
    o = (n - 1) / 2,
    a = (0, s.useRef)(null),
    [l, u] = (0, s.useState)(null),
    [h, d] = (0, s.useState)(null),
    c = (0, s.useRef)(null),
    p = (0, s.useRef)(1),
    m = (0, s.useCallback)(
      (t, e) => {
        let i = a.current;
        if (!i) return null;
        let r = i.getBoundingClientRect(),
          s = parseFloat(getComputedStyle(i).getPropertyValue("--iw-px")) || 0;
        if (!s) return null;
        let l = 0.33 * s,
          u = r.top + 0.272 * r.height;
        if (e < u - 24 || e > u + 1.3 * s) return null;
        let h = r.left + r.width / 2,
          d = (t) => h + (t - o) * l,
          p = c.current;
        if (null !== p && Math.abs(t - d(p)) < 0.45 * s) return p;
        let m = Math.max(0, Math.min(n - 1, Math.round((t - h) / l + o))),
          f = l / 2 + (0 === m || m === n - 1 ? 0.05 * s : 0);
        return Math.abs(t - d(m)) < f ? m : null;
      },
      [o, n],
    ),
    f = (0, s.useCallback)((t) => {
      t !== c.current &&
        (null !== c.current && d(c.current), (c.current = t), u(t));
    }, []);
  return (
    (0, s.useEffect)(() => {
      i && f(null);
    }, [i, f]),
    (0, r.jsxs)("div", {
      ref: a,
      className: "rack",
      style: { cursor: null === l ? "default" : "pointer" },
      onPointerMove: (t) => {
        "touch" === t.pointerType ||
          i ||
          (t.movementX && (p.current = Math.sign(t.movementX)),
          f(m(t.clientX, t.clientY)));
      },
      onPointerLeave: () => f(null),
      onClick: (e) => {
        if (i || !t) return;
        let n = m(e.clientX, e.clientY),
          r = null === n ? null : getRackOrigin(n, c.current === n);
        null !== n && r && t(n, r);
      },
      children: [
        (0, r.jsx)(Rail, { className: "rack-rail" }),
        rackProducts.map((t, i) =>
          (0, r.jsx)(
            RackItem,
            {
              product: t,
              index: i,
              count: n,
              hovered: l === i,
              shift: (function (t, e) {
                if (null === e || t === e) return 0;
                let i = t - e;
                return 0.25 * Math.sign(i) * Math.pow(0.55, Math.abs(i) - 1);
              })(i, l),
              zIndex: l === i ? 100 : h === i ? 50 : i + 1,
              pushDir: p,
              hidden: e === i,
            },
            t.slug,
          ),
        ),
        rackProducts.map((t, e) => {
          let i;
          return (0, r.jsx)(
            "p",
            {
              className: "rack-caption",
              style: { "--i": e - o, "--hem": rackHem, opacity: +(l === e) },
              "aria-hidden": l !== e,
              children: (i = t.colourways?.[0].label ?? t.colour)
                ? `${t.name} — ${i}`
                : t.name,
            },
            t.slug,
          );
        }),
      ],
    })
  );
}
function dyeWavePath(t, e, i, n, r) {
  let s = i / 1e3,
    o = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
    a = e / 180,
    l = n + 60 * s - (n + 200 * s) * o,
    u = 26 * s * (1 - 0.6 * o),
    h = `M0 ${n + 10} L0 ${l}`;
  for (let t = 0; t <= i; t += 25 * s)
    h += ` L${t.toFixed(1)} ${(l + Math.sin(t / (90 * s) + a) * u + Math.sin(t / (37 * s) - 1.3 * a) * u * 0.35).toFixed(1)}`;
  for (let t of ((h += ` L${i} ${n + 10}Z`), r)) {
    let e = Math.max(0, Math.min(1, (o - t.d) * 3)) * (1 - o) * 1.4;
    if (e <= 0) continue;
    let i = l - t.h * e,
      n = t.w / 2;
    h += ` M${t.x - n} ${l + 20 * s} L${t.x - n} ${i + n} A${n} ${n} 0 0 1 ${t.x + n} ${i + n} L${t.x + n} ${l + 20 * s}Z`;
  }
  return h;
}
function tintBackground(t, e = "#e9e8e4") {
  let i = [1, 3, 5].map((t) => parseInt(e.slice(t, t + 2), 16)),
    n = [1, 3, 5].map((e) => parseInt(t.slice(e, e + 2), 16));
  return `rgb(${i.map((t, e) => Math.round(0.91 * t + 0.09 * n[e])).join(",")})`;
}
let detailImageSizes = "(max-width: 640px) 80vw, 50vh";
function getLocalImageProps(t) {
  let e = garmentMeasurements[t];
  return (0, imageHelpers.getImageProps)({
    src: t,
    width: e.width,
    height: e.height,
    sizes: detailImageSizes,
    alt: "",
  }).props;
}
let imagePromises = new Map(),
  decodedImages = new Map();
function preloadImage(t) {
  let e = imagePromises.get(t);
  if (!e) {
    let i = getLocalImageProps(t),
      n = new window.Image();
    (i.sizes && (n.sizes = i.sizes),
      i.srcSet && (n.srcset = i.srcSet),
      (n.src = i.src),
      (e = n
        .decode()
        .catch(() => {})
        .then(() => {
          let e = n.currentSrc || i.src;
          return (decodedImages.set(t, e), e);
        })),
      imagePromises.set(t, e));
  }
  return e;
}
function preloadFronts() {
  let t = () =>
      rackProducts.forEach((t) =>
        (t.colourways ?? [t]).forEach((t) => preloadImage(t.front)),
      ),
    e = window;
  e.requestIdleCallback
    ? e.requestIdleCallback(t, { timeout: 3e3 })
    : setTimeout(t, 1200);
}
let imageHookCenter = (t) =>
    (garmentMeasurements[t].loopInnerTopY +
      garmentMeasurements[t].loopInnerBottomY) /
    2,
  shoulderCenter = (t) =>
    (garmentMeasurements[t].shoulderX0 + garmentMeasurements[t].shoulderX1) / 2;
function alignedView(t) {
  let e = garmentMeasurements[t],
    i = viewAlignments[t];
  return i
    ? {
        ref: i.ref,
        x: shoulderCenter(i.ref) - shoulderCenter(t) * i.sx,
        y: imageHookCenter(i.ref) - imageHookCenter(t) * i.sy,
        w: e.width * i.sx,
        h: e.height * i.sy,
      }
    : { ref: t, x: 0, y: 0, w: e.width, h: e.height };
}
function viewPosition(t) {
  let e = alignedView(t),
    i = garmentMeasurements[e.ref],
    n = `(var(--fiw) * ${garmentScales[e.ref] ?? 1} / ${i.width})`,
    r = e.x - i.loopCenterX,
    s = e.y - imageHookCenter(e.ref);
  return {
    style: {
      left: `calc(${n} * ${r})`,
      top: `calc(${n} * ${s})`,
      width: `calc(${n} * ${e.w})`,
      height: `calc(${n} * ${e.h})`,
    },
    axisX: -r / e.w,
  };
}
function viewHem(t) {
  let e = alignedView(t),
    i = garmentMeasurements[e.ref],
    n = e.h / garmentMeasurements[t].height;
  return (
    ((e.y +
      garmentMeasurements[t].garmentBottomY * n -
      imageHookCenter(e.ref)) *
      (garmentScales[e.ref] ?? 1)) /
    i.width
  );
}
function viewEdge(t, e = !1) {
  let i = alignedView(t),
    n = garmentMeasurements[i.ref],
    r = garmentMeasurements[t],
    s = i.w / r.width,
    o = (garmentScales[i.ref] ?? 1) / n.width;
  return e
    ? (n.loopCenterX - (i.x + r.garmentX0 * s)) * o
    : (i.x + r.garmentX1 * s - n.loopCenterX) * o;
}
let sinDegrees = (t) => Math.sin((t * Math.PI) / 180);
function FocusFace({
  src: t,
  opacity: e,
  turn: i,
  bodyScale: n,
  back: s,
  preload: o,
}) {
  let a = garmentMeasurements[t],
    { style: l, axisX: u } = viewPosition(t),
    h = `${((a.neckY / a.height) * 100).toFixed(3)}%`,
    d = `url(${getLocalImageProps(t).src})`,
    c = useTransform(
      i,
      (t) =>
        `linear-gradient(${sinDegrees(t) > 0 ? "to right" : "to left"},rgba(0,0,0,0) 15%,rgba(10,8,6,.75))`,
    ),
    p = useTransform(i, (t) => Math.min(1, 1.1 * Math.abs(sinDegrees(t)))),
    m = (0, r.jsx)(localImageComponents.Image, {
      src: t,
      width: a.width,
      height: a.height,
      sizes: detailImageSizes,
      alt: "",
      preload: o,
      loading: "eager",
      draggable: !1,
    });
  return (0, r.jsxs)(motion.div, {
    className: "fg-layer fg-face",
    style: { ...l, opacity: e, rotateY: 180 * !!s, originX: u },
    children: [
      (0, r.jsx)("div", {
        className: "fg-piece",
        style: { clipPath: `inset(0 0 calc(100% - ${h}) 0)` },
        children: m,
      }),
      (0, r.jsx)(motion.div, {
        className: "fg-piece",
        style: {
          clipPath: `inset(${h} 0 0 0)`,
          scale: n,
          originX: a.loopCenterX / a.width,
          originY: a.neckY / a.height,
        },
        children: m,
      }),
      (0, r.jsx)(motion.div, {
        className: "fg-shade",
        style: { background: c, opacity: p, WebkitMaskImage: d, maskImage: d },
      }),
    ],
  });
}
function DyeTransition({ from: t, to: e, back: i, onStart: n, onDone: o }) {
  let a = alignedView(e).ref,
    l = garmentMeasurements[a],
    { style: u, axisX: h } = viewPosition(a),
    d = (0, s.useId)().replace(/:/g, ""),
    c = (0, s.useRef)(null),
    p = (0, s.useRef)(null),
    m = (0, s.useRef)({ onStart: n, onDone: o });
  (0, s.useEffect)(() => {
    m.current = { onStart: n, onDone: o };
  }, [n, o]);
  let [f] = (0, s.useState)(
      () => decodedImages.get(t) ?? getLocalImageProps(t).src,
    ),
    [g, y] = (0, s.useState)(() => decodedImages.get(e) ?? null),
    [v, x] = (0, s.useState)({ from: !1, to: !1 });
  ((0, s.useEffect)(() => {
    if (g) return;
    let t = !1;
    return (
      preloadImage(e).then((e) => {
        t || y(e);
      }),
      () => {
        t = !0;
      }
    );
  }, [e, g]),
    (0, s.useEffect)(() => {
      v.from && v.to && m.current.onStart();
    }, [v.from, v.to]),
    (0, s.useEffect)(() => {
      let t,
        e = 0,
        i =
          ((t = l.width / 1e3),
          [...Array(7)].map((e, i) => ({
            x: (90 + 130 * i + 60 * Math.random()) * t,
            w: (16 + 22 * Math.random()) * t,
            h: (40 + 90 * Math.random()) * t,
            d: 0.25 * Math.random(),
          }))),
        n = (t) => {
          (c.current?.setAttribute("d", t), p.current?.setAttribute("d", t));
        },
        r = performance.now(),
        s = (t) => {
          let o = Math.min(1, (t - r) / 1150);
          (n(dyeWavePath(o, t, l.width, l.height, i)),
            o < 1 ? (e = requestAnimationFrame(s)) : m.current.onDone());
        };
      return (
        n(dyeWavePath(0, r, l.width, l.height, i)),
        (e = requestAnimationFrame(s)),
        () => cancelAnimationFrame(e)
      );
    }, [l.width, l.height]));
  let w = (t) => {
      let e = alignedView(t);
      return { x: e.x, y: e.y, width: e.w, height: e.h };
    },
    b = `M0 ${l.height + 10}Z`;
  return (0, r.jsx)("div", {
    className: "fg-layer fg-face",
    style: {
      ...u,
      transform: i ? "rotateY(180deg)" : void 0,
      transformOrigin: `${100 * h}% 50%`,
    },
    children: (0, r.jsxs)("svg", {
      className: "fg-dye",
      viewBox: `0 0 ${l.width} ${l.height}`,
      "aria-hidden": "true",
      children: [
        (0, r.jsxs)("defs", {
          children: [
            (0, r.jsx)("mask", {
              id: `new-${d}`,
              maskUnits: "userSpaceOnUse",
              x: -l.width,
              y: -l.height,
              width: 3 * l.width,
              height: 3 * l.height,
              children: (0, r.jsx)("path", { ref: c, fill: "#fff", d: b }),
            }),
            (0, r.jsxs)("mask", {
              id: `old-${d}`,
              maskUnits: "userSpaceOnUse",
              x: -l.width,
              y: -l.height,
              width: 3 * l.width,
              height: 3 * l.height,
              children: [
                (0, r.jsx)("rect", {
                  x: -l.width,
                  y: -l.height,
                  width: 3 * l.width,
                  height: 3 * l.height,
                  fill: "#fff",
                }),
                (0, r.jsx)("path", { ref: p, fill: "#000", d: b }),
              ],
            }),
          ],
        }),
        (0, r.jsx)("image", {
          href: f,
          ...w(t),
          preserveAspectRatio: "none",
          mask: `url(#old-${d})`,
          onLoad: () => x((t) => ({ ...t, from: !0 })),
        }),
        g &&
          (0, r.jsx)("image", {
            href: g,
            ...w(e),
            preserveAspectRatio: "none",
            mask: `url(#new-${d})`,
            onLoad: () => x((t) => ({ ...t, to: !0 })),
          }),
      ],
    }),
  });
}
function FocusGarment({
  view: t,
  phase: e,
  angle: i,
  swing: n,
  bodyScale: o,
  dye: a,
  onDyeDone: l,
  moving: u,
}) {
  let h = useTransform([e, i], ([t, e]) => (t <= 90 ? t : t - 180 + e)),
    d = useTransform(e, (t) => +(t <= 90)),
    c = useTransform(e, (t) => +(t > 90)),
    p = useTransform(e, () => 0),
    [m, f] = (0, s.useState)(null),
    g = !!a && m === a.key;
  return (0, r.jsx)(motion.div, {
    className: "fg",
    style: { rotateZ: n, willChange: u ? "transform" : "auto" },
    children: (0, r.jsxs)(motion.div, {
      className: "fg-card",
      style: { rotateY: h, willChange: u ? "transform" : "auto" },
      children: [
        (0, r.jsx)(
          FocusFace,
          { src: t.side, opacity: d, turn: h, bodyScale: o },
          t.side,
        ),
        (0, r.jsx)(
          FocusFace,
          {
            src: t.front,
            opacity: g && !a.back ? p : c,
            turn: h,
            bodyScale: o,
            preload: !0,
          },
          t.front,
        ),
        t.back &&
          (0, r.jsx)(
            FocusFace,
            {
              src: t.back,
              opacity: g && a.back ? p : c,
              turn: h,
              bodyScale: o,
              back: !0,
            },
            t.back,
          ),
        a &&
          l &&
          (0, r.jsx)(
            DyeTransition,
            {
              from: a.from,
              to: a.to,
              back: a.back,
              onStart: () => f(a.key),
              onDone: l,
            },
            a.key,
          ),
      ],
    }),
  });
}
function ProductInfo({
  name: t,
  url: e,
  face: i,
  animateFace: n,
  hasBack: o,
  onFace: a,
}) {
  let l = "back" === i,
    u = (0, s.useRef)(null);
  return (
    (0, s.useLayoutEffect)(() => {
      let t = u.current;
      if (!t) return;
      let e = () => {
        if (
          ((t.style.fontSize = ""),
          !window.matchMedia("(min-width: 641px)").matches)
        )
          return;
        let e = t.clientWidth,
          i = t.scrollWidth;
        i > e &&
          (t.style.fontSize = `${Math.max(18, Math.floor((24 * e) / i))}px`);
      };
      return (
        e(),
        window.addEventListener("resize", e),
        () => window.removeEventListener("resize", e)
      );
    }, [t]),
    (0, r.jsxs)("div", {
      className: "info",
      children: [
        (0, r.jsx)("h2", { className: "info-name", ref: u, children: t }),
        (0, r.jsxs)("div", {
          className: `seg${n ? " seg-animate" : ""}`,
          role: "group",
          "aria-label": "Show front or back",
          style: o ? void 0 : { visibility: "hidden" },
          "aria-hidden": !o,
          children: [
            (0, r.jsx)("span", {
              className: "seg-knob",
              style: { transform: l ? "translateX(100%)" : "translateX(0)" },
            }),
            (0, r.jsx)("button", {
              type: "button",
              className: l ? "" : "lit",
              "aria-pressed": !l,
              onClick: () => a(!1),
              tabIndex: o ? void 0 : -1,
              children: "FRONT",
            }),
            (0, r.jsx)("button", {
              type: "button",
              className: l ? "lit" : "",
              "aria-pressed": l,
              onClick: () => a(!0),
              tabIndex: o ? void 0 : -1,
              children: "BACK",
            }),
          ],
        }),
        (0, r.jsx)("a", {
          className: "info-cta",
          href: e,
          target: "_self",
          rel: "noopener",
          "aria-label": `See availability of ${t} (opens in a new tab)`,
          children: "SEE AVAILABILITY ↗",
        }),
      ],
    })
  );
}
function ColourTags({ ways: t, active: e, onPick: i }) {
  return (0, r.jsx)("div", {
    className: "tags",
    children: t.map((t, n) =>
      (0, r.jsxs)(
        "div",
        {
          className: `tagwrap${n === e ? " on" : ""}`,
          style: { animationDelay: `${-(1.1 * n)}s` },
          children: [
            (0, r.jsx)("div", {
              className: "string",
              style: {
                height: `calc(var(--tag-string) + ${n} * var(--tag-step))`,
              },
            }),
            (0, r.jsx)("button", {
              type: "button",
              className: "tag-hit",
              "aria-label": `Colour: ${t.label}`,
              "aria-pressed": n === e,
              onClick: () => i(n),
              children: (0, r.jsx)("span", {
                className: "tag",
                style: {
                  "--c": t.hex,
                  "--fgc": (function (t) {
                    let [e, i, n] = [1, 3, 5].map((e) =>
                      parseInt(t.slice(e, e + 2), 16),
                    );
                    return 0.299 * e + 0.587 * i + 0.114 * n > 150
                      ? "#151513"
                      : "#ecebe6";
                  })(t.hex),
                },
                "aria-hidden": "true",
                children: (0, r.jsx)("span", {
                  className: "tag-face",
                  children: t.label,
                }),
              }),
            }),
          ],
        },
        t.label,
      ),
    ),
  });
}
let focusSpring = { type: "spring", stiffness: 70, damping: 15, mass: 1 },
  flipTransition = { duration: 0.5, ease: "easeInOut" };
function ArrowIcon({ dir: t }) {
  return (0, r.jsx)("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    "aria-hidden": "true",
    style: { transform: "l" === t ? "scaleX(-1)" : void 0 },
    children: (0, r.jsx)("path", {
      d: "M3 9h11.5M10 4.5 14.5 9 10 13.5",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.25",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
let productHem = (t) =>
    Math.max(viewHem(t.front), t.back ? viewHem(t.back) : 0),
  stageHeight = Math.max(
    ...rackProducts.flatMap((t) => (t.colourways ?? [t]).map(productHem)),
  ),
  tagOffset = Math.max(
    ...rackProducts
      .filter((t) => t.colourways)
      .flatMap((t) =>
        t.colourways.flatMap((t) => [
          viewEdge(t.front),
          t.back ? viewEdge(t.back, !0) : 0,
        ]),
      ),
  ),
  ProductFocus = (0, s.forwardRef)(function (
    {
      start: t,
      origin: e,
      getOrigin: i,
      onIndex: n,
      onTint: o,
      onCloseStart: a,
      onClosed: l,
    },
    u,
  ) {
    let h = useReducedMotion(),
      [d, c] = (0, s.useState)(t),
      [p, m] = (0, s.useState)(0),
      [f, g] = (0, s.useState)(null),
      [y, v] = (0, s.useState)({ face: "front", animate: !1 }),
      [x, w] = (0, s.useState)(!1),
      [b, T] = (0, s.useState)("opening"),
      k = (0, s.useRef)("opening"),
      S = (t) => {
        ((k.current = t), T(t));
      },
      A = rackProducts[d],
      P = A.colourways?.[p],
      M = P ?? A,
      C = useMotionValue(0),
      E = useMotionValue(0),
      Y = useMotionValue(1),
      j = useMotionValue(0),
      V = useMotionValue(1),
      I = useMotionValue(180 * !!e.hovered),
      R = useMotionValue(0),
      X = useMotionValue(0),
      D = useMotionValue(e.hovered ? 1.12 : 1),
      { springTo: B, stop: L } = useGarmentPhysics(R, X, h),
      O = (0, s.useRef)(null),
      $ = (0, s.useRef)(!1),
      F = (0, s.useRef)([]),
      N = (0, s.useCallback)((t) => {
        let e = O.current,
          i = e.offsetParent.getBoundingClientRect(),
          n = i.left + e.offsetLeft,
          r = i.top + e.offsetTop,
          s = parseFloat(getComputedStyle(e).getPropertyValue("--fiw-px")) || 1;
        return { dx: t.x - n, dy: t.y + t.rod / 2 - r, k: t.iw / s };
      }, []),
      _ = (0, s.useCallback)(
        (t, e) => {
          F.current.forEach((t) => t.stop());
          let i = h ? { duration: 0 } : focusSpring;
          ((F.current = [
            animate(C, t.x, i),
            animate(E, t.y, i),
            animate(Y, t.s, i),
            animate(D, t.body, i),
            animate(
              I,
              t.phase,
              h
                ? { duration: 0 }
                : { type: "spring", stiffness: 60, damping: 14 },
            ),
          ]),
            Promise.all(F.current.map((t) => t.finished)).then(e, () => {}));
        },
        [h, C, E, Y, D, I],
      ),
      U = (0, s.useRef)(!1);
    ((0, s.useEffect)(() => {
      if (U.current) return;
      U.current = !0;
      let { dx: t, dy: i, k: n } = N(e);
      if (h) {
        (V.set(0),
          I.set(180),
          D.set(1),
          animate(V, 1, { duration: 0.3 }).finished.then(() => S("open")));
        return;
      }
      (C.set(t),
        E.set(i),
        Y.set(n),
        _({ x: 0, y: 0, s: 1, phase: 180, body: 1 }, () => S("open")));
    }, []),
      (0, s.useEffect)(() => n(d), [d, n]),
      (0, s.useEffect)(
        () =>
          (function (t, e = !1) {
            let i = rackProducts.length;
            for (let r of e ? [t, (t + 1) % i, (t - 1 + i) % i] : [t]) {
              var n;
              ((n = rackProducts[r]).colourways ?? [n])
                .flatMap((t) => [t.front, t.back])
                .filter((t) => !!t)
                .forEach(preloadImage);
            }
          })(d, !0),
        [d],
      ),
      (0, s.useEffect)(() => o(P ? tintBackground(P.hex) : null), [P, o]));
    let W = (0, s.useCallback)(() => {
      if ("closing" === k.current) return;
      (S("closing"), L(), g(null), a(), o(null));
      let t = i(d);
      if (h || !t)
        return void animate(V, 0, { duration: h ? 0.25 : 0.2 }).finished.then(
          l,
        );
      B(0, { kick: 2 });
      let { dx: e, dy: n, k: r } = N(t);
      _({ x: e, y: n, s: r, phase: 0, body: 1 }, l);
    }, [i, d, a, l, o, h, B, L, N, _, V]);
    (0, s.useImperativeHandle)(u, () => ({ close: W }), [W]);
    let z = (0, s.useCallback)(
        (t) => {
          if ("open" !== k.current || $.current) return;
          (($.current = !0), g(null), v({ face: "front", animate: !1 }));
          let e = (d + t + rackProducts.length) % rackProducts.length;
          if (h)
            return void animate(V, 0, { duration: 0.15 }).finished.then(() => {
              (c(e),
                m(0),
                R.set(0),
                animate(V, 1, { duration: 0.2 }).finished.then(
                  () => ($.current = !1),
                ));
            });
          let i = window.innerWidth;
          (animate(j, -t * i * 0.35, {
            type: "spring",
            stiffness: 140,
            damping: 22,
          }),
            B(180 * Math.round(R.get() / 180) + (t > 0 ? -90 : 90), {
              eps: 6,
              onDone: () => {
                (c(e),
                  m(0),
                  R.set(t > 0 ? 90 : -90),
                  j.set(t * i * 0.35),
                  animate(j, 0, {
                    type: "spring",
                    stiffness: 140,
                    damping: 22,
                  }),
                  B(0, {
                    kick: 4 * t,
                    eps: 4,
                    onDone: () => ($.current = !1),
                  }));
              },
            }));
        },
        [d, h, B, R, j, V],
      ),
      H = (0, s.useCallback)(
        (t) => {
          let e;
          if (t === ((e = ((R.get() % 360) + 360) % 360) > 90 && e < 270))
            return Promise.resolve();
          L();
          let i = R.get() + 180;
          return h
            ? (R.set(i), Promise.resolve())
            : (w(!0),
              animate(R, i, flipTransition).finished.then(() => {
                (w(!1), B(i, { kick: 3 }));
              }));
        },
        [R, h, B, L],
      ),
      q = (0, s.useCallback)(
        (t) => {
          "open" === k.current &&
            !$.current &&
            M.back &&
            (($.current = !0),
            v({ face: t ? "back" : "front", animate: !0 }),
            H(t).then(() => ($.current = !1)));
        },
        [M.back, H],
      ),
      G = (0, s.useCallback)(
        (t) => {
          if (!A.colourways || t === p || $.current || "open" !== k.current)
            return;
          let e = A.colourways,
            i = e[t],
            n = "back" === y.face && !!e[p].back && !!i.back;
          (o(tintBackground(i.hex)), h)
            ? m(t)
            : (($.current = !0),
              g({
                from: n ? e[p].back : e[p].front,
                to: n ? i.back : i.front,
                back: n,
                toIndex: t,
                key: Date.now(),
              }),
              B(R.get(), { kick: 2.5 }));
        },
        [A.colourways, p, R, B, o, h, y.face],
      ),
      K = (0, s.useCallback)(() => {
        if (!f) return;
        m(f.toIndex);
        let t = f.key;
        setTimeout(() => {
          (g((e) => (e && e.key === t ? null : e)), ($.current = !1));
        }, 160);
      }, [f]);
    (0, s.useEffect)(() => {
      let t = (t) => {
        ("Escape" === t.key && W(),
          "ArrowRight" === t.key && z(1),
          "ArrowLeft" === t.key && z(-1));
      };
      return (
        window.addEventListener("keydown", t),
        () => window.removeEventListener("keydown", t)
      );
    }, [W, z]);
    let Z = (0, s.useRef)(null),
      J = (t) => (Z.current = { x: t.clientX, y: t.clientY }),
      Q = (t) => {
        let e = Z.current;
        if (((Z.current = null), !e)) return !1;
        let i = t.clientX - e.x;
        return (
          !!(Math.abs(i) > 50 && Math.abs(i) > Math.abs(t.clientY - e.y)) &&
          (z(i < 0 ? 1 : -1), !0)
        );
      },
      tt = "open" === b;
    return (0, r.jsxs)("div", {
      className: "focus",
      "data-status": b,
      style: { "--stage": stageHeight, "--tag-x": tagOffset },
      children: [
        (0, r.jsx)("div", {
          className: "focus-backdrop",
          onPointerDown: J,
          onPointerUp: (t) => {
            Q(t) || W();
          },
        }),
        (0, r.jsx)(motion.div, {
          className: "focus-anchor",
          ref: O,
          style: {
            x: C,
            y: E,
            scale: Y,
            opacity: V,
            willChange: "open" === b ? "auto" : "transform",
          },
          children: (0, r.jsxs)(motion.div, {
            className: "focus-slide",
            style: { x: j },
            children: [
              (0, r.jsx)(FocusGarment, {
                view: M,
                phase: I,
                angle: R,
                swing: X,
                bodyScale: D,
                dye: f,
                onDyeDone: K,
                moving: "open" !== b || x,
              }),
              (0, r.jsx)("div", {
                className: "focus-garment-area",
                onPointerDown: J,
                onPointerUp: Q,
              }),
              A.colourways &&
                (0, r.jsx)(motion.div, {
                  className: "focus-tags-wrap",
                  initial: !1,
                  animate: { opacity: +!!tt },
                  transition: { duration: 0.3 },
                  children: (0, r.jsx)(ColourTags, {
                    ways: A.colourways,
                    active: f ? f.toIndex : p,
                    onPick: G,
                  }),
                }),
            ],
          }),
        }),
        (0, r.jsx)(motion.button, {
          type: "button",
          className: "focus-arrow l",
          "aria-label": "Previous piece",
          onClick: () => z(-1),
          initial: { opacity: 0 },
          animate: { opacity: +!!tt },
          style: { pointerEvents: tt ? "auto" : "none" },
          children: (0, r.jsx)(ArrowIcon, { dir: "l" }),
        }),
        (0, r.jsx)(motion.button, {
          type: "button",
          className: "focus-arrow r",
          "aria-label": "Next piece",
          onClick: () => z(1),
          initial: { opacity: 0 },
          animate: { opacity: +!!tt },
          style: { pointerEvents: tt ? "auto" : "none" },
          children: (0, r.jsx)(ArrowIcon, { dir: "r" }),
        }),
        (0, r.jsx)(motion.div, {
          className: "focus-info",
          initial: { opacity: 0 },
          animate: { opacity: +!!tt },
          transition: { duration: 0.3 },
          children: (0, r.jsx)(ProductInfo, {
            name: A.name,
            url: A.url,
            face: y.face,
            animateFace: y.animate,
            hasBack: !!M.back,
            onFace: q,
          }),
        }),
      ],
    });
  });
export default function Rack() {
  let [t, e] = (0, s.useState)(null),
    [i, n] = (0, s.useState)(!1),
    [o, a] = (0, s.useState)(null),
    [l, u] = (0, s.useState)(null),
    h = (0, s.useRef)(null);
  (0, s.useEffect)(
    () => (
      "complete" === document.readyState
        ? preloadFronts()
        : window.addEventListener("load", preloadFronts, { once: !0 }),
      () => window.removeEventListener("load", preloadFronts)
    ),
    [],
  );
  let d = (0, s.useCallback)((t, i) => {
      (e({ start: t, origin: i, key: Date.now() }), a(t), n(!0));
    }, []),
    c = (0, s.useCallback)((t) => getRackOrigin(t), []),
    p = (0, s.useCallback)(() => n(!1), []),
    m = (0, s.useCallback)(() => {
      (e(null), a(null));
    }, []);
  return (0, r.jsxs)("div", {
    className: "wall relative h-dvh w-full overflow-hidden",
    style: l ? { backgroundColor: l } : void 0,
    children: [
      (0, r.jsx)(RackHeader, { focus: i, onClose: () => h.current?.close() }),
      (0, r.jsxs)("main", {
        children: [
          (0, r.jsx)("h1", { className: "sr-only", children: "One Stop By N" }),
          (0, r.jsx)(motion.div, {
            className: "absolute inset-0",
            initial: !1,
            animate: i
              ? { filter: "blur(8px)", opacity: 0.25 }
              : { filter: "blur(0px)", opacity: 1 },
            transition: { duration: 0.5, ease: "easeOut" },
            children: (0, r.jsx)(ClothingRack, {
              onSelect: d,
              hiddenIndex: o,
              paused: !!t,
            }),
          }),
          (0, r.jsx)(ShopLink, { hidden: !!t }),
          t &&
            (0, r.jsx)(
              ProductFocus,
              {
                ref: h,
                start: t.start,
                origin: t.origin,
                getOrigin: c,
                onIndex: a,
                onTint: u,
                onCloseStart: p,
                onClosed: m,
              },
              t.key,
            ),
        ],
      }),
      (0, r.jsx)(Marquee, {}),
    ],
  });
}
