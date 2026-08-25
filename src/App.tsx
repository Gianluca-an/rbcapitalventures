import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Approach } from "./sections/Approach";
import { About } from "./sections/About";
import { Criteria } from "./sections/Criteria";
import { Sectors } from "./sections/Sectors";
import { Portfolio } from "./sections/Portfolio";
import { Contact } from "./sections/Contact";

export default function App() {
  useSmoothScroll();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Approach />
        <Criteria />
        <Sectors />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
