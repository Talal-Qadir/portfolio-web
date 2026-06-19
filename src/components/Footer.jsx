import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { profile, socialLinks } from "../data/portfolio";
import "./Footer.css";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  mail: FaEnvelope,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* Top */}
        <div className="footer__top">
          <div className="footer__brand">
            <h3>{profile.name}</h3>
            <p>{profile.title} · React · Django · Python</p>
            
          </div>
          
        </div>

        {/* Socials */}
        <div className="footer__socials">
          {socialLinks.map(({ label, href, icon }) => {
            const Icon = iconMap[icon];

            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer__social-link"
              >
                {Icon && <Icon size={18} />}
              </a>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>© {year} {profile.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}