import projects from "../data/projects"

import ProjectCard
from "../components/ProjectCard"

function Projects(){

return(

<section
id="projects"
>

<h1
className="section-title"
>

Projects

</h1>

{

projects.length===0

?

(

<div
className="empty-projects"
>

<h2>

Projects Coming Soon

</h2>

<p>

Building something worth showcasing.

</p>

</div>

)

:

(

<div
className="project-grid"
>

{

projects.map(

(project,index)=>(

<ProjectCard

key={index}

title={
project.title
}

tech={
project.tech
}

/>

)

)

}

</div>

)

}

</section>

)

}

export default Projects