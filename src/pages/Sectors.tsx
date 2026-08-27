import { PageHero } from "../components/PageHero";
import { Photo } from "../components/Photo";
import { Reveal } from "../components/Reveal";
import { sectors } from "../data/content";

export function Sectors() {
  return (
    <>
      <PageHero
        eyebrow={sectors.hero.eyebrow}
        title={sectors.hero.title}
        caption={sectors.hero.caption}
        src="/images/sectors/hero.jpg"
        alt="Architectural blueprint of a life-sciences laboratory interior"
      />

      <section className="section section--parchment">
        <div className="container container--narrow center">
          <Reveal><p className="statement display display--md">{sectors.intro}</p></Reveal>
        </div>
      </section>

      <section className="section--white section--tight">
        <div className="container">
          <div className="sector-tiles">
            {sectors.items.map((s, i) => (
              <Reveal key={s.title} delay={0.05 * (i % 3)} className="sector-tile" as="figure">
                <div className="sector-tile__img">
                  <Photo caption={s.caption} tone="dark" />
                </div>
                <h3 className="sector-tile__title display display--md">{s.title}</h3>
                <p className="sector-tile__body">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="sectors-note lead">{sectors.note}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
