import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { nav } from "../data/content";

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
        <Link to="/" className="nav__brand" aria-label={`${company_name} home`} onClick={() => setOpen(false)}>
          <Logo variant={scrolled ? "dark" : "light"} />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span />
        </button>
      </div>

      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
        {nav.map((item) => (
          <NavLink key={item.href} to={item.href} className="nav__drawer-link" onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

const company_name = "RB Capital Ventures";
