import "../styles/projects.css"

function ProjectCard({ project }) {

  return (

    <div className="project-card">

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      <div className="project-content">

        <div className="project-top">

          <div>

            <h2>{project.title}</h2>

            <p className="project-subtitle">
              {project.subtitle}
            </p>

          </div>

          <span className="project-status">
            {project.status}
          </span>

        </div>

        <p className="project-description">
          {project.description}
        </p>

        <div className="tech-stack">

          {project.tech.map((tech, index) => (

            <span key={index}>
              {tech}
            </span>

          ))}

        </div>

        <div className="project-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <button disabled>
            Live Demo Soon
          </button>

        </div>

      </div>

    </div>

  )

}

export default ProjectCard