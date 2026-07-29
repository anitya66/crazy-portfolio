import skills from "../data/skills";
import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">
        Skills & Technologies
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            technologies={skill.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;