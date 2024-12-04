import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {

  // const [count,setcount]=useState(69)
  // function increment(){
  //   setcount((precount)=>{
  //     return precount+1;
  //   })
  // }
  // function decrement(){
  //   setcount((precount)=>{
  //     return precount-1;
  //   })
  // }


  // const [color,setcolor]=useState('blue');
  // function change(){
  //   const color=['blue','pink','orange','red']
  //   let int =Math.floor(Math.random()*4);
  //   setcolor(color[int])
  // }

  // const arr=[1,2,3,4,5]
  // const ans=arr.filter(n=> n<3)
  // console.log(ans)

  const [items,setitems]=useState(
    [
      {
        id:1,
        skills:"javascript",
        checked:true
      },
      {
        id:2,
        skills:"java",
        checked:false
      },
      {
        id:3,
        skills:"bootstrap",
        checked:false
      }
    ]

    
  )
  function onchanged(id){
    console.log(id)
    const newarr=items.map((item)=>{
      if(item.id===id){
        return item;
      }
      else{
        return {...item,checked:!item.checked}
      }
    })
    setitems(newarr)
  }

  return (
    <main>
        {/* <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button> */}
         

        {/* <h1 style={{ color: color }}>{color}</h1>
        <button onClick={change}>clickme</button> */}

        {/* <h1>{ans}</h1> */}

        
        <ul>
            {items.map((item)=>(
              <li>
                <input type="checkbox" checked={item.checked} onChange={()=>onchanged(item.id)}/>
              <label>{item.skills}</label>
              <FaTrashAlt
              role='button'
              tabIndex='0'/>
              </li>
            ))}
          
        </ul>
        </main>
  )
}

export default Content
