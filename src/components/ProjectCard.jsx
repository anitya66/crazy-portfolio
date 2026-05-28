import TiltCard from "./TiltCard"

function ProjectCard({ project }) {

  return (

    <TiltCard>

      <div className="project-card">

        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <div className="project-content">

          <h3>
            {project.title}
          </h3>

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

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >

            View Project

          </a>

        </div>

      </div>

    </TiltCard>

  )

}

export default ProjectCard