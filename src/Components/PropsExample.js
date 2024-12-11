import React from 'react'

// function PropsExample (props){
//   return (
//     <div>
//       <h1>Hi, {props.name}</h1>
//       <h2>My Age is{props.age}</h2>
//     </div>
//   )
// }

// function PropsExample ({name,age}){
//     return (
//       <div>
//         <h1>Hi, {name}</h1>
//         <h2>My Age is{age}</h2>
//       </div>
//     )
//   }

const PropsExample = ({name,age}) => {
  return (
    <div>
     <h1>Hi, {name}</h1>
    <h2>My Age is{age}</h2>
    </div>
  )
}

export default PropsExample



