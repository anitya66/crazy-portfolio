import {
useEffect,
useState
}
from "react"

function ScrollProgress(){

const[
progress,
setProgress
]=useState(0)

useEffect(()=>{

const update=()=>{

const scroll=

window.scrollY

const total=

document.documentElement
.scrollHeight

-
window.innerHeight

const percent=

(
scroll
/
total
)

*
100

setProgress(
percent
)

}

window.addEventListener(
"scroll",
update
)

return()=>{

window.removeEventListener(
"scroll",
update
)

}

},[])

return(

<div

className="progress"

style={{

width:

`${progress}%`

}}

>

</div>

)

}

export default ScrollProgress