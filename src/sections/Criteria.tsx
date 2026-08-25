import { Reveal } from "../components/Reveal";
import { criteria } from "../data/content";

export function Criteria() {
  return (
    <section id="criteria" className="section section--paper criteria">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">{criteria.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>{criteria.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              A clear, disciplined mandate — from company profile to structure — so partners know
              exactly where and how we engage.
            </p>
          </Reveal>
        </div>

        <div className="criteria__grid">
          {criteria.groups.map((g, i) => (
            <Reveal key={g.title} delay={0.06 * i} className="criteria__card card">
              <div className="criteria__card-head">
                <span className="criteria__index">0{i + 1}</span>
                <h3 className="criteria__title">{g.title}</h3>
              </div>
              <ul className="criteria__list">
                {g.items.map((it) => (
                  <li key={it}>
                    <span className="criteria__tick" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
