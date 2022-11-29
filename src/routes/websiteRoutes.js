import React from "react";
import Pages404 from "../pages/Utility/pages-404";
import Pages500 from "../pages/Utility/pages-500";
import { Redirect } from "react-router";
import Resetpassword from "../pages/Website/Authentication/Resetpassword";
import ForgetPassword from "../pages/Website/Authentication/ForgetPassword"; 
import Login from "../pages/Website/Authentication/Login";
import Home from "pages/Website/Home";

const websiteRoutes = [
 
  // { path: "/terms", component: TermsPage },


  // {
  //   path: `*`,
  //   component: () => <Redirect to={`/home`} />,
  // },
];
const websiteAuthRoutes = [ 
  { path: "/", component: Home }, 
  { path: "/login", component: Login },
  { path: "/forget-password", component: ForgetPassword },
  { path: "/reset-password", component: Resetpassword },
  { path: "/pages-500", component: Pages500 },
 
];

export { websiteAuthRoutes, websiteRoutes };
