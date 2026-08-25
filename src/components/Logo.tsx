import { company } from "../data/content";

/**
 * Restrained institutional lockup — a sharp-cornered monogram + serif wordmark
 * (echoing the boxed mark used by family offices such as Samson).
 */
export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <span className={`logo logo--${variant}`} aria-label={company.legalName}>
      <span className="logo__mark" aria-hidden="true">RB</span>
      <span className="logo__word">RB Capital Ventures</span>
    </span>
  );
}
