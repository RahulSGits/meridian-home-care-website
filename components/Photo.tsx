/*
 * Photo — a generative stand-in for photography.
 *
 * The design calls for grayscale interior photography in every image slot. Until
 * the real shoot lands, each slot renders a deterministic abstract interior built
 * from the slot id, so the page has real composition rather than grey boxes.
 * Four archetypes keep a wall of them from reading as one repeated image.
 *
 * To swap in real photography: replace the <svg> below with <Image>, keep the
 * wrapper classes, and drop the `seed` prop. Nothing else in the site changes.
 */

type Props = {
  seed: string;
  label?: string;
  ratio?: string;
  zoom?: boolean;
  showLabel?: boolean;
  className?: string;
};

/* Deterministic PRNG so server and client render identical markup. */
function rng(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const GREYS = ["#8f8b8b", "#a5a1a1", "#b8b4b4", "#cbc7c7", "#dedada", "#6f6c6c"];

const W = 800;
const H = 1000;

export default function Photo({
  seed,
  label,
  ratio = "4 / 5",
  zoom = false,
  showLabel = false,
  className = "",
}: Props) {
  const r = rng(seed);
  const pick = <T,>(arr: T[]) => arr[Math.floor(r() * arr.length)];
  const between = (lo: number, hi: number) => lo + Math.floor(r() * (hi - lo));

  const archetype = Math.floor(r() * 4); // 0 room · 1 wide · 2 detail · 3 surface
  const gid = `g-${seed.replace(/[^a-zA-Z0-9]/g, "")}`;

  const defs = (
    <defs>
      <linearGradient id={`${gid}-wall`} x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stopColor="#dbd7d7" />
        <stop offset="100%" stopColor="#a5a1a1" />
      </linearGradient>
      <linearGradient id={`${gid}-floor`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8a8787" />
        <stop offset="100%" stopColor="#c6c2c2" />
      </linearGradient>
      <linearGradient id={`${gid}-win`} x1="0" y1="0" x2="0.6" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e6e3e3" />
      </linearGradient>
      <radialGradient id={`${gid}-bloom`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
  );

  let body: React.ReactNode = null;

  if (archetype === 0 || archetype === 1) {
    /* Room: wall, window, furniture silhouettes on a horizon, reflective floor. */
    const wide = archetype === 1;
    const horizon = between(520, 720);
    const winW = wide ? between(360, 560) : between(180, 340);
    const winH = wide ? between(180, 280) : between(250, 420);
    const winX = between(60, W - winW - 60);
    const winY = between(80, 200);
    const mullions = wide ? between(2, 5) : between(1, 3);

    const blocks = Array.from({ length: between(2, 5) }, () => {
      const bw = between(90, 320);
      const bh = between(70, 260);
      return { x: between(0, W - bw), w: bw, h: bh, fill: pick(GREYS), op: 0.5 + r() * 0.45 };
    });
    const lines = Array.from({ length: between(2, 5) }, () => ({
      x: between(0, W),
      op: 0.08 + r() * 0.14,
    }));

    body = (
      <>
        <rect width={W} height={H} fill={`url(#${gid}-wall)`} />
        {lines.map((l, i) => (
          <rect key={`l${i}`} x={l.x} y="0" width="2" height={H} fill="#201e1d" opacity={l.op} />
        ))}
        <rect x={winX} y={winY} width={winW} height={winH} fill={`url(#${gid}-win)`} />
        {Array.from({ length: mullions }, (_, i) => (
          <rect
            key={`m${i}`}
            x={winX + ((i + 1) * winW) / (mullions + 1) - 2}
            y={winY}
            width="4"
            height={winH}
            fill="#b4b0b0"
          />
        ))}
        <rect
          x={winX - 6}
          y={winY - 6}
          width={winW + 12}
          height={winH + 12}
          fill="none"
          stroke="#201e1d"
          strokeOpacity="0.22"
          strokeWidth="6"
        />
        <ellipse
          cx={winX + winW / 2}
          cy={winY + winH / 2}
          rx={winW * 1.5}
          ry={winH * 1.4}
          fill={`url(#${gid}-bloom)`}
        />
        {blocks.map((b, i) => (
          <rect
            key={`b${i}`}
            x={b.x}
            y={horizon - b.h}
            width={b.w}
            height={b.h}
            fill={b.fill}
            opacity={b.op}
          />
        ))}
        <rect x="0" y={horizon} width={W} height={H - horizon} fill={`url(#${gid}-floor)`} />
        <rect x="0" y={horizon} width={W} height="3" fill="#201e1d" opacity="0.3" />
        <rect
          x={winX + 20}
          y={horizon}
          width={Math.max(40, winW - 40)}
          height={(H - horizon) * 0.62}
          fill="#ffffff"
          opacity="0.16"
        />
      </>
    );
  } else if (archetype === 2) {
    /* Detail: a tight crop — overlapping planes and a hard diagonal light band. */
    const planes = Array.from({ length: between(4, 7) }, (_, i) => ({
      x: between(-120, W - 100),
      y: between(-120, H - 140),
      w: between(220, 620),
      h: between(180, 520),
      fill: GREYS[i % GREYS.length],
      op: 0.55 + r() * 0.4,
    }));
    const bandY = between(200, 640);
    const bandH = between(90, 220);

    body = (
      <>
        <rect width={W} height={H} fill={`url(#${gid}-wall)`} />
        {planes.map((p, i) => (
          <rect key={`p${i}`} {...p} fill={p.fill} opacity={p.op} />
        ))}
        <g transform={`rotate(${between(-22, 22)} ${W / 2} ${H / 2})`}>
          <rect x={-200} y={bandY} width={W + 400} height={bandH} fill="#ffffff" opacity="0.4" />
          <rect
            x={-200}
            y={bandY + bandH + between(20, 90)}
            width={W + 400}
            height={bandH * 0.35}
            fill="#ffffff"
            opacity="0.22"
          />
        </g>
        <rect x="0" y={H - between(120, 260)} width={W} height={H} fill="#201e1d" opacity="0.14" />
      </>
    );
  } else {
    /* Surface: tile and grout — a clean orthogonal field with a light gradient. */
    const cols = between(4, 8);
    const rows = between(5, 10);
    const cw = W / cols;
    const ch = H / rows;
    const cells: React.ReactNode[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        cells.push(
          <rect
            key={`c${x}-${y}`}
            x={x * cw + 3}
            y={y * ch + 3}
            width={cw - 6}
            height={ch - 6}
            fill={GREYS[(x + y * 2 + Math.floor(r() * 2)) % GREYS.length]}
            opacity={0.55 + r() * 0.4}
          />,
        );
      }
    }
    body = (
      <>
        <rect width={W} height={H} fill="#7d7979" />
        {cells}
        <ellipse
          cx={between(150, 650)}
          cy={between(150, 500)}
          rx={520}
          ry={460}
          fill={`url(#${gid}-bloom)`}
        />
      </>
    );
  }

  return (
    <figure
      className={`photo${zoom ? " photo-zoom" : ""}${className ? ` ${className}` : ""}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label ?? "Meridian cleaning photography"}
    >
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {defs}
        {body}
      </svg>
      {showLabel && label ? <figcaption className="photo-label">{label}</figcaption> : null}
    </figure>
  );
}
