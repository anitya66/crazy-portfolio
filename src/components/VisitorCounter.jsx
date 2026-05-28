import { useEffect, useState }

from "react"

function VisitorCounter(){

const[
count,
setCount
]=useState("...")

useEffect(()=>{

const updateCounter=async()=>{

try{

const response=await fetch(

`https://api.countapi.xyz/hit/crazyportfolioanitya/${Date.now()}`

)

const data=await response.json()

setCount(data.value)

}

catch(error){

console.log(error)

setCount("0")

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

{count}

</p>

</div>

)

}

export default VisitorCounter