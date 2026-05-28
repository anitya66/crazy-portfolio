import { useEffect, useState }

from "react"

function VisitorCounter(){

const[
count,
setCount
]=useState("...")

useEffect(()=>{

const fetchViews=async()=>{

try{

const response=await fetch(

"https://api.countapi.xyz/hit/anitya-portfolio/livevisits"

)

const data=await response.json()

setCount(data.value)

}

catch(error){

console.log(error)

setCount("0")

}

}

fetchViews()

},[])

return(

<div className="visitor">

<span>

👁

</span>

<p>

{count}</p>

</div>

)

}

export default VisitorCounter