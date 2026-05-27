import profile from "../data/profile"

function Footer(){

const year=
new Date().getFullYear()

return(

<footer
className="footer"
>

<div>

© {year}

{" "}

{profile.name}

</div>

<div>

Portfolio V3

</div>

</footer>

)

}

export default Footer