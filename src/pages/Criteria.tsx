import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { criteria } from "../data/content";

export function Criteria() {
  return (
    <>
      <PageHero eyebrow={criteria.hero.eyebrow} title={criteria.hero.title} caption={criteria.hero.caption} />

      <section className="section section--parchment">
        <div className="container container--narrow center">
          <Reveal><p className="statement display display--md">{criteria.intro}</p></Reveal>
        </div>
      </section>

      {/* Criteria items */}
      <section className="section section--white section--tight">
        <div className="container">
          <div className="criteria-list">
            {criteria.items.map((c, i) => (
              <Reveal key={c.title} delay={0.05 * i} className="criteria-item">
                <hr className="rule" />
                <div className="criteria-item__row">
                  <div className="criteria-item__head">
                    <span className="criteria-item__index">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="display display--md">{c.title}</h3>
                  </div>
                  <p className="criteria-item__body">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="section section--stone">
        <div className="container geography">
          <div className="geography__text">
            <Reveal><span className="eyebrow">Geography</span></Reveal>
            <Reveal delay={0.05}><h2 className="display display--lg">{criteria.geography.title}</h2></Reveal>
            <Reveal delay={0.1}><p className="lead">{criteria.geography.body}</p></Reveal>
          </div>
          <ul className="geography__regions">
            {criteria.geography.regions.map((r, i) => (
              <Reveal key={r} delay={0.03 * i} as="li" className="geography__region">{r}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Investment Structures */}
      <section className="section section--navy">
        <div className="container container--narrow center">
          <Reveal><span className="eyebrow">Investment Structures</span></Reveal>
          <Reveal delay={0.05}><h2 className="display display--md structures__heading">{criteria.structures.body}</h2></Reveal>
          <Reveal delay={0.1}><p className="lead structures__note">{criteria.structures.note}</p></Reveal>
        </div>
      </section>
    </>
  );
}
