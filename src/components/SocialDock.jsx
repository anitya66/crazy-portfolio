import profile from "../data/profile"

function SocialDock(){

return(

<div className="social">

<a
href={profile.github}
target="_blank"
>

GitHub

</a>

<a
href={profile.linkedin}
target="_blank"
>

LinkedIn

</a>
<a
href={profile.resume}
target="_blank"
>

Resume

</a>

</div>

)

}

export default SocialDock