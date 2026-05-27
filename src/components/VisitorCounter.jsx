import { useEffect, useState } from "react"

function VisitorCounter(){

const[
count,
setCount
]=useState(0)

useEffect(()=>{

const current=

localStorage.getItem(
"visitorCount"
)

if(current){

const newCount=

Number(current)+1

localStorage.setItem(
"visitorCount",
newCount
)

setCount(
newCount
)

}else{

localStorage.setItem(
"visitorCount",
1
)

setCount(
1
)

}

},[])

return(

<div
className="visitor"
>

👁 {count}

</div>

)

}

export default VisitorCounter