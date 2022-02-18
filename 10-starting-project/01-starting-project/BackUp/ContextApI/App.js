import React,{useState, createContext} from "react";
import Component1 from "./Component1";

const UserContext =createContext();

const App = () =>{
  const [user,setUser] = useState("Vishwajeet")
  return (
    <>
      <UserContext.Provider value={user}>
        <h2>{`hello ${user}`}</h2>
        <Component1 user={user}/>
      </UserContext.Provider>
    </>
  )
}
export default App
export {UserContext}