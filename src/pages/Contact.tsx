import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { LinkedInIcon } from "../components/icons";
import { company, contact } from "../data/content";

export function Contact() {
  const [fileName, setFileName] = useState("");

  // Backend: Netlify Forms (site is hosted on Netlify, so this posts same-origin).
  //
  // This is a NATIVE form submission — no JavaScript fetch/AJAX. The browser POSTs
  // the multipart/form-data body (pitch-deck file included) straight to Netlify,
  // which reliably captures file uploads this way; an AJAX submission does not.
  //
  // The action points at /thank-you.html — a REAL static file in public/, NOT a
  // React route. This matters: the SPA catch-all rewrite (/* -> /index.html) would
  // otherwise swallow the POST and 400. A real file is served directly, so Netlify
  // processes the submission, then redirects there. The hidden detection form in
  // index.html registers the "opportunity" form at build time.
  //
  // NOTE: no e.preventDefault — the page must actually navigate for Netlify to
  // process the POST. The `form-name` hidden field must match the registered form.
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <Reveal><span className="eyebrow">{contact.hero.eyebrow}</span></Reveal>
          <Reveal delay={0.05}>
            <h1 className="display display--xl contact-hero__title">{contact.hero.title[0]}</h1>
          </Reveal>
          <Reveal delay={0.1}><p className="lead contact-hero__body">{contact.body}</p></Reveal>
          <Reveal delay={0.13}><p className="contact-hero__body2">{contact.body2}</p></Reveal>
        </div>
      </section>

      <section className="section section--white contact-main">
        <div className="container contact-grid">
          {/* Form */}
          <div className="contact-form-wrap">
            <Reveal><h2 className="display display--md contact-form-title">{contact.form.heading}</h2></Reveal>
            <Reveal>
              <form
                className="contact-form"
                name="opportunity"
                method="POST"
                action="/thank-you.html"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                encType="multipart/form-data"
              >
                <input type="hidden" name="form-name" value="opportunity" />
                <p className="hidden-field" aria-hidden="true">
                  <label>
                    Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="field">
                    <label htmlFor="name">{contact.form.fields.name}</label>
                    <input id="name" name="name" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="company">{contact.form.fields.company}</label>
                    <input id="company" name="company" type="text" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">{contact.form.fields.email}</label>
                    <input id="email" name="email" type="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="overview">{contact.form.fields.overview}</label>
                    <textarea id="overview" name="overview" rows={5} required />
                  </div>
                  <div className="field">
                    <label htmlFor="deck">{contact.form.fields.upload}</label>
                    <label className="upload">
                      <input
                        id="deck"
                        name="deck"
                        type="file"
                        accept=".pdf,.ppt,.pptx,.key"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                      />
                      <span className="upload__btn">Choose file</span>
                      <span className="upload__name">{fileName || "PDF or presentation, up to 25 MB"}</span>
                    </label>
                  </div>
                  <button type="submit" className="btn btn--solid contact-form__submit">
                    {contact.form.submit}
                  </button>
                  <p className="contact-form__note">{contact.form.note}</p>
                </form>
              </Reveal>
          </div>

          {/* Details */}
          <aside className="contact-details">
            <Reveal className="contact-block">
              <span className="eyebrow">Enquiries</span>
              <a href={`mailto:${company.email}`} className="contact-email">{company.email}</a>
              <a
                href={company.linkedin}
                className="contact-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon size={16} /> Latest News &amp; Insights
              </a>
            </Reveal>

            <Reveal delay={0.05} className="contact-block">
              <span className="eyebrow">{company.offices.registered.label}</span>
              <address className="contact-address">
                {company.offices.registered.lines.map((l) => <span key={l}>{l}</span>)}
                <span className="contact-reg">{company.offices.registered.note}</span>
              </address>
            </Reveal>

            <Reveal delay={0.1} className="contact-block">
              <span className="eyebrow">{company.offices.us.label}</span>
              <address className="contact-address">
                {company.offices.us.lines.map((l) => <span key={l}>{l}</span>)}
              </address>
            </Reveal>

            <Reveal delay={0.15} className="contact-block">
              <span className="eyebrow">Market Presence</span>
              <p className="contact-presence">{company.presence.join("  ·  ")}</p>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
