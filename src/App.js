// import PropsExample from "./Components/PropsExample";
// import SetcountExample from './Components/SetcountExample';
//import UseefectExample from './Components/UseefectExample';
// import UseRefExample from './Components/UseRefExample';
// import UseMemoExample from './Components/UseMemoExample';
// import UseCallbackExample from './Components/UseCallbackExample';
import { createContext, useState } from 'react';
import UseContextExample from './Components/UseContextExample';
import 'bootstrap/dist/css/bootstrap.css'
export const MyContext=createContext();
function App() {
  const[message,setmessage]=useState('hi bro');
  return (
    <div>     
      {/* <PropsExample name="jana" age={21}></PropsExample>
      <PropsExample name="kamal" age={18}></PropsExample> */}

      {/* <SetcountExample></SetcountExample> */}
       {/* <UseefectExample></UseefectExample> */}
       {/* <UseRefExample></UseRefExample> */}
       {/* <UseMemoExample></UseMemoExample> */}
       {/* <UseCallbackExample></UseCallbackExample> */}
       <MyContext.Provider value={{message,setmessage}}>
        <UseContextExample></UseContextExample>
       </MyContext.Provider>
       
    </div>
    
  );
}

export default App;
