import { Logo } from "./Logo";
import { company, nav } from "../data/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="light" size={40} idKey="ftr" />
          <p className="footer__promise">{company.promise}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <span className="footer__nav-title">Explore</span>
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="footer__link">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <span className="footer__nav-title">Contact</span>
          <a href={`mailto:${company.email}`} className="footer__link">
            {company.email}
          </a>
          <span className="footer__addr">
            {company.address.line1}
            <br />
            {company.address.line2}
          </span>
          <span className="footer__addr">Reg. &amp; Financial Services No. {company.registration}</span>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span>
            © {company.year} {company.legalName}. All rights reserved.
          </span>
          <span className="footer__fine">Global Investment &amp; Project Financing</span>
        </div>
      </div>
    </footer>
  );
}
