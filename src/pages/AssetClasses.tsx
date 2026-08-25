import { PageHero } from "../components/PageHero";
import { Photo } from "../components/Photo";
import { Reveal } from "../components/Reveal";
import { assetClasses } from "../data/content";

export function AssetClasses() {
  return (
    <>
      <PageHero eyebrow={assetClasses.hero.eyebrow} title={assetClasses.hero.title} caption={assetClasses.hero.caption} />

      <section className="section section--parchment">
        <div className="container container--narrow center">
          <Reveal><p className="statement display display--md">{assetClasses.intro}</p></Reveal>
        </div>
      </section>

      <section className="section--white altrows">
        {assetClasses.items.map((item, i) => (
          <div key={item.title} className={`altrow ${i % 2 === 1 ? "altrow--reversed" : ""}`}>
            <Reveal className="altrow__figure" as="figure">
              <Photo caption={item.caption} tone={i % 2 === 1 ? "dark" : "light"} />
            </Reveal>
            <div className="altrow__text">
              <Reveal><span className="altrow__index">{String(i + 1).padStart(2, "0")}</span></Reveal>
              <Reveal delay={0.05}><h2 className="display display--md">{item.title}</h2></Reveal>
              <Reveal delay={0.1}><p className="lead altrow__body">{item.body}</p></Reveal>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
