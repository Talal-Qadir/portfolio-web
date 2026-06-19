import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";
import { experience } from "../data/portfolio";
import Section from "./Section";
import "./Experience.css";

export default function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Work Experience"
      subtitle="Professional roles where I've built products, solved problems, and grown as a developer."
    >
      <div className="experience__list">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.title}-${item.company}`}
            className="experience__card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="experience__card-glow" aria-hidden="true" />

            <div className="experience__header">
              <span className="experience__icon">
                <Briefcase size={20} />
              </span>

              <div className="experience__meta">
                <div className="experience__title-row">
                  <h3>{item.title}</h3>
                  <span className="experience__type">{item.type}</span>
                </div>

                <div className="experience__company-row">
                  <Building2 size={16} />
                  <span>{item.company}</span>
                  <span className="experience__dot" aria-hidden="true" />
                  <span className="experience__period">{item.period}</span>
                </div>
              </div>
            </div>

            <p className="experience__desc">{item.description}</p>

            {item.highlights?.length > 0 && (
              <ul className="experience__highlights">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
