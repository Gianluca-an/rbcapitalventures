/**
 * Photographic slot. Renders a real image when `src` is supplied; otherwise a
 * refined duotone placeholder (with a faint neoclassical column motif) and a
 * discreet caption naming the intended subject — so the layout reads correctly
 * today and the client's photography drops straight in later.
 */
type PhotoProps = {
  caption?: string;
  tone?: "dark" | "light";
  src?: string;
  alt?: string;
  className?: string;
  /** darken a real image so overlaid text stays legible */
  overlay?: boolean;
};

export function Photo({ caption, tone = "dark", src, alt, className, overlay = true }: PhotoProps) {
  if (src) {
    return (
      <div className={`photo photo--img ${className ?? ""}`}>
        <img src={src} alt={alt ?? caption ?? ""} loading="lazy" />
        {overlay && <span className="photo__scrim" aria-hidden="true" />}
      </div>
    );
  }
  return (
    <div className={`photo photo--ph photo--${tone} ${className ?? ""}`} role="img" aria-label={caption ?? "Editorial photography"}>
      <svg className="photo__motif" viewBox="0 0 400 260" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
        {/* faint colonnade — placeholder texture */}
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.9">
          <line x1="40" y1="60" x2="360" y2="60" />
          <line x1="34" y1="70" x2="366" y2="70" />
          {[70, 128, 186, 244, 302].map((x) => (
            <g key={x}>
              <line x1={x} y1="72" x2={x} y2="230" />
              <line x1={x + 18} y1="72" x2={x + 18} y2="230" />
              <rect x={x - 4} y="64" width="26" height="8" />
            </g>
          ))}
          <line x1="30" y1="230" x2="370" y2="230" />
          <line x1="24" y1="238" x2="376" y2="238" />
        </g>
      </svg>
      {caption && <span className="photo__cap">{caption}</span>}
    </div>
  );
}
