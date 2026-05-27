import profile from "../data/profile"

function Contact(){

return(

<section
id="contact"
>

<h1
className="section-title"
>

Let's Build Something

</h1>

<p className="contact-text">

Open to opportunities,
collaboration and projects.

</p>

<div className="contact-buttons">

<a
href={profile.linkedin}
target="_blank"
>

LinkedIn

</a>

<a
href={profile.github}
target="_blank"
>

GitHub

</a>

</div>

</section>

)

}

export default Contact