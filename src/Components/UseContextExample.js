import React, { useContext } from 'react'
import { MyContext } from '../App'

const UseContextExample = () => {
    const {message,setmessage}=useContext(MyContext)
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}

export default UseContextExample
