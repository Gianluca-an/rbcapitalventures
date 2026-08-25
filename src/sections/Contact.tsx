import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { company, contact } from "../data/content";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = encodeURIComponent(String(data.get("name") || ""));
    const email = encodeURIComponent(String(data.get("email") || ""));
    const message = encodeURIComponent(String(data.get("message") || ""));
    // No backend yet — open the visitor's mail client, pre-filled.
    window.location.href = `mailto:${company.email}?subject=Enquiry from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`;
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <Reveal>
            <span className="eyebrow">{contact.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="contact__heading">{contact.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="contact__body">{contact.body}</p>
          </Reveal>

          <Reveal delay={0.15} className="contact__details">
            <div className="contact__detail">
              <span className="contact__detail-label">Email</span>
              <a href={`mailto:${company.email}`} className="contact__detail-value contact__link">
                {company.email}
              </a>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Address</span>
              <span className="contact__detail-value">
                {company.address.line1}
                <br />
                {company.address.line2}
              </span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Registration</span>
              <span className="contact__detail-value">{company.registration}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="contact__form-wrap">
          <form className="contact__form card" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell us about your opportunity…" required />
            </div>
            <button type="submit" className="btn btn--primary contact__submit">
              {sent ? "Opening your mail client…" : "Send message"}
              <span className="btn__arrow">→</span>
            </button>
            <p className="contact__form-note">
              Prefer email? Reach us directly at{" "}
              <a href={`mailto:${company.email}`} className="contact__link">
                {company.email}
              </a>
              .
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
