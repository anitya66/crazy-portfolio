import {

doc,
getDoc,
setDoc,
updateDoc,
increment

}

from "firebase/firestore"

import {

useEffect,
useState

}

from "react"

import { db }

from "../firebase"

function VisitorCounter(){

const[
count,
setCount
]=useState(0)

useEffect(()=>{

const updateVisitorCount=async()=>{

try{

const counterRef=

doc(
db,
"portfolio",
"visitors"
)

const counterSnap=

await getDoc(counterRef)

if(counterSnap.exists()){

await updateDoc(

counterRef,

{

count:
increment(1)

}

)

const updatedSnap=

await getDoc(counterRef)

setCount(
updatedSnap.data().count
)

}

else{

await setDoc(

counterRef,

{

count:1

}

)

setCount(1)

}

}catch(error){

console.log(error)

}

}

updateVisitorCount()

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