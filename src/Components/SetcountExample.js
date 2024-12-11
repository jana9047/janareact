// import React, { useState } from 'react'

// const SetcountExample = () => {
//     const [count,setcount]=useState(0);
//   return (
//     <div>
//         <button onClick={()=>setcount(count+1)}>+</button>
//       <h1>{count}</h1>
//       <button onClick={()=>setcount(count-1)}>-</button>
//     </div>
//   )
// }

// export default SetcountExample


import React, { useState } from 'react'

const SetcountExample = () => {

    const [name,setname]=useState('')
    const [age,setage]=useState('')
    
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="" placeholder='Enter Your Name'/><br />
      <label htmlFor="age">Age</label>
      <input type="number" name="age" id=""placeholder='Enter Your Age' />
    </div>
  )
}

export default SetcountExample

