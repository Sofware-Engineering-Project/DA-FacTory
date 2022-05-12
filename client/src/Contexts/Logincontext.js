import React,{useSate,createContext, useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import SignIn from "../components/Signin/SignIn";
export const Logincontext  = createContext();

export const LogincredentialProvide = (props)=>{
    const [LoggedIn,setLooggedIn]=useState(false);
     return (
         <Logincontext.Provider value={[LoggedIn,setLooggedIn]} >
            <Navbar/>
            <SignIn/>
         </Logincontext.Provider>
     );
};


