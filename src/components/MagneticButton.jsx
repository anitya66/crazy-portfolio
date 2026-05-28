import {
useRef
}
from "react"

function MagneticButton({

children,
href

}){

const ref =
useRef()

const move = (e)=>{

const button =
ref.current

const rect =
button.getBoundingClientRect()

const x =
e.clientX - rect.left

const y =
e.clientY - rect.top

const moveX =
(x - rect.width/2) / 5

const moveY =
(y - rect.height/2) / 5

button.style.transform =

`translate(${moveX}px, ${moveY}px)`

}

const leave = ()=>{

ref.current.style.transform =
"translate(0px,0px)"

}

return(

<a

ref={ref}

href={href}

target="_blank"

rel="noreferrer"

onMouseMove={move}

onMouseLeave={leave}

className="magnetic-btn"

>

{children}

</a>

)

}

export default MagneticButton