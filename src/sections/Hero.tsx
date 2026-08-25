import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { NetworkCanvas } from "../components/NetworkCanvas";
import { company, stats } from "../data/content";

const slides = [
  {
    kicker: "01 — Analysis",
    title: "Independent\nCritical Thinking",
    body: "Rigorous, unbiased analysis that uncovers value where others see only complexity.",
  },
  {
    kicker: "02 — Partnership",
    title: "Strategic\nPartnerships",
    body: "Deep sector expertise and analytical frameworks that reveal durable competitive advantage.",
  },
  {
    kicker: "03 — Execution",
    title: "Systematic\nExecution",
    body: "Disciplined delivery — from due diligence through value realization and exit.",
  },
];

const DURATION = 5200;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Parallax: content lifts and fades as the visitor scrolls into the site.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const veilOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.4]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), DURATION);
    return () => clearTimeout(t);
  }, [index, paused]);

  const active = slides[index];

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__bg">
        <NetworkCanvas className="hero__net" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__grid" />
        <motion.div className="hero__veil" style={{ opacity: veilOpacity }} />
      </div>

      <motion.div
        className="hero__content container"
        style={{ y: contentY, opacity: contentOpacity }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.span
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Global Investment &amp; Project Finance
        </motion.span>

        <div className="hero__stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="hero__slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hero__kicker">{active.kicker}</span>
              <h1 className="hero__title serif">
                {active.title.split("\n").map((line, li) => (
                  <span className="hero__line reveal-mask" key={li}>
                    <motion.span
                      className="hero__line-inner"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-110%" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: li * 0.08 }}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <motion.p
                className="hero__slide-body"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                {active.body}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          className="hero__promise"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {company.promise}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a href="#about" className="btn btn--primary">
            Explore the firm
            <span className="btn__arrow">→</span>
          </a>
          <a href="#portfolio" className="btn btn--ghost hero__ghost">
            View portfolio
          </a>
        </motion.div>

        {/* Slider controls */}
        <div className="hero__controls">
          <div className="hero__dots" role="tablist" aria-label="Firm principles">
            {slides.map((s, i) => (
              <button
                key={i}
                className={`hero__dot ${i === index ? "is-active" : ""}`}
                aria-label={`Show ${s.title.replace("\n", " ")}`}
                aria-selected={i === index}
                role="tab"
                onClick={() => setIndex(i)}
              >
                <span className="hero__dot-fill" style={{ animationDuration: `${DURATION}ms` }} />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stat ribbon anchored to the base of the opening page */}
      <motion.div
        className="hero__stats container"
        style={{ opacity: contentOpacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
      >
        {stats.map((s) => (
          <div className="hero__stat" key={s.label}>
            <span className="hero__stat-value serif">{s.value}</span>
            <span className="hero__stat-label">{s.label}</span>
          </div>
        ))}
      </motion.div>

    </section>
  );
}
