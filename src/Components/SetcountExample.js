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


// import React, { useState } from 'react'

// const SetcountExample = () => {

//     const [name,setname]=useState('xxx')
//     const [age,setage]=useState(19)
//     function handleSubmit(){
//     console.log(name +" "+age)
//     }
//   return (
//     <div>
//       <label htmlFor="name">Name</label>
//       <input type="text" name="name" id="" placeholder='Enter Your Name' onChange={(e) => setname(e.target.value)}/><br />
//       <label htmlFor="age">Age</label>
//       <input type="number" name="age" id=""placeholder='Enter Your Age' onChange={(e) => setage(e.target.value)}/><br/>
//       <button onClick={handleSubmit}>Submit</button>
//       <h3>{name} and {age}</h3>
//     </div>
//   )
// }

// export default SetcountExample

import React,{ useState } from 'react'

const SetcountExample = () => {
    const [celsius, setCelsius] = useState(0);
    const fahrenheit = (celsius * 9) / 5 + 32;
  return (
    <div>
    <input
      type="number"
      value={celsius}
      onChange={(e) => setCelsius(Number(e.target.value))}
    />
    <p>{celsius}°C is equal to {fahrenheit}°F</p>
  </div>
  )
}

export default SetcountExample


