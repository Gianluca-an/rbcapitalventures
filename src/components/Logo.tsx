import { company } from "../data/content";

type MarkProps = { size?: number; className?: string; idKey?: string };

/**
 * RB sphere mark — the "Still Waters" signature object as a compact emblem:
 * a luminous glass sphere with a faint orbit ring and specular highlight.
 */
export function LogoMark({ size = 34, className, idKey = "m" }: MarkProps) {
  const g = `rbSphere-${idKey}`;
  const h = `rbHi-${idKey}`;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="RB Capital Ventures sphere"
    >
      <defs>
        <radialGradient id={g} cx="0.36" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.28" stopColor="#dcecfd" />
          <stop offset="0.62" stopColor="#9cc6f2" />
          <stop offset="1" stopColor="#5f97dc" />
        </radialGradient>
        <radialGradient id={h} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* orbit */}
      <ellipse cx="20" cy="20" rx="18.5" ry="8" transform="rotate(-24 20 20)" stroke="#7fb0e6" strokeOpacity="0.5" strokeWidth="1" />
      {/* sphere */}
      <circle cx="20" cy="20" r="12.5" fill={`url(#${g})`} />
      {/* specular */}
      <ellipse cx="15.6" cy="15" rx="4.2" ry="3" fill={`url(#${h})`} />
    </svg>
  );
}

type LogoProps = { variant?: "dark" | "light"; size?: number; className?: string; idKey?: string };

/** Full lockup: sphere mark + wordmark. */
export function Logo({ variant = "dark", size = 34, className, idKey = "hdr" }: LogoProps) {
  const ink = variant === "light" ? "#ffffff" : "var(--ink)";
  const sub = variant === "light" ? "rgba(255,255,255,0.66)" : "var(--ink-400)";
  return (
    <span className={`logo ${className ?? ""}`} aria-label={company.legalName}>
      <LogoMark size={size} idKey={idKey} />
      <span className="logo__word">
        <span className="logo__name" style={{ color: ink }}>RB Capital Ventures</span>
        <span className="logo__tag" style={{ color: sub }}>Investment &amp; Project Finance</span>
      </span>
    </span>
  );
}
