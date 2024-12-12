import React, { useEffect, useState } from 'react'

const UseefectExample = () => {
    const[num,setnum]=useState(100);
    useEffect(()=>{
        
        setnum(200);
        console.log('Useeffect running');
        return ()=>{
            console.log('memory Cleaning');
            
            setnum(100);
        }
    },[num])
    //console.log('num'+num);
  return (
    <div>
      <h1>{num}</h1>
    </div>
  )
}

export default UseefectExample
