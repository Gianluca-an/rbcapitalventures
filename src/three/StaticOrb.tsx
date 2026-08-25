/**
 * CSS fallback sphere — used when WebGL is unavailable.
 * Mirrors the look of the 3D orb closely enough to keep the hero intact.
 */
export function StaticOrb() {
  return (
    <div className="staticorb" aria-hidden="true">
      <div className="staticorb__glow" />
      <div className="staticorb__ball" />
      <div className="staticorb__reflection" />
    </div>
  );
}
