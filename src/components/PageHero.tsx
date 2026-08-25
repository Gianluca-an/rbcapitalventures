import { motion } from "framer-motion";
import { Photo } from "./Photo";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Full-bleed photographic hero used at the top of each interior page. */
export function PageHero({
  eyebrow,
  title,
  caption,
  size = "lg",
}: {
  eyebrow: string;
  title: string[];
  caption?: string;
  size?: "lg" | "xl";
}) {
  return (
    <section className={`pagehero pagehero--${size}`}>
      <Photo caption={caption} tone="dark" className="pagehero__bg" />
      <div className="container pagehero__inner">
        <motion.span
          className="eyebrow pagehero__eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          {eyebrow}
        </motion.span>
        <h1 className="pagehero__title display display--xl">
          {title.map((line, i) => (
            <motion.span
              key={i}
              className="pagehero__line"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.09 }}
            >
              {line}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  );
}
