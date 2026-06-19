import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import "./Hero.css";
import profileImg from "../assets/Talal_Image.jpg";

function HeroProfileImage() {
  const [hasError, setHasError] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="hero__profile">
      <div className="hero__profile-glow" aria-hidden="true" />
      <div className="hero__profile-ring">
        {!hasError ? (
          <img
            src={profileImg}
            alt="Muhammad Talal Qadir profile"
            className="hero__profile-img"
            />
        ) : (
          <div className="hero__profile-fallback" aria-label={profile.name}>
            {initials}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = profile.roles[roleIndex];
    const speed = isDeleting ? 45 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % profile.roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="hero__badge">Available for new opportunities</span>

          <p className="hero__greeting">
            Hello, I&apos;m <span className="gradient-text">{profile.name}</span>
          </p>

          <h1 className="hero__title">
            Building digital products with clean code &amp; great UX.
          </h1>

          <p className="hero__typing">
            I&apos;m a{" "}
            <span className="hero__typed">
              {text}
              <span className="hero__cursor">|</span>
            </span>
          </p>

          <p className="hero__description">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--secondary">
              <Mail size={18} />
              Hire Me
            </a>
            <a href="/Muhammad_Talal_Qadir_Resume.pdf" download className="btn btn--ghost">
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <HeroProfileImage />

          <div className="hero__card">
            <div className="hero__card-header">
              <span />
              <span />
              <span />
              <p>developer.js</p>
            </div>
            <pre className="hero__code">
              <code>
                {`const developer = {
  name: "${profile.name}",
  role: "${profile.title}",
  stack: ["React", "Django", "Python"],
  passion: "Building great products"
};`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
