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
// true = play the intro once per browser session; false = play it on every load.
const INTRO_ONCE_PER_SESSION = false;

export default function App() {
  useSmoothScroll();
  const reduced = prefersReducedMotion();

  const [seen] = useState(() => {
    if (!INTRO_ONCE_PER_SESSION) return false;
    try {
      return sessionStorage.getItem(INTRO_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [revealed, setRevealed] = useState(seen);

  const reveal = useCallback(() => {
    setRevealed(true);
    if (INTRO_ONCE_PER_SESSION) {
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {
        /* private mode — intro simply plays each load */
      }
    }
  }, []);

  // Land at the top on every load, regardless of browser scroll restoration.
  useEffect(() => {
    window.scrollTo(0, 0);
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
