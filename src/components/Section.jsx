import { motion } from "framer-motion";

export default function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className = "",
  alt = false,
}) {
  return (
    <section
      id={id}
      className={`section ${alt ? "section--alt" : ""} ${className}`.trim()}
    >
      <div className="container">
        {(label || title || subtitle) && (
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {label && <span className="section-label">{label}</span>}
            {title && (
              <h2 className="section-title gradient-text">{title}</h2>
            )}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
