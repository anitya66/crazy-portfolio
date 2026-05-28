function ProjectCard({ project }) {

  return (

    <div className="project-card">

      <div className="project-image-wrapper">

        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

      </div>

      <div className="project-content">

        <div className="project-top">

          <h3>
            {project.title}
          </h3>

          <span className="project-status">

            IN PROGRESS

          </span>

        </div>

        <h4>

          Real-Time Traffic Emergency System

        </h4>

        <p>
          {project.description}
        </p>

        <div className="project-tech">

          {
            project.tech.map((tech, index) => (

              <span key={index}>

                {tech}

              </span>

            ))
          }

        </div>

        <div className="project-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >

            GitHub

          </a>

          <a
            href="#"
            className="project-btn secondary-btn"
          >

            Live Demo Soon

          </a>

        </div>

      </div>

    </div>

  )

}

export default ProjectCard