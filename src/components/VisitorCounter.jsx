import { useEffect, useState }

from "react"

function VisitorCounter(){

const[
views,
setViews
]=useState("...")

useEffect(()=>{

const updateCounter=async()=>{

try{

const response=await fetch(

"https://api.countapi.xyz/hit/crazy-portfolio-chi/vercel"

)

const data=await response.json()

setViews(data.value)

}

catch(error){

console.log(error)

}

}

updateCounter()

},[])

return(

<div className="visitor">

<span>

👁

</span>

<p>

{views}

</p>

</div>

)

}

export default VisitorCounter