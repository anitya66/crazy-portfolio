function SkillCard({ title, icon, technologies }) {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <span className="skill-icon">{icon}</span>

        <h3>{title}</h3>
      </div>

      <div className="skill-list">
        {technologies.map((tech) => (
          <span key={tech} className="skill-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;