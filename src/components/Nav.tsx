import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, company } from "../data/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__brand" aria-label={`${company.name} — home`}>
          <Logo variant="dark" size={36} />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="#contact" className="btn btn--primary nav__cta">
            Get in Touch
          </a>
          <button
            className="nav__burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="nav__drawer-link" onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>
          Get in Touch
        </a>
      </div>
    </header>
  );
}
