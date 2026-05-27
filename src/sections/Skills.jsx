import skills from "../data/skills"

import SkillCard from
"../components/SkillCard"

function Skills(){

return(

<section
id="skills"
>

<h2
className="section-title"
>

Skills

</h2>

<div
className="skills-grid"
>

{

skills.map(

(skill,index)=>(

<SkillCard

key={index}

title={
skill.title
}

level={
skill.level
}

/>

)

)

}

</div>

</section>

)

}

export default Skills