/* ============================================================================
 *  Crayon doodles.
 *
 *  Every drawing on this site is hand-authored SVG. The childlike wobble is
 *  not faked with a font or a texture image — it comes from a real SVG filter
 *  (`#crayon`) that pushes every stroke around with fractal noise, the way a
 *  waxy crayon wanders when a small hand pushes it across paper.
 *
 *  Two tricks make these read as "drawn by a kid" rather than "drawn by
 *  Illustrator":
 *    1. The wobble filter, applied to strokes.
 *    2. `Fill` — colour blobs sit UNDER the outline, nudged a few pixels off.
 *       Children colour outside the lines. So do these.
 * ==========================================================================*/

import type { CSSProperties, ReactNode } from "react";

/* ---------------------------------------------------------------------------
   The shared filter defs. Rendered exactly once, in the root layout.
   ------------------------------------------------------------------------- */
export function CrayonDefs() {
  return (
    <svg
      aria-hidden
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute" }}
    >
      <defs>
        {/* Strong wobble — for big, bold, showpiece drawings. */}
        <filter id="crayon" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="3"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="3.2"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Gentler wobble — for small marginal doodles, where too much
            displacement turns a 20px drawing into mush. */}
        <filter id="crayon-fine" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.06"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="1.4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   Shared plumbing
   ------------------------------------------------------------------------- */

export type DoodleProps = {
  className?: string;
  style?: CSSProperties;
  /** Outline colour. Defaults to inheriting `currentColor`. */
  stroke?: string;
  /** Use the softer filter. Set this on anything rendered small. */
  fine?: boolean;
  /** Decorative doodles are hidden from screen readers; pass a label to expose one. */
  title?: string;
  /** Override the scaling rule — full-width strips set this to "none". */
  preserveAspectRatio?: string;
};

function Doodle({
  viewBox,
  className = "",
  style,
  fine,
  title,
  preserveAspectRatio,
  children,
}: DoodleProps & { viewBox: string; children: ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
      className={className}
      style={style}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title && <title>{title}</title>}
      <g filter={`url(#${fine ? "crayon-fine" : "crayon"})`}>{children}</g>
    </svg>
  );
}

/**
 * A colour blob that deliberately misses its outline.
 * `off` nudges it; `rot` tilts it. This is the "outside the lines" effect.
 */
function Fill({
  d,
  color,
  off = [2, -2],
  rot = 0,
  opacity = 0.85,
}: {
  d: string;
  color: string;
  off?: [number, number];
  rot?: number;
  opacity?: number;
}) {
  return (
    <path
      d={d}
      fill={color}
      opacity={opacity}
      transform={`translate(${off[0]} ${off[1]}) rotate(${rot})`}
    />
  );
}

/* ---------------------------------------------------------------------------
   The drawings
   ------------------------------------------------------------------------- */

/** The sun, always in the top corner, always with too many rays. */
export function Sun(props: DoodleProps) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <Doodle {...props} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="21" fill="var(--crayon-yellow)" opacity="0.9"
        transform="translate(2 -2)" />
      <circle
        cx="50"
        cy="50"
        r="21"
        stroke={props.stroke ?? "var(--crayon-orange)"}
        strokeWidth="3.5"
      />
      {rays.map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="24"
          x2="50"
          y2="9"
          stroke={props.stroke ?? "var(--crayon-orange)"}
          strokeWidth="3.5"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </Doodle>
  );
}

/** A cloud. Lumpy on purpose. */
export function Cloud(props: DoodleProps) {
  const d =
    "M22 54 Q6 54 7 41 Q8 28 22 30 Q24 13 42 15 Q52 3 66 12 Q80 5 85 20 Q104 20 104 37 Q104 54 87 54 Z";
  return (
    <Doodle {...props} viewBox="0 0 112 62">
      <Fill d={d} color="var(--crayon-sky)" off={[-3, 3]} opacity={0.55} />
      <path d={d} stroke={props.stroke ?? "var(--crayon-blue)"} strokeWidth="3.5" />
    </Doodle>
  );
}

/** The pink house with far too many windows. */
export function House(props: DoodleProps) {
  const body = "M18 46 H82 V101 H18 Z";
  const roof = "M9 47 L50 11 L91 47 Z";
  return (
    <Doodle {...props} viewBox="0 0 100 108">
      <Fill d={body} color="var(--crayon-pink)" off={[3, -2]} opacity={0.75} />
      <Fill d={roof} color="var(--crayon-red)" off={[-2, 3]} opacity={0.7} />
      <path d={body} stroke={props.stroke ?? "var(--crayon-plum)"} strokeWidth="3.5" />
      <path d={roof} stroke={props.stroke ?? "var(--crayon-plum)"} strokeWidth="3.5" />
      {/* windows */}
      <rect x="27" y="57" width="16" height="15" stroke="var(--crayon-plum)" strokeWidth="3" />
      <rect x="57" y="57" width="16" height="15" stroke="var(--crayon-plum)" strokeWidth="3" />
      {/* door */}
      <path d="M42 101 V80 H58 V101" stroke="var(--crayon-plum)" strokeWidth="3.2" />
      <circle cx="54" cy="91" r="1.8" fill="var(--crayon-plum)" />
    </Doodle>
  );
}

/** Two strokes and it's a bird. The oldest trick in the sketchbook. */
export function Bird(props: DoodleProps) {
  return (
    <Doodle {...props} viewBox="0 0 60 26">
      <path
        d="M3 19 Q15 3 29 17 Q43 3 57 19"
        stroke={props.stroke ?? "var(--crayon-orange)"}
        strokeWidth="3.4"
      />
    </Doodle>
  );
}

/** A tree: brown stick, green explosion. */
export function Tree(props: DoodleProps) {
  const leaves =
    "M40 8 Q68 10 70 34 Q80 48 66 60 Q56 72 40 66 Q24 72 14 60 Q0 48 10 34 Q12 10 40 8 Z";
  return (
    <Doodle {...props} viewBox="0 0 80 108">
      <Fill d={leaves} color="var(--crayon-green)" off={[-3, 4]} opacity={0.6} />
      <path d={leaves} stroke={props.stroke ?? "var(--crayon-forest)"} strokeWidth="3.5" />
      <path
        d="M40 66 V104 M40 82 L28 71 M40 90 L53 79"
        stroke="var(--crayon-brown)"
        strokeWidth="3.6"
      />
    </Doodle>
  );
}

/** The purple balloon, with a string that never hangs straight. */
export function Balloon(props: DoodleProps) {
  const d = "M25 4 Q45 4 45 27 Q45 48 25 52 Q5 48 5 27 Q5 4 25 4 Z";
  return (
    <Doodle {...props} viewBox="0 0 50 92">
      <Fill d={d} color="var(--crayon-purple)" off={[2, 3]} opacity={0.65} />
      <path d={d} stroke={props.stroke ?? "var(--crayon-plum)"} strokeWidth="3.4" />
      <path d="M22 52 L25 57 L28 52" stroke="var(--crayon-plum)" strokeWidth="3" />
      <path
        d="M25 57 Q34 66 24 74 Q15 81 25 89"
        stroke={props.stroke ?? "var(--crayon-plum)"}
        strokeWidth="2.6"
      />
    </Doodle>
  );
}

/** A flower with five wonky petals. */
export function Flower(props: DoodleProps) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <Doodle {...props} viewBox="0 0 60 92">
      <path
        d="M30 88 Q28 66 30 44 M30 70 Q18 63 12 66 M30 60 Q43 53 49 57"
        stroke="var(--crayon-forest)"
        strokeWidth="3.2"
      />
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx="30"
          cy="15"
          rx="8"
          ry="12"
          fill="var(--crayon-pink)"
          opacity="0.7"
          stroke={props.stroke ?? "var(--crayon-red)"}
          strokeWidth="2.8"
          transform={`rotate(${deg} 30 30)`}
        />
      ))}
      <circle cx="30" cy="30" r="7" fill="var(--crayon-yellow)"
        stroke="var(--crayon-orange)" strokeWidth="2.8" />
    </Doodle>
  );
}

/** A star, drawn in one go without lifting the crayon. */
export function Star(props: DoodleProps) {
  const d = "M30 4 L38 22 L58 24 L43 37 L48 56 L30 46 L12 56 L17 37 L2 24 L22 22 Z";
  return (
    <Doodle {...props} viewBox="0 0 60 60">
      <Fill d={d} color="var(--crayon-yellow)" off={[2, 2]} opacity={0.8} />
      <path d={d} stroke={props.stroke ?? "var(--crayon-orange)"} strokeWidth="3.2" />
    </Doodle>
  );
}

/** A heart. Lopsided, as all the best ones are. */
export function Heart(props: DoodleProps) {
  const d = "M30 52 Q4 33 4 19 Q4 5 17 5 Q27 5 30 16 Q33 5 43 5 Q56 5 56 19 Q56 33 30 52 Z";
  return (
    <Doodle {...props} viewBox="0 0 60 56">
      <Fill d={d} color="var(--crayon-red)" off={[-2, 2]} opacity={0.6} />
      <path d={d} stroke={props.stroke ?? "var(--crayon-red)"} strokeWidth="3.2" />
    </Doodle>
  );
}

/** A rainbow, in whatever order the crayons came out of the box. */
export function Rainbow(props: DoodleProps) {
  const bands = [
    { r: 52, c: "var(--crayon-red)" },
    { r: 43, c: "var(--crayon-orange)" },
    { r: 34, c: "var(--crayon-yellow)" },
    { r: 25, c: "var(--crayon-green)" },
    { r: 16, c: "var(--crayon-blue)" },
  ];
  return (
    <Doodle {...props} viewBox="0 0 124 66">
      {bands.map(({ r, c }) => (
        <path
          key={r}
          d={`M${62 - r} 62 A ${r} ${r} 0 0 1 ${62 + r} 62`}
          stroke={c}
          strokeWidth="6.5"
        />
      ))}
    </Doodle>
  );
}

/**
 * Grass — the row of green spikes along the bottom of every drawing.
 *
 * The viewBox is deliberately wide (1200) and the aspect ratio is unlocked, so
 * a full-bleed strip stretches only fractionally instead of scaling a narrow
 * viewBox up 6x and turning every blade into a tree.
 */
export function Grass(props: DoodleProps) {
  const blades = Array.from({ length: 50 }, (_, i) => i);
  return (
    <Doodle {...props} viewBox="0 0 1200 40" preserveAspectRatio="none">
      {blades.map((i) => {
        const x = 8 + i * 24;
        const lean = i % 3 === 0 ? 7 : i % 3 === 1 ? -6 : 2;
        const h = 18 + (i % 4) * 6;
        return (
          <path
            key={i}
            d={`M${x} 38 Q${x + lean} ${38 - h / 2} ${x + lean * 1.6} ${38 - h}`}
            stroke={props.stroke ?? "var(--crayon-green)"}
            strokeWidth="3"
          />
        );
      })}
    </Doodle>
  );
}

/** A butterfly, mid-wobble. */
export function Butterfly(props: DoodleProps) {
  return (
    <Doodle {...props} viewBox="0 0 70 56">
      <path
        d="M35 28 Q14 4 8 18 Q2 32 35 28 Q14 52 22 52 Q31 50 35 28"
        fill="var(--crayon-purple)"
        opacity="0.55"
        stroke={props.stroke ?? "var(--crayon-plum)"}
        strokeWidth="2.8"
      />
      <path
        d="M35 28 Q56 4 62 18 Q68 32 35 28 Q56 52 48 52 Q39 50 35 28"
        fill="var(--crayon-pink)"
        opacity="0.55"
        stroke={props.stroke ?? "var(--crayon-plum)"}
        strokeWidth="2.8"
      />
      <path d="M35 24 V40 M35 24 L29 14 M35 24 L41 14" stroke="var(--crayon-plum)" strokeWidth="2.6" />
    </Doodle>
  );
}

/** Two people holding hands, which is the whole point of the drawing. */
export function People(props: DoodleProps) {
  return (
    <Doodle {...props} viewBox="0 0 110 110">
      {/* small one */}
      <circle cx="30" cy="46" r="11" stroke="var(--crayon-plum)" strokeWidth="3.2"
        fill="var(--crayon-pink)" fillOpacity="0.5" />
      <path
        d="M30 57 V83 M30 65 L18 73 M30 65 L48 70 M30 83 L22 102 M30 83 L38 102"
        stroke="var(--crayon-plum)"
        strokeWidth="3.2"
      />
      {/* tall one */}
      <circle cx="76" cy="30" r="13" stroke="var(--crayon-brown)" strokeWidth="3.2"
        fill="var(--crayon-yellow)" fillOpacity="0.4" />
      <path
        d="M76 43 V78 M76 53 L48 70 M76 53 L93 64 M76 78 L67 104 M76 78 L86 104"
        stroke="var(--crayon-brown)"
        strokeWidth="3.2"
      />
    </Doodle>
  );
}

/** A loose scribble, for underlining things with feeling. */
export function Scribble(props: DoodleProps) {
  return (
    <Doodle {...props} viewBox="0 0 200 22">
      <path
        d="M4 14 Q30 4 58 12 Q86 20 114 10 Q142 2 168 12 Q182 17 196 9"
        stroke={props.stroke ?? "var(--crayon-red)"}
        strokeWidth="4.5"
      />
    </Doodle>
  );
}

/** A hand-drawn arrow, for pointing at things. */
export function ArrowDoodle(props: DoodleProps) {
  return (
    <Doodle {...props} viewBox="0 0 60 30">
      <path
        d="M3 16 Q22 6 50 15 M38 6 Q50 13 51 16 Q49 20 38 26"
        stroke={props.stroke ?? "currentColor"}
        strokeWidth="3.2"
      />
    </Doodle>
  );
}

/** A ring scribbled around something important. */
export function CircleScribble(props: DoodleProps) {
  return (
    <Doodle {...props} viewBox="0 0 200 80">
      <path
        d="M104 6 Q34 2 14 34 Q0 62 68 74 Q150 82 186 54 Q206 32 158 12 Q128 3 96 9"
        stroke={props.stroke ?? "var(--crayon-red)"}
        strokeWidth="3.4"
      />
    </Doodle>
  );
}

/** A check mark, drawn too fast. */
export function Check(props: DoodleProps) {
  return (
    <Doodle {...props} viewBox="0 0 30 30">
      <path
        d="M4 16 Q9 19 13 25 Q18 11 27 4"
        stroke={props.stroke ?? "var(--crayon-green)"}
        strokeWidth="3.6"
      />
    </Doodle>
  );
}

/* ---------------------------------------------------------------------------
   The whole scene, reassembled — used as the hero drawing.
   ------------------------------------------------------------------------- */
export function SceneDrawing({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Sun className="absolute left-[3%] top-[1%] w-[16%]" />
      <Cloud className="absolute left-[30%] top-[6%] w-[26%]" />
      <Cloud className="absolute right-[3%] top-[2%] w-[22%]" />
      <Bird className="absolute left-[40%] top-[30%] w-[13%]" />
      <Bird className="absolute left-[52%] top-[22%] w-[11%]" />
      {/* Grass goes down before anything standing in it, so the blades sit
          behind the house, the tree and the legs rather than across them. */}
      <Grass className="absolute inset-x-0 bottom-[6%] w-full" />
      <House className="absolute bottom-[16%] left-[2%] w-[24%]" />
      <Tree className="absolute bottom-[14%] right-[6%] w-[26%]" />
      <Balloon className="absolute bottom-[24%] left-[33%] w-[11%]" />
      <People className="absolute bottom-[14%] left-[40%] w-[30%]" />
      <Flower className="absolute bottom-[13%] right-[34%] w-[10%]" />
    </div>
  );
}
