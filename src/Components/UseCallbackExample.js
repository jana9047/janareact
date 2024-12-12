import React, { useCallback, useMemo, useState } from 'react'

const UseCallbackExample = () => {
    const [count1,setcount1]=useState(1);
    const [count2,setcount2]=useState(0);
    
    

    const jana=useCallback(()=>{
        console.log('Clicked');
        setcount1((num)=>num*2)
        
    },[count1])
  return (
    <div>
      <h4>the count1 value is {count1}</h4>
      <button onClick=
        {jana}
      >click me</button>

<h4>the count2 value is {count2}</h4>
      <button onClick={()=>{
        setcount2(count2+1)
      }} >click me</button>
    </div>
  )
}

export default UseCallbackExample
