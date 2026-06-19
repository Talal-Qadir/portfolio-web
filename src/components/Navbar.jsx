import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile, sectionIds } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${menuOpen ? "navbar--open" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleNavClick}>
        <span className="navbar__brand-mark">∞</span>
          <span className="navbar__brand-text">
            <strong>{profile.name.split(" ")[0]}</strong>
            <small>{profile.title}</small>
          </span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          {navLinks.map(({ label, href }) => {
            const sectionId = href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={href}
                href={href}
                className={`navbar__link ${isActive ? "navbar__link--active" : ""}`}
                onClick={handleNavClick}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="navbar__actions">
          <a href="#contact" className="btn btn--primary navbar__cta">
            Let&apos;s Talk
          </a>

          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
