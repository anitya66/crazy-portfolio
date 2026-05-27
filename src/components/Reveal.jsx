import {
useEffect,
useRef,
useState
}
from "react"

function Reveal({

children

}){

const ref=
useRef()

const[
show,
setShow
]=useState(false)

useEffect(()=>{

const observer=

new IntersectionObserver(

(entries)=>{

entries.forEach(

entry=>{

if(
entry.isIntersecting
){

setShow(true)

}

}

)

}

)

observer.observe(
ref.current
)

return()=>{

observer.disconnect()

}

},[])

return(

<div

ref={ref}

className={`

reveal

${

show

?

"show"

:

""

}

`}

>

{children}

</div>

)

}

export default Reveal