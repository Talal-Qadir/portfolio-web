import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { MapPin, Send, Phone } from "lucide-react";

import { profile, socialLinks } from "../data/portfolio";
import Section from "./Section";
import "./Contact.css";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  // twitter: FaTwitter,
  mail: FaEnvelope,
};

export default function Contact() {
  const [state, handleSubmit] = useForm("mqeorbkk");

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
            <input name="name" type="text" required />
          </div>

          <div className="contact__field">
            <label>Email</label>
            <input name="email" type="email" required />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="contact__field">
            <label>Message</label>
            <textarea name="message" rows={5} required />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            className="btn btn--primary contact__submit"
            disabled={state.submitting}
          >
            <Send size={18} />
            {state.submitting ? "Sending..." : "Send Message"}
          </button>

          {state.succeeded && (
            <p className="contact__success">
              Message sent successfully! I’ll get back to you soon.
            </p>
          )}
        </motion.form>

      </div>
    </Section>
  );
}
