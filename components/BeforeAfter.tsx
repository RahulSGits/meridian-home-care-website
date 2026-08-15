"use client";

import { useRef, useState } from "react";
import Photo from "./Photo";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const box = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(97, Math.max(3, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))",
        gap: "clamp(28px,4vw,64px)",
        alignItems: "center",
      }}
    >
      <div data-rvx>
        <span className="kicker">Before / after</span>
        <h2 className="h-section" style={{ margin: "0 0 20px -0.05em" }}>
          Drag the line.
        </h2>
        <p className="body-lg" style={{ margin: "0 0 24px", maxWidth: "44ch" }}>
          A four-hour restorative clean in a Lincoln Park kitchen. Untouched photographs,
          same lens, same light, ninety minutes apart.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ fontSize: 13 }}
            onClick={() => setPos(97)}
          >
            Show before
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ fontSize: 13 }}
            onClick={() => setPos(3)}
          >
            Show after
          </button>
        </div>
      </div>

      <div
        ref={box}
        style={{
          position: "relative",
          aspectRatio: "3 / 2",
          cursor: "ew-resize",
          touchAction: "none",
          userSelect: "none",
          boxShadow: "var(--shadow-lg)",
        }}
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture?.(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) move(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        data-rv
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Photo
            seed="ba-before-kitchen"
            label="Before — cluttered, greasy kitchen"
            ratio="3 / 2"
            className="photo-fill"
          />
        </div>
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${pos}%)` }}>
          <Photo
            seed="ba-after-kitchen-spotless"
            label="After — the same kitchen, spotless"
            ratio="3 / 2"
            className="photo-fill"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: 2,
            background: "var(--color-accent)",
            pointerEvents: "none",
            left: `${pos}%`,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 44,
              height: 44,
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              display: "grid",
              placeItems: "center",
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: 13,
            }}
          >
            ↔
          </span>
        </div>

        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "var(--color-text)",
            color: "var(--color-bg)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "5px 9px",
            pointerEvents: "none",
          }}
        >
          Before
        </span>
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "var(--color-accent)",
            color: "var(--color-bg)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "5px 9px",
            pointerEvents: "none",
          }}
        >
          After
        </span>

        {/* Accessible equivalent of the drag interaction */}
        <label
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
          }}
        >
          Before / after reveal position
          <input
            type="range"
            min={3}
            max={97}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}
