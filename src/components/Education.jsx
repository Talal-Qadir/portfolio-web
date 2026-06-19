import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import Section from "./Section";
import "./Education.css";

export default function Education() {
  return (
    <Section
      id="education"
      alt
      label="Education"
      title="Academic Background"
      subtitle="My educational journey and the foundation behind my technical skills."
    >
      <div className="education__timeline">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            className="education__item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="education__marker">
              <GraduationCap size={18} />
            </div>

            <div className="education__card">
              <span className="education__period">{item.period}</span>
              <h3>{item.degree}</h3>
              <p className="education__institute">{item.institute}</p>
              <p className="education__desc">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
