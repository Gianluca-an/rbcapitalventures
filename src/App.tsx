import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Opportunity } from "./sections/Opportunity";
import { Approach } from "./sections/Approach";
import { Criteria } from "./sections/Criteria";
import { Sectors } from "./sections/Sectors";
import { Portfolio } from "./sections/Portfolio";
import { Globe } from "./sections/Globe";
import { Contact } from "./sections/Contact";

export default function App() {
  useSmoothScroll();
  return (
    <>
      <Nav />
      <main>
        <Hero />
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
    </>
  );
}
