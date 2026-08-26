import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { LinkedInIcon } from "../components/icons";
import { company, contact } from "../data/content";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [fileName, setFileName] = useState("");

  // Backend: Netlify Forms — usable even though the site is hosted on Cloudflare.
  // The "opportunity" form is registered by the hidden static form in index.html
  // on a companion Netlify deploy (form-processing backend only; nobody visits it).
  // This form cross-posts its multipart/form-data submission — pitch-deck file and
  // all — to that Netlify URL, where Netlify stores it and emails a notification.
  //
  // Configure the Netlify endpoint via VITE_FORM_ENDPOINT (set it in Cloudflare
  // Pages → Settings → Environment variables to your Netlify site URL, e.g.
  // https://rb-capital.netlify.app/). When unset it falls back to "/", which is
  // correct when the site itself is served by Netlify or for local dev.
  //
  // A cross-origin multipart POST is CORS-safelisted, so the data reaches Netlify
  // fine; we send it `no-cors` (the response is then opaque and unreadable, which
  // is why success is inferred from the request not throwing). The mailto fallback
  // in the error branch covers the rare network failure.
  const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || "/";
  const CROSS_ORIGIN = /^https?:\/\//.test(ENDPOINT);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSending(true);
    try {
      const data = new FormData(e.currentTarget);
      await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        // Cross-domain (Cloudflare → Netlify): opaque response, but the POST lands.
        // Same-origin (Netlify-hosted / local): normal request.
        ...(CROSS_ORIGIN ? { mode: "no-cors" as RequestMode } : {}),
      });
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

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
            {!sent && (
              <Reveal><h2 className="display display--md contact-form-title">{contact.form.heading}</h2></Reveal>
            )}
            {sent ? (
              <Reveal className="contact-thanks">
                <p className="display display--md">Thank you.</p>
                <p className="lead">Your submission has been received in confidence. A member of our team will be in touch.</p>
              </Reveal>
            ) : (
              <Reveal>
                <form
                  className="contact-form"
                  name="opportunity"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  encType="multipart/form-data"
                  onSubmit={onSubmit}
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
                  <button
                    type="submit"
                    className="btn btn--solid contact-form__submit"
                    disabled={sending}
                  >
                    {sending ? "Submitting…" : contact.form.submit}
                  </button>
                  {error && (
                    <p className="contact-form__error" role="alert">
                      Something went wrong sending your submission. Please try again, or email{" "}
                      <a href={`mailto:${company.email}`}>{company.email}</a> directly.
                    </p>
                  )}
                  <p className="contact-form__note">{contact.form.note}</p>
                </form>
              </Reveal>
            )}
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
