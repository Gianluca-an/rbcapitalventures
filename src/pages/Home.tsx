import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Photo } from "../components/Photo";
import { Reveal } from "../components/Reveal";
import { home } from "../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Home() {
  const { hero, pillars, sectorsTeaser, aboutTransition, contactCta } = home;

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="home-hero">
        <Photo
          caption={hero.caption}
          src="/images/home/hero-dc.jpg"
          alt="Architectural rendering of the Washington, D.C. skyline — the United States Capitol, Washington Monument and Lincoln Memorial"
          tone="dark"
          className="home-hero__bg"
        />
        <div className="container home-hero__inner">
          <motion.span
            className="eyebrow home-hero__eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            {hero.eyebrow}
          </motion.span>
          <h1 className="home-hero__title display display--xl">
            {hero.title.map((line, i) => (
              <motion.span
                key={i}
                className="home-hero__line"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease: EASE, delay: 0.22 + i * 0.1 }}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="home-hero__body"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          >
            {hero.body}
          </motion.p>
          <motion.div
            className="home-hero__cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.62 }}
          >
            <Link to="/about" className="btn btn--light">About RBCV</Link>
            <Link to="/contact" className="link home-hero__link">
              Start a Conversation <span className="link__arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Positioning line ---------------- */}
      <section className="section section--parchment">
        <div className="container container--narrow center">
          <Reveal>
            <p className="statement display display--md">
              We partner with established businesses, management teams and project sponsors at important
              stages of growth — including select opportunities approaching{" "}
              <span className="italic">pre-IPO, strategic investment and M&amp;A.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Three pillars ---------------- */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <Reveal><span className="eyebrow">{pillars.eyebrow}</span></Reveal>
            <Reveal delay={0.05}><h2 className="display display--lg">{pillars.heading}</h2></Reveal>
          </div>
          <div className="pillars">
            {pillars.items.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i} className="pillar">
                <span className="pillar__index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="pillar__title display display--md">{p.title}</h3>
                <p className="pillar__body">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Sectors teaser (full-bleed) ---------------- */}
      <section className="fullbleed">
        <Photo
          caption={sectorsTeaser.caption}
          src="/images/home/sectors-baltimore.jpg"
          alt="Architectural rendering of the Baltimore Inner Harbour skyline and the Chesapeake lightship"
          tone="dark"
          className="fullbleed__bg"
        />
        <div className="container fullbleed__inner">
          <Reveal><span className="eyebrow">{sectorsTeaser.eyebrow}</span></Reveal>
          <Reveal delay={0.05}><h2 className="display display--lg fullbleed__title">{sectorsTeaser.heading}</h2></Reveal>
          <Reveal delay={0.1}><p className="lead fullbleed__lead">{sectorsTeaser.body}</p></Reveal>
          <Reveal delay={0.15}>
            <Link to="/sectors" className="link fullbleed__link">Explore Sectors <span className="link__arrow">→</span></Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- About transition ---------------- */}
      <section className="section section--parchment">
        <div className="container about-transition">
          <div className="about-transition__text">
            <Reveal><span className="eyebrow">{aboutTransition.eyebrow}</span></Reveal>
            <Reveal delay={0.05}><h2 className="display display--lg">{aboutTransition.heading}</h2></Reveal>
            <Reveal delay={0.1}><p className="lead">{aboutTransition.body}</p></Reveal>
            <Reveal delay={0.15}>
              <Link to="/about" className="link">Learn More <span className="link__arrow">→</span></Link>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="about-transition__figure" as="figure">
            <Photo
            caption="London skyline"
            src="/images/home/about-london.jpg"
            alt="Architectural rendering of the London skyline — Big Ben, St Paul's Cathedral and Tower Bridge"
            tone="light"
            overlay={false}
          />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Contact CTA ---------------- */}
      <section className="section section--navy contact-cta">
        <div className="container center">
          <Reveal><h2 className="display display--lg">{contactCta.heading}</h2></Reveal>
          <Reveal delay={0.05}><p className="lead contact-cta__lead">{contactCta.body}</p></Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="btn btn--light contact-cta__btn">Start a Conversation</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
