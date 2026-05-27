import { useState } from "react"
import profile from "../data/profile"

function Navbar(){

const[
open,
setOpen
]=useState(false)

return(

<nav className="navbar">

<div className="logo">

{profile.name}

</div>

<div
className="menu"

onClick={()=>

setOpen(
!open
)

}

>

☰

</div>

<ul
className={

open

?

"open"

:

""

}

>

<li>

<a href="#home">

Home

</a>

</li>

<li>

<a href="#skills">

Skills

</a>

</li>

<li>

<a href="#projects">

Projects

</a>

</li>

<li>

<a href="#contact">

Contact

</a>

</li>

</ul>

</nav>

)

}

export default Navbar