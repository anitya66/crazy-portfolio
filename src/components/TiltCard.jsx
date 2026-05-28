import {
useRef
}
from "react"

function TiltCard({

children

}){

const ref =
useRef()

const move = (e)=>{

const card =
ref.current

const rect =
card.getBoundingClientRect()

const x =
e.clientX - rect.left

const y =
e.clientY - rect.top

const rotateX =
-(y - rect.height/2) / 40

const rotateY =
(x - rect.width/2) / 40

card.style.transform =

`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale3d(1.02,1.02,1.02)
`

}

const leave = ()=>{

ref.current.style.transform =

`
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
scale3d(1,1,1)
`

}

return(

<div

ref={ref}

onMouseMove={move}

onMouseLeave={leave}

className="tilt-card"

>

{children}

</div>

)

}

export default TiltCard