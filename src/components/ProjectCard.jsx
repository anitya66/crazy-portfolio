function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {/* Project Image */}
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <div className="project-top">
          <div>
            <h3>{project.title}</h3>
            <h4 className="project-subtitle">
              {project.subtitle}
            </h4>
          </div>

          <span
            className={`project-status ${
              project.status === "COMPLETED"
                ? "completed"
                : "progress"
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn secondary-btn"
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;