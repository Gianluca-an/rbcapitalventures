import { Reveal } from "../components/Reveal";

const rows = [
  {
    num: "$690M+",
    label: "in project value",
    desc: "Across fifteen active and completed mandates worldwide.",
  },
  {
    num: "15",
    label: "mandates",
    desc: "From green hydrogen and renewable fuels to hospitality, real estate and med-tech.",
  },
  {
    num: "12",
    label: "sectors of focus",
    desc: "Breadth across the real economy, from energy transition to advanced manufacturing.",
  },
  {
    num: "4",
    label: "continents",
    desc: "A genuinely global footprint — the Americas, Europe, the Caribbean and Asia.",
  },
];

export function Opportunity() {
  return (
    <section id="opportunity" className="section section--sky opportunity">
      <div className="container opp__grid">
        <div className="opp__intro">
          <Reveal>
            <span className="eyebrow">The opportunity</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>
              Complexity, <span className="serif italic accent-text">clearly read.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              RB engages where capital, infrastructure and ambition meet — underwriting projects
              others find too complex, and turning them into enduring value.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="#portfolio" className="btn btn--ghost">
              Explore the portfolio <span className="btn__arrow">→</span>
            </a>
          </Reveal>
        </div>

        <div className="opp__stats">
          {rows.map((r, i) => (
            <Reveal key={r.label} delay={0.06 * i} className="opp__stat">
              <div className="opp__stat-top">
                <span className="opp__num">{r.num}</span>
                <span className="opp__label">{r.label}</span>
              </div>
              <p className="opp__desc">{r.desc}</p>
            </Reveal>
          ))}
          <Reveal delay={0.28} className="opp__source">
            Figures reflect project and transaction value across active and completed mandates.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
