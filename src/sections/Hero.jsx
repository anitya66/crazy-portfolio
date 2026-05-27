import profile from "../data/profile"

function Hero(){

return(

<section
id="home"
className="hero"
>

<div className="hero-left">

<p className="small-text">

{profile.role}

</p>

<h1>

{profile.tagline
.split(".")
.map((line,index)=>

<div key={index}>
{line}
</div>

)}

</h1>

<p className="hero-desc">

{profile.description}

</p>

<div className="hero-buttons">

<a
href="#projects"
>

<button>

Projects

</button>

</a>

<a
href={profile.github}
target="_blank"
>

<button>

GitHub

</button>

</a>

<a
href={profile.linkedin}
target="_blank"
>

<button>

LinkedIn

</button>

</a>
<a

href={profile.resume}

target="_blank"

>

<button>

Resume

</button>

</a>

</div>

</div>

<div className="hero-right">

<div
className="glow-circle"
>

<img
src="/logo.jpg"
alt="logo"
className="hero-image"
/>

</div>

</div>

</section>

)

}

export default Hero