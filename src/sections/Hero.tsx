import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { company } from "../data/content";
import { StaticOrb } from "../three/StaticOrb";
import { hasWebGL } from "../three/hasWebGL";

// Heavy 3D bundle is code-split so the page paints instantly.
const Orb = lazy(() => import("../three/Orb").then((m) => ({ default: m.Orb })));

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero({ revealed }: { revealed: boolean }) {
  const heroRef = useRef<HTMLElement>(null);
  const [webgl, setWebgl] = useState(false);

  useEffect(() => {
    setWebgl(hasWebGL());
  }, []);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const lines = ["Transforming complex", "opportunities into"];

  return (
    <section id="home" className="hero" ref={heroRef}>
      <motion.div className="hero__bg" style={{ scale: orbScale }}>
        <div className="hero__sky" />
        <div className="hero__grid" />
        <div className="hero__orb">
          {webgl ? (
            <Suspense fallback={<StaticOrb />}>
              <Orb />
            </Suspense>
          ) : (
            <StaticOrb />
          )}
        </div>
      </motion.div>

      <motion.div className="hero__content container" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.span
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.8, ease: EASE, delay: revealed ? 0.1 : 0 }}
        >
          Global Investment &amp; Project Finance
        </motion.span>

        <h1 className="hero__title serif">
          {lines.map((line, i) => (
            <span className="reveal-mask hero__line" key={i}>
              <motion.span
                className="hero__line-inner"
                initial={{ y: "110%" }}
                animate={revealed ? { y: 0 } : { y: "110%" }}
                transition={{ duration: 0.9, ease: EASE, delay: revealed ? 0.2 + i * 0.1 : 0 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="reveal-mask hero__line">
            <motion.span
              className="hero__line-inner hero__accent"
              initial={{ y: "110%" }}
              animate={revealed ? { y: 0 } : { y: "110%" }}
              transition={{ duration: 0.9, ease: EASE, delay: revealed ? 0.4 : 0 }}
            >
              <span className="italic">enduring value</span>
              <span className="dot">.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 14 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.8, ease: EASE, delay: revealed ? 0.55 : 0 }}
        >
          {company.promise} Independent critical thinking, strategic partnerships and systematic
          execution — the calm intelligence that turns complexity into lasting outcomes.
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 14 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.8, ease: EASE, delay: revealed ? 0.68 : 0 }}
        >
          <a href="#about" className="btn btn--primary">
            Explore the firm <span className="btn__arrow">→</span>
          </a>
          <a href="#portfolio" className="btn btn--ghost">
            View portfolio
          </a>
        </motion.div>
      </motion.div>

      {revealed && (
        <motion.a
          href="#about"
          className="hero__scroll"
          aria-label="Scroll to explore"
          style={{ opacity: contentOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </motion.a>
      )}
    </section>
  );
}
