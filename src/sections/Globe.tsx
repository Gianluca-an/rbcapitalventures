import { Reveal } from "../components/Reveal";

const stats = [
  { b: "10+", s: "Countries" },
  { b: "4", s: "Continents" },
  { b: "$690M+", s: "Project value" },
];

export function Globe() {
  return (
    <section className="section section--ink globe-sec">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">Global reach</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>
              The world, <em>seen whole.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead" style={{ marginInline: "auto" }}>
              From the Americas to Europe, the Caribbean and Asia — RB partners across borders,
              structures and sectors, guided by one clear point of view.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="globe-wrap">
          <div className="globe" aria-hidden="true">
            <span className="globe__ring" />
            <span className="globe__ring globe__ring--2" />
          </div>
        </Reveal>

        <div className="globe__stats">
          {stats.map((x, i) => (
            <Reveal key={x.s} delay={0.08 * i} className="globe__stat">
              <b>{x.b}</b>
              <span>{x.s}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
