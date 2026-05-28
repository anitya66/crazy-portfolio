import { useEffect, useState }

from "react"

function VisitorCounter(){

const[
views,
setViews
]=useState(null)

useEffect(()=>{

fetch(

"https://api.countapi.xyz/hit/anitya-portfolio/visits"

)

.then(
(res)=>res.json()
)

.then(
(data)=>{

setViews(data.value)

}
)

.catch(
(err)=>console.log(err)
)

},[])

return(

<div className="visitor">

<span>

👁

</span>

<p>

{

views
?

views

:

"..."

}

</p>

</div>

)

}

export default VisitorCounter