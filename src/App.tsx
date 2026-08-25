import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { prefersReducedMotion } from "./three/hasWebGL";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Intro } from "./sections/Intro";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Opportunity } from "./sections/Opportunity";
import { Approach } from "./sections/Approach";
import { Criteria } from "./sections/Criteria";
import { Sectors } from "./sections/Sectors";
import { Portfolio } from "./sections/Portfolio";
import { Globe } from "./sections/Globe";
import { Contact } from "./sections/Contact";

const INTRO_KEY = "rbcv_intro_seen";

export default function App() {
  useSmoothScroll();
  const reduced = prefersReducedMotion();

  // Show the intro once per browser session.
  const [seen] = useState(() => {
    try {
      return sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [revealed, setRevealed] = useState(seen);

  const reveal = useCallback(() => {
    setRevealed(true);
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* private mode — intro simply plays each load */
    }
  }, []);

  // Lock scroll while the intro plays.
  useEffect(() => {
    if (!revealed) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [revealed]);

  return (
    <>
      <Nav revealed={revealed} />
      <main>
        <Hero revealed={revealed} />
        <About />
        <Opportunity />
        <Approach />
        <Criteria />
        <Sectors />
        <Portfolio />
        <Globe />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {!revealed && <Intro key="intro" onReveal={reveal} reduced={reduced} />}
      </AnimatePresence>
    </>
  );
}
