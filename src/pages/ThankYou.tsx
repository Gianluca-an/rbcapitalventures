import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { contact } from "../data/content";

// Netlify redirects here after a successful "opportunity" form submission
// (the form's action="/thank-you"). Served via the SPA fallback.
export function ThankYou() {
  return (
    <section className="contact-hero contact-hero--thanks">
      <div className="container">
        <Reveal><span className="eyebrow">{contact.hero.eyebrow}</span></Reveal>
        <Reveal delay={0.05}>
          <h1 className="display display--xl contact-hero__title">Thank you.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lead contact-hero__body">
            Your submission has been received in confidence. A member of our team will review it
            and be in touch.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="contact-thanks__back">
            <Link to="/" className="btn btn--light">Return home</Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
