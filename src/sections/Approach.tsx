import { Reveal } from "../components/Reveal";
import { pillars } from "../data/content";

const marks = [
  // three simple line-icons, one per pillar
  <svg viewBox="0 0 24 24" fill="none" key="a">
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M11 8.2v5.6M8.2 11h5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" key="b">
    <path d="M4 15c3-1 4-9 8-9s5 8 8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="4" cy="18" r="1.6" fill="currentColor" />
    <circle cx="20" cy="12" r="1.6" fill="currentColor" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" key="c">
    <path d="M4 12.5l5 5L20 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function Approach() {
  return (
    <section id="approach" className="section section--ink approach">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Our approach</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>
              Three disciplines behind <br />
              <span className="serif italic">every decision.</span>
            </h2>
          </Reveal>
        </div>

        <div className="approach__grid">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i} className="approach__card">
              <span className="approach__icon">{marks[i]}</span>
              <h3 className="approach__title">{p.title}</h3>
              <p className="approach__body">{p.body}</p>
              <span className="approach__num">0{i + 1}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
