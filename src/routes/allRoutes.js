import React from "react"
import { Redirect } from "react-router-dom"


// Profile
import UserProfile from "../pages/Authentication/user-profile"



// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
// Dashboard
import Dashboard from "pages/Dashboard/index"
import Home from "pages/Home"
import EditText from 'pages/EditText/index';
import EditVoice from 'pages/EditVoice/index';
import Skills from "pages/Skills"
import Lessons from "pages/Lessons"
import Slices from "pages/Slices"

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path : '/profile' , component : UserProfile},
  { path : '/edit-text' , component : EditText},
  { path : '/edit-voice' , component : EditVoice},
  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
  {path: "/home" , component:Home },
  {path: "/skills" , component:Skills },
  {path: "/lessons" , component:Lessons },
  {path: "/slices" , component:Slices },
] 

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path : '/admin/reset-password' , component : ResetPassword},

]

export { userRoutes, authRoutes }
