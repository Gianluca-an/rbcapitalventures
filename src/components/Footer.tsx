import { Link } from "react-router-dom";
import { company, nav } from "../data/content";
import { LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <span className="footer__mark serif">RB Capital Ventures</span>
          <p className="footer__line">Private capital. Long-term perspective.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {nav.map((n) => (
            <Link key={n.href} to={n.href} className="footer__link">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="footer__offices">
          <div className="footer__office">
            <span className="footer__office-label">{company.offices.registered.label}</span>
            {company.offices.registered.lines.map((l) => (
              <span key={l} className="footer__addr">{l}</span>
            ))}
          </div>
          <div className="footer__office">
            <span className="footer__office-label">{company.offices.us.label}</span>
            {company.offices.us.lines.map((l) => (
              <span key={l} className="footer__addr">{l}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__presence">
        {company.presence.join("  ·  ")}
      </div>

      <hr className="rule footer__rule" />

      <div className="container footer__bar">
        <span className="footer__copy">© {company.year} {company.legalName} All rights reserved.</span>
        <div className="footer__meta">
          <Link to="/contact" className="footer__meta-link">Contact</Link>
          <a
            href={company.linkedin}
            className="footer__social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Latest News &amp; Insights on LinkedIn"
            title="Latest News &amp; Insights"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
