import React, { useRef, useState } from 'react'

const UseRefExample = () => {
    const inputRef=useRef();
    const [name,setname]=useState("")
    const Display=()=>{
        setname(inputRef.current.value)
       console.log(inputRef.current.value) 
    }
    
  return (
    <div>
     <h4>Input</h4>
     <input ref={inputRef} type="text" />
     <button onClick={Display}>Click me</button>  
     <h5>My name is {name}</h5>
    </div>
  )
}

export default UseRefExample

