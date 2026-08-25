import { Reveal } from "../components/Reveal";
import { about } from "../data/content";

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__intro">
          <Reveal>
            <span className="eyebrow">{about.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="about__heading">
              A global investment and <span className="serif italic accent-text">project-financing</span> partner.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about__body">{about.body}</p>
          </Reveal>
        </div>

        <div className="about__values">
          {about.values.map((v, i) => (
            <Reveal key={v.title} delay={0.08 * i} className="about__value card">
              <span className="about__value-index">0{i + 1}</span>
              <h3 className="about__value-title">{v.title}</h3>
              <p className="about__value-body">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
