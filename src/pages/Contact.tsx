import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { LinkedInIcon } from "../components/icons";
import { company, contact } from "../data/content";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [fileName, setFileName] = useState("");

  // Contact form backend: Web3Forms (free, host-agnostic — works on Cloudflare
  // Pages, no server code). Submissions, including the pitch-deck attachment, are
  // POSTed to the Web3Forms API and emailed to the address tied to the access key.
  //
  // The Web3Forms access key is public by design (it only routes submissions to
  // the destination inbox), so it is safe in the client bundle. It can be
  // overridden at build time with VITE_WEB3FORMS_KEY; otherwise this default is used.
  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "83a9ff17-448e-4d1c-be69-8505ebac0a6d";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSending(true);
    try {
      const data = new FormData(e.currentTarget);
      data.append("access_key", ACCESS_KEY);
      data.append("subject", "New opportunity submission via rbcapitalventures.com");
      data.append("from_name", "RB Capital Ventures Website");
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) setSent(true);
      else throw new Error(json.message || "submission failed");
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
                <form className="contact-form" onSubmit={onSubmit}>
                  {/* Web3Forms honeypot: bots tick this hidden box; real people never see it. */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden-field"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                  <div className="field">
                    <label htmlFor="name">{contact.form.fields.name}</label>
                    <input id="name" name="name" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="company">{contact.form.fields.company}</label>
                    <input id="company" name="company" type="text" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">{contact.form.fields.phone}</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" />
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
                        name="attachment"
                        type="file"
                        accept=".pdf,.ppt,.pptx,.key"
                        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                      />
                      <span className="upload__btn">Choose file</span>
                      <span className="upload__name">{fileName || "PDF OF EXECUTIVE SUMMARY OR PRESENTATION, UP TO 25 MB"}</span>
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
