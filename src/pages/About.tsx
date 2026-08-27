import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Photo } from "../components/Photo";
import { Reveal } from "../components/Reveal";
import { LinkedInIcon, EmailIcon } from "../components/icons";
import { about, leadership } from "../data/content";

function LeadershipCard({ person, index }: { person: (typeof leadership.people)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={0.06 * index} className={`leader ${open ? "is-open" : ""}`}>
      <button className="leader__portrait" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <Photo
          caption="Principal portrait"
          tone="light"
          src={person.photo || undefined}
          alt={`${person.name}, ${person.title}, RB Capital Ventures`}
          overlay={false}
        />
      </button>
      <div className="leader__head">
        <h3 className="leader__name display">{person.name}</h3>
        <div className="leader__social">
          {person.linkedin && (
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${person.name} on LinkedIn`}>
              <LinkedInIcon size={17} />
            </a>
          )}
          {person.email && (
            <a href={`mailto:${person.email}`} aria-label={`Email ${person.name}`}>
              <EmailIcon size={17} />
            </a>
          )}
        </div>
      </div>
      <span className="leader__title">{person.title}</span>
      <p className="leader__bio">{person.bio}</p>
      <button className="leader__toggle" onClick={() => setOpen((v) => !v)}>
        {open ? "Close" : "Read biography"}
      </button>
    </Reveal>
  );
}

export function About() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        caption={about.hero.caption}
        src="/images/about/about-hero.jpg"
        alt="Architectural blueprint of a neoclassical Corinthian colonnade"
      />

      {/* Firm statement */}
      <section className="section section--parchment">
        <div className="container about-grid">
          <Reveal className="about-grid__label">
            <span className="eyebrow">The Firm</span>
          </Reveal>
          <div className="about-grid__body">
            {about.body.map((para, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className={i === 0 ? "display display--md about-lead" : "about-para"}>{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <Reveal><span className="eyebrow">{about.approach.eyebrow}</span></Reveal>
          </div>
          <div className="approach">
            {about.approach.items.map((a, i) => (
              <Reveal key={a.title} delay={0.07 * i} className="approach__item">
                <hr className="rule" />
                <div className="approach__row">
                  <h3 className="approach__title display display--md">{a.title}</h3>
                  <p className="approach__body">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Leadership */}
      <section id="leadership" className="section section--stone">
        <div className="container">
          <div className="section-head">
            <Reveal><span className="eyebrow">{leadership.eyebrow}</span></Reveal>
            <Reveal delay={0.05}><h2 className="display display--lg">{leadership.heading}</h2></Reveal>
            <Reveal delay={0.1}><p className="lead">{leadership.body}</p></Reveal>
          </div>
          <div className="leaders">
            {leadership.people.map((p, i) => (
              <LeadershipCard key={p.name} person={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
