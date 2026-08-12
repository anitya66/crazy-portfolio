import skills from "../data/skills";
import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* Section Header */}
      <div className="skills-heading">
        <div className="skills-kicker">
          <span className="kicker-line"></span>
          <span>TECHNICAL ARSENAL</span>
          <span className="kicker-dot"></span>
        </div>

        <h2 className="section-title">
          Skills<span className="title-dot">.</span>
        </h2>

        <div className="title-line"></div>

        <p className="skills-intro">
          Technologies I use to build modern, scalable and
          production-ready applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-wrapper"
            key={skill.title}
          >
            <span className="skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <SkillCard
              title={skill.title}
              icon={skill.icon}
              technologies={skill.technologies}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;