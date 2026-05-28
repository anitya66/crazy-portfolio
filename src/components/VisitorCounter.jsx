import { useEffect, useState }

from "react"

function VisitorCounter(){

const[
count,
setCount
]=useState(0)

useEffect(()=>{

fetch(

"https://api.countapi.xyz/hit/crazy-portfolio/visitor"

)

.then(
(res)=>res.json()
)

.then(
(data)=>{

setCount(data.value)

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

{count}

</p>

</div>

)

}

export default VisitorCounter