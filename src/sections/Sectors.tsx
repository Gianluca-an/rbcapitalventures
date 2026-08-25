import { Reveal } from "../components/Reveal";
import { sectors } from "../data/content";

export function Sectors() {
  return (
    <section className="section sectors">
      <div className="container">
        <div className="sectors__head">
          <div className="section-head sectors__intro">
            <Reveal>
              <span className="eyebrow">Sectors of focus</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2>
                Breadth across the <span className="serif italic accent-text">real economy.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                From energy transition and infrastructure to healthcare, technology and advanced
                manufacturing — we invest where durable value is built.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="sectors__grid">
          {sectors.map((s, i) => (
            <Reveal as="div" key={s} delay={0.03 * (i % 6)} className="sectors__item">
              <span className="sectors__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="sectors__name">{s}</span>
              <span className="sectors__arrow" aria-hidden="true">→</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
