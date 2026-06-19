import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";
import { skillCategories, techTags } from "../data/portfolio";
import Section from "./Section";
import "./Skills.css";

const categoryIcons = {
  Frontend: Code2,
  Backend: Database,
  "Tools & Other": Wrench,
};

export default function Skills() {
  return (
    <Section
      id="skills"
      alt
      label="Skills"
      title="Technologies I Work With"
      subtitle="A blend of frontend craft, backend engineering, and modern tooling."
    >
      <div className="skills__layout">
        <div className="skills__categories">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.title] ?? Code2;

            return (
              <motion.article
                key={category.title}
                className="skills__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skills__card-header">
                  <span className="skills__icon">
                    <Icon size={20} />
                  </span>
                  <h3>{category.title}</h3>
                </div>

                <ul className="skills__list">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="skills__row">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skills__bar">
                        <motion.span
                          className="skills__bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="skills__tags"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <h3>Tech Stack</h3>
          <div className="skills__tag-list">
            {techTags.map((tag) => (
              <span key={tag} className="skills__tag">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
