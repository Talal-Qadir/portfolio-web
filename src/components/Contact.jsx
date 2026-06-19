import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { MapPin, Send, Phone } from "lucide-react";

import { profile, socialLinks } from "../data/portfolio";
import Section from "./Section";
import "./Contact.css";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  mail: FaEnvelope,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Section
      id="contact"
      label="Contact"
      title="Get In Touch"
      subtitle="Have a project or idea? Let's build something amazing together."
    >
      <div className="contact__grid">

        {/* LEFT INFO */}
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3>Let’s talk about your next project</h3>

          <p>
            I’m always open to freelance work, collaborations, or new opportunities.
          </p>

          <ul className="contact__details">
            <li>
              <FaEnvelope size={18} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Phone size={18} />
              <span>{profile.phone}</span>
            </li>

            <li>
              <MapPin size={18} />
              <span>{profile.location}</span>
            </li>
          </ul>

          {/* SOCIALS */}
          <div className="contact__socials">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = iconMap[icon];

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {Icon && <Icon size={18} />}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="contact__field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write something"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn--primary contact__submit">
            <Send size={18} />
            Send Message
          </button>

          {submitted && (
            <p className="contact__success">
              Message sent successfully! I’ll get back to you soon.
            </p>
          )}
        </motion.form>

      </div>
    </Section>
  );
}