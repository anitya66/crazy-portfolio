import projects from "../data/projects"

import ProjectCard from "../components/ProjectCard"

function Projects(){

  return(

    <section id="projects">

      <h1 className="section-title">

        Featured Project

      </h1>

      <div className="projects-slider">

{

projects.map((project,index)=>(

<ProjectCard

key={index}

project={project}

/>

))

}

</div>

    </section>

  )

}

export default Projects