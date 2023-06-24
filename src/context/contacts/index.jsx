import React,{createContext,useReducer} from "react";
import { reducer } from "./reducer";

const ContactsContext=createContext();

const ContactsProvider=({children})=>{
  const [state,dispatch]=useReducer(reducer,[]);

  return(
    <ContactsProvider.Provider value={[state,dispatch]}>{children}</ContactsProvider.Provider>
  )
}
export default ContactsProvider