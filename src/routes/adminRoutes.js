import React from "react";
import Login from "../pages/Admin/Authentication/Login";
import Register from "../pages/Admin/Authentication/Register";
import Resetpassword from "../pages/Admin/Authentication/Resetpassword";
import ForgetPassword from "../pages/Admin/Authentication/ForgetPassword";
import Logout from "../pages/Admin/Authentication/Logout";
import Pages404 from "../pages/Utility/pages-404";
import Pages500 from "../pages/Utility/pages-500";
import AdminDashBoard from "../pages/Admin/Dashboard"
import { Redirect } from "react-router-dom"
import Dashboard from "../pages/Admin/Dashboard"
// import Home from "../pages/Admin/Home"
import EditText from '../pages/Admin/EditText';
import EditVoice from '../pages/Admin/EditVoice';
import Skills from "../pages/Admin/Skills"
import Lessons from "../pages/Admin/Lessons"
import Slices from "../pages/Admin/Slices"
import UserProfile from "../pages/Admin/Authentication/user-profile"
import EditImage from "../pages/Admin/EditImage"
import Vedio from "../pages/Admin/Vedio"
import Show from "../pages/Admin/Show"
import Save from "../pages/Admin/Save"

 const adminRoutes = [


  { path: "/dashboard", component: Dashboard },
  { path : '/profile' , component : UserProfile},
  { path : '/edit-text' , component : EditText},
  { path : '/edit-voice' , component : EditVoice},
  // this route should be at the end of all other routes
   // {path: "/home" , component:Home },edit-image
  {path: "/skills" , component:Skills },
  {path: "/edit-image" , component:EditImage },
  {path: "/vedio" , component:Vedio },

  {path: "/show" , component:Show },
  {path: "/save" , component:Save },

  {path: "/lessons" , component:Lessons },
  {path: "/slices" , component:Slices },

  { path: "/logout", component: Logout },

  { path: "/pages-404", component: Pages404 },
  { path: "/dashboard", component: AdminDashBoard },
 

  { path: "*", component: () => <Redirect to='/admin/pages-404' /> },
  // this route should be at the end of all other routes
];

const adminAuthRoutes = [
  { path: "/login", component: Login },
  { path: "/signup", component: Register },
  { path: "/forget-password", component: ForgetPassword },
  { path: "/reset-password", component: Resetpassword },
  { path: "/pages-500", component: Pages500 },
];

export { adminRoutes, adminAuthRoutes };
