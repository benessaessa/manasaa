import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

//tasks
  
 import Auth from "./Auth/AuthReducer"
 
const rootReducer = combineReducers({
  // public
  Layout,
    Auth,
   
})

export default rootReducer
