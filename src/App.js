import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { adminAuthRoutes, adminRoutes } from "./routes/adminRoutes";
// import { sellerAuthRoutes, sellerRoutes } from "./routes/sellerRoutes";
import Authmiddleware from "./routes/middleware/Authmiddleware";
import VerticalLayout from "./components/VerticalLayout";
import NonAuthLayout from "./components/NonAuthLayout";
import "react-toastify/dist/ReactToastify.css";
import { adminPrefix } from "./configs/routePrefix";
import { websiteAuthRoutes, websiteRoutes } from "./routes/websiteRoutes";

import NonAuthBuyerLayout from "./components/Website/NonAuthBuyerLayout";
// import "./App.scss";
//  import ScrollToTop from "components/Website/ScrollToTop"
import http from "./services/HttpService"
import { useDispatch, useSelector } from "react-redux"
import { authenticate } from "./store/Auth/actions"
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = props => {
  AOS.init()
  // function getLayout() {
  //   let layoutCls = VerticalLayout
  //   switch (props.layout.layoutType) {
  //     default:
  //       layoutCls = VerticalLayout
  //       break
  //   }
  //   return layoutCls
  // }
  // const Layout = getLayout()
  const authData = useSelector(state => state.Auth)
  const dispatch = useDispatch()

  const getToken = async () => {
    const token = await localStorage.getItem("token")
    dispatch(authenticate({token}))
    http.setToken(token)
  }
  useEffect(() => {
    getToken(authData.token)
  }, [])
  useEffect(() => {
    http.setToken(authData.token)
  }, [authData.token])
  function getLayout() {
    let layoutCls = VerticalLayout;

    return layoutCls;
  }

  const Layout = getLayout();
  return (
    <React.Fragment>
         <ToastContainer />
      <Router>
        <Switch>
        {adminAuthRoutes.map((route, idx) => (
                <Authmiddleware
                  path={adminPrefix + route.path}
                  routePrefix={adminPrefix}
                  layout={NonAuthLayout}
                  component={route.component}
                  key={idx}
                  panel='admin'
                  isAuthProtected={false}
                />
              ))}

              {adminRoutes.map((route, idx) => (
                <Authmiddleware
                  path={adminPrefix + route.path}
                  routePrefix={adminPrefix}
                  layout={Layout}
                  component={route.component}
                  key={idx}
                  panel='admin'
                  isAuthProtected={true}
                  exact
                />
              ))}

              {websiteAuthRoutes.map((route, idx) => (
                <Authmiddleware
                  path={route.path}
                  routePrefix={""}
                  layout={NonAuthLayout}
                  component={route.component}
                  key={idx}
                  panel='user'
                  isAuthProtected={false}
                  exact
                />
              ))}

              {websiteRoutes.map((route, idx) => (
                <Authmiddleware
                  path={route.path}
                  routePrefix={""}
                  layout={NonAuthBuyerLayout}
                  component={route.component}
                  key={idx}
                  panel='user'
                  isAuthProtected={true}
                  exact
                />
              ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}

// App.propTypes = {
//   layout: PropTypes.any
// }

// const mapStateToProps = state => {
//   return {
//     layout: state.Layout,
//   }
// }

// export default connect(mapStateToProps, null)(App)
export default App
