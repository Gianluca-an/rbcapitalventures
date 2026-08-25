import { useEffect } from "react";
import { motion } from "framer-motion";
import { company } from "../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Cinematic auto-reveal intro. A transparent overlay so the live WebGL orb +
 * prismatic ribbon (in the Hero) show through — the wordmark title card fades
 * in, holds, then lifts away, revealing the site. Skippable + reduced-motion.
 */
export function Intro({ onReveal, reduced }: { onReveal: () => void; reduced: boolean }) {
  useEffect(() => {
    const t = setTimeout(onReveal, reduced ? 400 : 2000);
    return () => clearTimeout(t);
  }, [onReveal, reduced]);

  return (
    <motion.div
      className="intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -32, transition: { duration: 0.65, ease: EASE } }}
    >
      <div className="intro__backdrop" />
      <div className="intro__inner">
        <motion.span
          className="eyebrow intro__eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: reduced ? 0 : 0.1 }}
        >
          Global Investment &amp; Project Finance
        </motion.span>
        <motion.h1
          className="intro__wm serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: reduced ? 0 : 0.24 }}
        >
          {company.name}
        </motion.h1>
        <motion.p
          className="intro__tag"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: reduced ? 0 : 0.42 }}
        >
          {company.promise}
        </motion.p>
      </div>

      {!reduced && (
        <button className="intro__skip" onClick={onReveal} aria-label="Skip intro">
          Skip
        </button>
      )}
    </motion.div>
  );
}
