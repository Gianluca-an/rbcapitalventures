import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { portfolio } from "../data/content";

const regions = ["All", "Americas", "Europe", "Caribbean", "Global"] as const;
type Region = (typeof regions)[number];

export function Portfolio() {
  const [region, setRegion] = useState<Region>("All");

  const shown = useMemo(
    () => (region === "All" ? portfolio : portfolio.filter((p) => p.region === region)),
    [region],
  );

  return (
    <section id="portfolio" className="section section--ink portfolio">
      <div className="container">
        <div className="portfolio__head">
          <div>
            <Reveal>
              <span className="eyebrow">Selected portfolio</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>
                Complex opportunities, <br />
                <span className="serif italic">enduring value.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="portfolio__filters">
            {regions.map((r) => (
              <button
                key={r}
                className={`chip ${region === r ? "is-active" : ""}`}
                onClick={() => setRegion(r)}
              >
                {r}
              </button>
            ))}
          </Reveal>
        </div>

        <motion.div className="portfolio__grid" layout>
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.article
                key={p.title + p.location}
                className="portfolio__card"
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="portfolio__card-top">
                  <span className="portfolio__amount serif">{p.amount}</span>
                  <span className="portfolio__sector">{p.sector}</span>
                </div>
                <h3 className="portfolio__title">{p.title}</h3>
                <p className="portfolio__body">{p.body}</p>
                <div className="portfolio__loc">
                  <span className="portfolio__pin" aria-hidden="true" />
                  {p.location}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1} className="portfolio__note">
          Figures reflect project and transaction value across active and completed mandates.
        </Reveal>
      </div>
    </section>
  );
}
