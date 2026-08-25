import { company } from "../data/content";

type MarkProps = {
  size?: number;
  className?: string;
  /** unique id suffix so multiple gradients on one page don't collide */
  idKey?: string;
};

/**
 * RB Capital Ventures emblem.
 * A rounded aperture containing an ascending "capital flow" — three connected
 * nodes climbing left→right, the final node elevated and glowing. Reads as
 * growth + a global network of deals. Animatable (path draw + node pulse).
 */
export function LogoMark({ size = 40, className, idKey = "m" }: MarkProps) {
  const g = `rbG-${idKey}`;
  const gg = `rbGlow-${idKey}`;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="RB Capital Ventures emblem"
    >
      <defs>
        <linearGradient id={g} x1="6" y1="42" x2="42" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5aa2f6" />
          <stop offset="1" stopColor="#1f6bd6" />
        </linearGradient>
        <radialGradient id={gg} cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#93c1fb" stopOpacity="0.9" />
          <stop offset="1" stopColor="#93c1fb" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* aperture */}
      <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="#fff" />
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="13"
        stroke={`url(#${g})`}
        strokeWidth="1.6"
        opacity="0.5"
      />

      {/* ascending flow */}
      <path
        d="M11 34 L21 26 L30 30 L38 14"
        stroke={`url(#${g})`}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* nodes */}
      <circle cx="11" cy="34" r="2.5" fill="#1f6bd6" />
      <circle cx="21" cy="26" r="2.5" fill="#2f83ea" />
      <circle cx="30" cy="30" r="2.5" fill="#2f83ea" />
      <circle cx="38" cy="14" r="9" fill={`url(#${gg})`} />
      <circle cx="38" cy="14" r="3.4" fill="#2f83ea" />
      <circle cx="38" cy="14" r="3.4" stroke="#fff" strokeWidth="1.1" />
    </svg>
  );
}

type LogoProps = {
  variant?: "dark" | "light";
  size?: number;
  className?: string;
  idKey?: string;
};

/** Full lockup: emblem + wordmark. `variant` controls the wordmark color. */
export function Logo({ variant = "dark", size = 38, className, idKey = "hdr" }: LogoProps) {
  const ink = variant === "light" ? "#ffffff" : "var(--ink-900)";
  const sub = variant === "light" ? "rgba(255,255,255,0.66)" : "var(--ink-400)";
  return (
    <span className={`logo ${className ?? ""}`} aria-label={company.legalName}>
      <LogoMark size={size} idKey={idKey} />
      <span className="logo__word">
        <span className="logo__name" style={{ color: ink }}>
          RB Capital Ventures
        </span>
        <span className="logo__tag" style={{ color: sub }}>
          Investment &amp; Project Finance
        </span>
      </span>
    </span>
  );
}
