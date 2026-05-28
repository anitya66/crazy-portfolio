import {
useEffect,
useState
}
from "react"

function CustomCursor(){

const[
position,
setPosition
]=useState({

x:0,
y:0

})

useEffect(()=>{

const move=(e)=>{

setPosition({

x:e.clientX,
y:e.clientY

})

}

window.addEventListener(
"mousemove",
move
)

return()=>{

window.removeEventListener(
"mousemove",
move
)

}

},[])

return(

<div

className="custom-cursor"

style={{

left:`${position.x}px`,
top:`${position.y}px`

}}

>

</div>

)

}

export default CustomCursor